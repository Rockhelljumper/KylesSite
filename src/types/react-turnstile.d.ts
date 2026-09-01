declare module "@marsidev/react-turnstile" {
  export interface TurnstileOptions {
    action?: string;
    theme?: "light" | "dark" | "auto";
    size?: "normal" | "compact" | "flexible" | "invisible";
    appearance?: "always" | "execute" | "interaction-only";
    responseField?: boolean;
    responseFieldName?: string;
  }

  export interface TurnstileProps {
    siteKey: string;
    onSuccess: (token: string) => void;
    onError?: (error?: string) => void;
    onExpire?: () => void;
    theme?: "light" | "dark" | "auto";
    size?: "normal" | "compact" | "flexible" | "invisible";
    appearance?: "always" | "execute" | "interaction-only";
    responseField?: boolean;
    responseFieldName?: string;
    className?: string;
    options?: TurnstileOptions;
  }

  export const Turnstile: React.FC<TurnstileProps>;
}
