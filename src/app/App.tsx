import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { AppRouter } from "./AppRouter";

const UnhandledError: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  console.log(error);
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const errorHandler = (
  error: Error,
  info: { componentStack?: string | null }
) => {
  console.log(error);
  console.log(info);
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={UnhandledError} onError={errorHandler}>
      <Router>
        <AppRouter />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
