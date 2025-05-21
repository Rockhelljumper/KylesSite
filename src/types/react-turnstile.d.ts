declare module "@marsidev/react-turnstile" {
  export interface TurnstileProps {
    siteKey: string;
    onSuccess: (token: string) => void;
    onError?: () => void;
    onExpire?: () => void;
    theme?: "light" | "dark" | "auto";
    size?: "normal" | "compact";
    appearance?: "always" | "execute" | "interaction-only";
    responseField?: boolean;
    responseFieldName?: string;
    className?: string;
  }

  export const Turnstile: React.FC<TurnstileProps>;
}
