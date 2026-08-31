export type PageKineticVariant = "work" | "case-study" | "about" | "community" | "life" | "contact" | "resume";

type PageKineticProps = {
  variant: PageKineticVariant;
};

/**
 * Decorative, non-semantic page movement. Each variant is tied to the kind of
 * page it introduces; it never conveys information and respects reduced motion.
 */
export default function PageKinetic({ variant }: PageKineticProps) {
  return (
    <div className={`page-kinetic page-kinetic-${variant}`} data-page-kinetic aria-hidden="true">
      <span className="kinetic-line kinetic-line-one" />
      <span className="kinetic-line kinetic-line-two" />
      <span className="kinetic-dot kinetic-dot-one" />
      <span className="kinetic-dot kinetic-dot-two" />
      <span className="kinetic-bar" />
    </div>
  );
}
