import ProtectedRoute from "./components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginSuccess from "./pages/LoginSuccess";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />

    <Route
      path="/login-success"
      element={<LoginSuccess />}
    />

    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
  </Routes>
  );
}

export default App;