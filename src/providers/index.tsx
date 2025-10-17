import type { PropsWithChildren } from "react";
import TanstackQueryProvider from "./tanstack-query";

const Providers = ({ children }: PropsWithChildren) => {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
};

export default Providers;
