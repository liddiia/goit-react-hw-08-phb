import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUsersDataIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ element, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectUsersDataIsLoggedIn); 
  return isLoggedIn ?  <Navigate to={redirectTo} replace /> : element ;
};

export default RestrictedRoute;