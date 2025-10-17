import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./modules/login";
import DashboardPage from "./modules/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/acesso" element={<LoginPage />} />

        <Route path="/painel">
          <Route index element={<DashboardPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
