import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { CssBaseline, theme, ThemeProvider } from "../styles/src";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> <App />
    </ThemeProvider>
  </React.StrictMode>
);
