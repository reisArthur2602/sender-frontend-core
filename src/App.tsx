import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./modules/login";
import TeamsPage from "./modules/teams";
import MenuPage from "./modules/team/menu";
import IntegrationPage from "./modules/team/integration";
import TeamLayout from "./modules/team/components/team-layout";
import LeadsPage from "./modules/team/leads";
import TeamPage from "./modules/team";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/acesso" element={<LoginPage />} />

        <Route path="/times">
          <Route index element={<TeamsPage />} />

          <Route path=":team_id" element={<TeamLayout />}>
            <Route index element={<TeamPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="contatos" element={<LeadsPage />} />
            <Route path="integracao" element={<IntegrationPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
