import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { CssBaseline, ThemeProvider, theme } from "./styles";
import { DataProvider } from "./data";
import { Provider } from "jotai";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense>
      <Provider>
        <DataProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline /> <App />
          </ThemeProvider>
        </DataProvider>
      </Provider>
    </React.Suspense>
  </React.StrictMode>
);
