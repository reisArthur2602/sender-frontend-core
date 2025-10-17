import type { ReactNode } from "react";

type HeadlineProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  type?: "section" | "default";
};

const Headline = ({
  subtitle,
  title,
  children,
  type = "default",
}: HeadlineProps) => {
  return (
    <div className="flex justify-between">
      <div>
        {type === "default" ? <h2>{title}</h2> : <h3>{title}</h3>}
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};

export default Headline;
