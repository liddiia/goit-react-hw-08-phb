import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUsersDataIsLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ element, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectUsersDataIsLoggedIn); 
  return isLoggedIn ? element : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
