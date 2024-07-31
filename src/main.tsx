import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { CssBaseline, ThemeProvider, theme } from "./styles";
import { DataProvider } from "./data/utils";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline /> <App />
      </ThemeProvider>
    </DataProvider>
  </React.StrictMode>
);
