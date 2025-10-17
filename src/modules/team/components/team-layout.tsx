import { Outlet } from "react-router";
import Navbar from "./nav-bar";

import WelcomeModal from "./welcome-modal";

const TeamLayout = () => {
  return (
    <>
      <div className="min-h-dvh">
        <Navbar />
        <main className="container mx-auto h-full p-8">
          <Outlet />
        </main>
      </div>
      <WelcomeModal />
    </>
  );
};

export default TeamLayout;
