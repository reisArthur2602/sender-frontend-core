import { Link } from "react-router";
import { cn } from "../lib/utils";

type Logo = {
  containerClassname?: string;
  to: string;
};

const Logo = ({ containerClassname, to }: Logo) => {
  return (
    <Link to={to} className={cn(containerClassname, "size-fit")}>
      <img
        src="/sender-logo.svg"
        alt="Logo do sender.io"
        className="size-6 cursor-pointer"
      />
    </Link>
  );
};
export default Logo;
