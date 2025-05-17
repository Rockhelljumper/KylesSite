import { ResumeData } from "@/lib/data/resume";

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
            onClick={() => onVariantChange(variantKey)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
              ${
                isSelected
                  ? "bg-brand-gradient text-white shadow-md"
                  : "bg-card-alt text-tertiary hover:bg-card-border hover:text-primary border border-card-border"
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
