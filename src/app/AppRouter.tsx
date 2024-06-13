import { Navigate, Route, Routes } from "react-router-dom";
import { BattlePage, TablePage } from "../pages";
import { RootLayout } from "../layouts";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<RootLayout />} >
      <Route index element={<BattlePage />} />
      <Route path="/heroes" element={<TablePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
