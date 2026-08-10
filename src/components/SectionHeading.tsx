import Link from "next/link";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
}

const SectionHeading = ({ eyebrow, title, description, action }: SectionHeadingProps) => (
  <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
    <div>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 className="text-2xl font-semibold sm:text-[1.7rem]">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-muted">{description}</p>}
    </div>

    {action && (
      <Link href={action.href} className="link-accent shrink-0 text-sm">
        {action.label} &rarr;
      </Link>
    )}
  </div>
);

export default SectionHeading;
