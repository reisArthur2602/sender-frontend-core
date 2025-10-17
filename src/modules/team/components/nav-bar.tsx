import { NavLink, useParams } from "react-router";
import { Bot, LayoutGridIcon, Smartphone, User2Icon } from "lucide-react";
import Logo from "../../../shared/components/logo";
import UserMenu from "../../../shared/components/user-menu";
import { buttonVariants } from "../../../shared/components/shadcnui/button";
import { cn } from "../../../shared/lib/utils";

const navigationLinks = [
  { href: "/", label: "Painel", icon: <LayoutGridIcon /> },
  { href: "menu", label: "Menus", icon: <Bot /> },
  { href: "contatos", label: "Contatos", icon: <User2Icon /> },
  { href: "integracao", label: "Integrações", icon: <Smartphone /> },
];

const Navbar = () => {
  const { team_id } = useParams();

  return (
    <header className="bg-white/[0.01]">
      <div className="flex items-center justify-between px-12 py-3">
        <div className="flex items-center gap-4">
          <Logo to="/times" />
        </div>

        <div className="flex items-center gap-2">
          <UserMenu />
        </div>
      </div>

      <nav className="flex h-12 gap-2 border-b px-12">
        {navigationLinks.map(({ href, label, icon }) => (
          <NavLink
            key={href}
            to={`/times/${team_id}/${href}`}
            className={({ isActive }) =>
              cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: cn(
                    "text-muted-foreground/60 hover:text-secondary-foreground h-full rounded-none border-y-2 border-transparent text-sm font-medium transition-all hover:!bg-transparent",
                    isActive &&
                      "border-b-primary text-secondary-foreground duration-200",
                  ),
                }),
              )
            }
            end
          >
            {icon}
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
