import { ArrowRight } from "@phosphor-icons/react";

type Variant = "solid" | "ghost";

/**
 * Editorial CTA: hairline ghost or a quiet gold solid. The arrow slides on
 * hover and the lift is a restrained 2px — no bouncy scale.
 */
export default function Button({
  href,
  children,
  variant = "ghost",
  arrow = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
}) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-600 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "bg-accent text-olive-deep shadow-lg shadow-black/20 hover:bg-accent-soft"
      : "border border-cream/20 text-cream hover:border-accent hover:text-accent";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      {arrow && (
        <ArrowRight
          size={16}
          weight="bold"
          className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
