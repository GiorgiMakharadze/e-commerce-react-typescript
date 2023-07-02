import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { IPrivateRouteProps } from "../types";

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
