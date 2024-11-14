
import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";
import { selectUsersDataIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
const HomePage = () => {
  const isLoggedIn = useSelector(selectUsersDataIsLoggedIn);
  return (
    <div className={css.homePage}>
      <section className={css.header}>
        <h1>Welcome to Phonebook!</h1>
        <p>Your personal contact manager, always at your fingertips.</p>
      </section>

      <section className={css.features}>
        <h2>Why Phonebook?</h2>
        <ul>
          <li>Secure and private storage of your contacts.</li>
          <li>Quick search and easy access to your contacts.</li>
          <li>Manage your contacts from anywhere, anytime.</li>
        </ul>
      </section>
<section className={css.navigation}>
        <h2>Get Started</h2>
{isLoggedIn ?( <NavLink to="/contacts" className={css.link}>
        <b>  Contacts</b>
        </NavLink>) :(
      <>
        <NavLink to="/register" className={css.link}>
        <b>  Register</b>
        </NavLink>
        <NavLink to="/login" className={css.link}>
         <b> Log in</b>
        </NavLink>
        </>
      )}
      </section>
    </div>
  );
};

export default HomePage;
