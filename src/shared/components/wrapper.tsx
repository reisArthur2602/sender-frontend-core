import type { ReactNode } from "react";
import { cn } from "../lib/utils";

type Wrapper = {
  className?: string;
  children: ReactNode;
};
const Wrapper = ({ className, children }: Wrapper) => {
  return <div className={cn(className, "grid gap-6")}>{children}</div>;
};

export default Wrapper;
