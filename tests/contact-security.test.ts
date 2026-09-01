import { describe, expect, it } from "vitest";
import {
  CONTACT_TURNSTILE_ACTION,
  verifyTurnstileToken,
} from "@/lib/contact/turnstile";
import { escapeHtml } from "@/lib/utils/escapeHtml";
import { contactFormSchema } from "@/lib/validation/contactSchema";

describe("contact security boundaries", () => {
  it("escapes untrusted HTML before it is used in email markup", () => {
    expect(escapeHtml(`<img src=x onerror="alert('x')">`)).toBe("&lt;img src=x onerror=&quot;alert(&#39;x&#39;)&quot;&gt;");
  });

  it("rejects line breaks in email header fields", () => {
    const result = contactFormSchema.safeParse({
      fullName: "Jane Doe",
      email: "jane@example.com",
      subject: "Hello\r\nBcc: other@example.com",
      message: "This is a sufficiently long test message.",
      turnstileToken: "test-token",
    });
    expect(result.success).toBe(false);
  });

  it("validates the Turnstile action on the server with a form-encoded request", async () => {
    const fetchMock = async (input: RequestInfo | URL, init?: RequestInit) => {
      expect(input).toBe("https://challenges.cloudflare.com/turnstile/v0/siteverify");
      expect(init?.method).toBe("POST");
      expect(init?.headers).toEqual({
        "Content-Type": "application/x-www-form-urlencoded",
      });
      expect(init?.body).toContain("secret=turnstile-secret");
      expect(init?.body).toContain("response=turnstile-token");
      expect(init?.body).toContain("remoteip=203.0.113.10");

      return new Response(
        JSON.stringify({ success: true, action: CONTACT_TURNSTILE_ACTION }),
        { status: 200 }
      );
    };

    await expect(
      verifyTurnstileToken({
        token: "turnstile-token",
        secretKey: "turnstile-secret",
        remoteIp: "203.0.113.10",
        fetchImpl: fetchMock,
      })
    ).resolves.toBe(true);
  });

  it("rejects a token minted for another Turnstile action", async () => {
    await expect(
      verifyTurnstileToken({
        token: "turnstile-token",
        secretKey: "turnstile-secret",
        fetchImpl: async () =>
          new Response(JSON.stringify({ success: true, action: "newsletter" }), {
            status: 200,
          }),
      })
    ).resolves.toBe(false);
  });
});
