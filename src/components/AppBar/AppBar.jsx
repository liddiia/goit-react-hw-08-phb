//  Створіть компонент Layout, який буде рендерити компонент
//  AppBar і огортати усі маршрути, щоб бути доступним на кожному із них. 

// Компонент AppBar має рендерити компонент навігації Navigation та AuthNav. 
// Водночас авторизований користувач замість AuthNav має бачити UserMenu. 

import { useSelector } from "react-redux";



import css from "./AppBar.module.css";


import { Navigation } from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { selectUsersDataIsLoggedIn } from "../../redux/auth/selectors";


export const AppBar = () => {
  const isLoggedIn = useSelector(selectUsersDataIsLoggedIn);

  return (
    <header className={css.header}>
   
        
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    
    </header>
  );
};