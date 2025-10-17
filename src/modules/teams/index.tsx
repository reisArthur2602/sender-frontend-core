import { ScreenShareIcon } from "lucide-react";
import { Card, CardContent } from "../../shared/components/shadcnui/card";
import { useDashboard } from "./hooks/use-teams";
import { buttonVariants } from "../../shared/components/shadcnui/button";
import { Link } from "react-router";
import Headline from "../../shared/components/headline";
import Logo from "../../shared/components/logo";
import AddTeams from "./components/add-teams";
import UserMenu from "../../shared/components/user-menu";

const TeamsPage = () => {
  const { teams } = useDashboard();

  return (
    <div className="h-screen">
      <header className="mb-8 border-b py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Logo to="/times" /> <UserMenu />
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-4">
        <Headline
          title="Meus times"
          subtitle="Crie e gerencie seus times."
          children={<AddTeams />}
        />

        <section className="grid grid-cols-3 gap-4">
          {teams.map((team) => (
            <Card key={team.id}>
              <CardContent className="flex items-center justify-between">
                <span>{team.name}</span>
                <Link
                  to={`/times/${team.id}/menu`}
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                    size: "icon-lg",
                  })}
                >
                  <ScreenShareIcon />
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TeamsPage;
