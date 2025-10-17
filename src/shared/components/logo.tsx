import { cn } from "../lib/utils";

type Logo = {
  containerClassname?: string;
};

const Logo = ({ containerClassname }: Logo) => {
  return (
    <div className={cn(containerClassname, "size-fit")}>
      <img
        src="/sender-logo.svg"
        alt="Logo do sender.io"
        className="size-6 cursor-pointer"
      />
    </div>
  );
};
export default Logo;
