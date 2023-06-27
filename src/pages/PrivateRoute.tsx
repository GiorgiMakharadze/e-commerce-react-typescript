import { FC } from "react";
import { IPrivateRouteProps } from "../types";

const PrivateRoute: FC<IPrivateRouteProps> = ({ children }) => {
  return <>{children}</>;
};

export default PrivateRoute;
