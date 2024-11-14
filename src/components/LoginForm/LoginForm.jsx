import css from "./LoginForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";


import { useDispatch } from "react-redux";
import { apiLoginUser } from "../../redux/auth/operations";

const LogInSchema = Yup.object().shape({
  
    email: Yup.string()
      .email("Email mast be a valid format!")
      .required("Email is required"),
      password:Yup.string()
      .min(8, "Too Short! Password length must be at least 8 characters!")
        .required("Password is required"),
  });

const LoginForm = () => {
    const dispatch = useDispatch();


 const handleSubmit = (values, actions) => {
   dispatch(apiLoginUser(values))

  actions.resetForm();
  };

  return (
    <div className={css.loginFormCont}>
        <h2 className={css.loginFormTitle}>Login Form</h2>

        <Formik
        initialValues={{
         email: "",
password:"",
       } }
        onSubmit={handleSubmit}
        validationSchema={LogInSchema}
      >
    <Form className={css.contactForm}>
          <label className={css.formLabelTitle} >
            <b>Email</b>
          </label>
          <Field
            className={css.formInput}
            type="text"
            name="email"
            placeholder="example@email.com"
           
          />
          <ErrorMessage className={css.error} name="email" component="span" />

          <label className={css.formLabelTitle} >
            <b>Password</b>
          </label>
          <Field
            className={css.formInput}
            type="password"
            name="password"
            placeholder="********"
           
          />
          <ErrorMessage className={css.error} name="password" component="span" />


          <button className={css.addContactBtn} type="submit">
           Log In
          </button>
        </Form>
      </Formik>

    </div>
  )
}

export default LoginForm;

