import { Navigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

interface Props {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: Props) {

  const token = localStorage.getItem("jwt");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}