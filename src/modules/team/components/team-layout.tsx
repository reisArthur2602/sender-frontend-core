import { Outlet, useParams } from "react-router";
import Navbar from "./nav-bar";

import WelcomeModal from "./welcome-modal";

const TeamLayout = () => {
  const { teamId } = useParams();

  return (
    <>
      <div className="h-screen">
        <Navbar />
        <main className="container mx-auto grid p-8">
          <Outlet />
        </main>
      </div>
      <WelcomeModal />
    </>
  );
};

export default TeamLayout;
