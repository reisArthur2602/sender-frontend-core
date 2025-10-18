import { LogOutIcon, Settings, User2Icon } from "lucide-react";
import { useAuth } from "../hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./shadcnui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/avatar";

const UserMenu = () => {
  const { logout, user } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-9 cursor-pointer">
          <AvatarImage src={user?.image} alt="Profile image" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {user?.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={logout}>
          <Settings className="opacity-60" aria-hidden="true" />
          Configurações
        </DropdownMenuItem>

        <DropdownMenuItem onClick={logout}>
          <User2Icon className="opacity-60" aria-hidden="true" />
          Meu Perfil
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>
          <LogOutIcon className="opacity-60" aria-hidden="true" />
          Sair da conta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
