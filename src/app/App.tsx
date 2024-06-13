import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Boundary } from "../components";

function App() {
  return (
    <Boundary>
      <Router>
        <AppRouter />
      </Router>
    </Boundary>
  );
}

export default App;
