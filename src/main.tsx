import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.rtl.css";

import { ThemeProvider } from "react-bootstrap";
import { StoreProvider } from "./Components/context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider dir="rtl">
      <StoreProvider>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </BrowserRouter>
);