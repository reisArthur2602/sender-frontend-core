import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./modules/login";
import TeamsPage from "./modules/teams";
import MenuPage from "./modules/menus";
import IntegrationPage from "./modules/integration";
import TeamLayout from "./modules/team/components/team-layout";
import LeadsPage from "./modules/leads";
import TeamPage from "./modules/team";
import CreateMenuPage from "./modules/menu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/acesso" element={<LoginPage />} />

        <Route path="/times">
          <Route index element={<TeamsPage />} />

          <Route path=":teamId" element={<TeamLayout />}>
            <Route index element={<TeamPage />} />
            <Route path="menus" element={<MenuPage />} />
            <Route path="menus/:menuId" element={<CreateMenuPage />} />
            <Route path="contatos" element={<LeadsPage />} />
            <Route path="integracao" element={<IntegrationPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
