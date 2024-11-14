import {lazy, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { apiGetCurrentUser } from "./redux/auth/operations";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { Layout } from "./components/Layout";
import { selectUsersDataIsRefreshing } from "./redux/auth/selectors";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));



const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(apiGetCurrentUser());
    },[dispatch]);
const isRefreshing = useSelector(selectUsersDataIsRefreshing);
 if(isRefreshing) {return <div><Loader /></div>}
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/register" element={<RestrictedRoute element={<RegistrationPage />}/>} />
          <Route path="/login" element={<RestrictedRoute element={<LoginPage />}/>}/>
          <Route
            path="/contacts"
            element={<PrivateRoute element={<ContactsPage />} />}
          />
         </Routes>
        
  </Layout>
  );
};

export default App;
