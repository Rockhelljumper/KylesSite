export const CONTACT_TURNSTILE_ACTION = "contact";

type TurnstileVerificationResponse = {
  success: boolean;
  action?: string;
};

type VerifyTurnstileTokenOptions = {
  token: string;
  secretKey: string;
  remoteIp?: string;
  fetchImpl?: typeof fetch;
};

/**
 * Validates a one-time Turnstile token on the server. A successful widget
 * render alone is never treated as proof that a form submission is human.
 */
export async function verifyTurnstileToken({
  token,
  secretKey,
  remoteIp,
  fetchImpl = fetch,
}: VerifyTurnstileTokenOptions): Promise<boolean> {
  const body = new URLSearchParams({
    secret: secretKey,
    response: token,
  });

  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  try {
    const response = await fetchImpl(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error("Turnstile verification endpoint returned an error", {
        status: response.status,
      });
      return false;
    }

    const result = (await response.json()) as TurnstileVerificationResponse;
    return result.success && result.action === CONTACT_TURNSTILE_ACTION;
  } catch (error) {
    console.error("Turnstile verification request failed", error);
    return false;
  }
}
