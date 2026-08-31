import { ResumeData } from "@/lib/data/resume";
import { trackButtonClick } from "@/lib/utils/googleAnalytics";

type ResumeVariantSelectorProps = {
  variants: ResumeData["variants"];
  selectedVariant: string;
  onVariantChange: (variant: string) => void;
};

export default function ResumeVariantSelector({
  variants,
  selectedVariant,
  onVariantChange,
}: ResumeVariantSelectorProps) {
  return (
    <div className='flex flex-wrap gap-3'>
      {Object.keys(variants).map((variantKey) => {
        const variant = variants[variantKey];
        const isSelected = selectedVariant === variantKey;

        return (
          <button
            key={variantKey}
            type="button"
            aria-pressed={isSelected}
            onClick={() => {
              trackButtonClick(
                `resume_variant_${variantKey}`,
                "resume"
              );
              onVariantChange(variantKey);
            }}
            className={`
              px-4 py-2 text-sm font-medium transition-colors border
              ${
                isSelected
                  ? "bg-brand-primary text-white border-brand-primary"
                  : "bg-card text-tertiary hover:text-primary border-card-border"
              }
            `}
          >
            {variant.label}
          </button>
        );
      })}
    </div>
  );
}
