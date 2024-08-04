import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Boundary } from "../components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const App: React.FC = () => {
  return (
      <Boundary>
        <Router>
          <AppRouter />
        </Router>
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </Boundary>
  );
}

export default App;
