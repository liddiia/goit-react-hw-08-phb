//  Створіть компонент Layout, який буде рендерити компонент
//  AppBar і огортати усі маршрути, щоб бути доступним на кожному із них.
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectUsersDataIsLoggedIn } from "../../redux/auth/selectors";


export const Navigation = () => {
  const isLoggedIn = useSelector(selectUsersDataIsLoggedIn);

  return (
    
      <div className={css.wrapper}>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? css.active : css.link)}
            >
              Contacts
            </NavLink>
          )}
        </nav>
      </div>
    
  );
};
