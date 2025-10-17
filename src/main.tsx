import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "sonner";

import Providers from "./providers/index.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <>
    <Providers>
      <StrictMode>
        <App />
      </StrictMode>
      <Toaster expand richColors theme="dark" />
    </Providers>
  </>,
);
