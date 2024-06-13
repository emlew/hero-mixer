import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { BattlePage, TablePage, RootLayout, ErrorPage } from "../pages";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

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
  // Do something with the error
  // E.g. log to an error logging client here
  console.log("TODO: Log the error to an error logging client");
  console.log(error);
  console.log(info);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <BattlePage /> }, // or index: true
      { path: "/heroes", element: <TablePage /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

function App() {
  return (
    <ErrorBoundary FallbackComponent={UnhandledError} onError={errorHandler}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
