import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./modules/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/acesso" element={<LoginPage />} />

        {/* <Route path="/painel" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
