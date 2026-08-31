import { describe, expect, it } from "vitest";
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
});
