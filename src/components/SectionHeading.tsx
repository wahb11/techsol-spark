interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, centered = true, light = false }: SectionHeadingProps) => (
  <div className={`max-w-2xl mb-12 ${centered ? "mx-auto text-center" : ""}`}>
    {subtitle && (
      <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-2">
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl font-heading ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-base leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
