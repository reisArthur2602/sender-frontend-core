import { ArrowRight, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "../../shared/components/shadcnui/card";
import { useDashboard } from "./hooks/use-teams";
import { buttonVariants } from "../../shared/components/shadcnui/button";

import Headline from "../../shared/components/headline";
import Logo from "../../shared/components/logo";
import AddTeams from "./components/add-teams";
import UserMenu from "../../shared/components/user-menu";
import { Link } from "react-router";
import { cn } from "../../shared/lib/utils";

const TeamsPage = () => {
  const { teams } = useDashboard();

  return (
    <div className="h-screen">
      <header className="mb-8 border-b py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Logo to="/times" /> <UserMenu />
        </div>
      </header>

      <main className="container mx-auto grid gap-4">
        <Headline
          title="Meus times"
          subtitle="Crie e gerencie seus times."
          children={<AddTeams />}
        />

        <section
          className={cn(
            "grid gap-4",
            teams.length > 3 ? "grid-cols-4" : "grid-cols-3",
          )}
        >
          {teams.map((team) => (
            <Card key={team.id}>
              <CardHeader>
                <div className="bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Smartphone className="text-primary" />
                </div>

                <CardTitle>{team.name}</CardTitle>
              </CardHeader>

              <CardContent>
                <Link
                  to={`/times/${team.id}`}
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full cursor-pointer",
                  })}
                >
                  Acessar
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};

export default TeamsPage;
