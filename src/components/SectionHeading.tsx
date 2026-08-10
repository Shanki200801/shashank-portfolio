import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: { label: string; href: string };
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <div
      className={`mb-12 flex flex-col gap-6 sm:flex-row sm:items-end ${
        centered ? "sm:justify-center" : "sm:justify-between"
      }`}
    >
      <div className={centered ? "text-center" : ""}>
        {eyebrow && (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-brand-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className={`rule mt-4 ${centered ? "mx-auto" : ""}`} />
        {description && (
          <p className={`mt-5 max-w-2xl text-muted ${centered ? "mx-auto" : ""}`}>
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand-400 transition-colors hover:text-accent-400"
        >
          {action.label}
          <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
