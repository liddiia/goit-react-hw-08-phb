import { useDispatch, useSelector } from "react-redux";

import css from "./UserMenu.module.css";

import { apiLogoutUser } from "../../redux/auth/operations";
import { selectUsersData } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUsersData);
  const onLogout = () => {
    dispatch(apiLogoutUser()); // Виконання операції logout
  };
  return (
    <div className={css.userMenuCont}>
      <span className={css.spanHello}> <b>Hello, {userData.name} !</b> </span>
      <button onClick={onLogout} type="button">
        {" "}
        Logout{" "}
      </button>
    </div>
  );
};

export default UserMenu;
