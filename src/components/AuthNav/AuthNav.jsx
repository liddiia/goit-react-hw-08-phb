import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

// const linkClasses = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

const AuthNav = () => {
  return (
    <div className={css.authCont}>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? css.active : css.link)}
      >
        Registration
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? css.active : css.link)}
      >
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
