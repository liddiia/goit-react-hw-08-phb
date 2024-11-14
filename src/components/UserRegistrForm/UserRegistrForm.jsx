import css from "./UserRegistrForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { apiRegisterUser } from "../../redux/auth/operations";


const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Email mast be a valid format!")
      .required("Email is required"),
      password:Yup.string()
      .min(8, "Too Short! Password length must be at least 8 characters!")
        .required("Password is required"),
  });


const UserRegistrForm = () => {
 const dispatch = useDispatch();
 const handleSubmit = (values, actions) => {
    dispatch(apiRegisterUser(values))
    console.log(values);

  actions.resetForm();
  };
  return (
    <div className={css.registrFormCont} >
        <h2> Registration Form</h2>
        <Formik
        initialValues={{
          name: "",
          email: "",
password:"",
       } }
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}
      >
        <Form className={css.contactForm}>
          <label className={css.formLabelTitle} >
            <b>Name</b>
          </label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Samanta Smith"
           
          />
          <ErrorMessage className={css.error} name="name" component="span" />
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
           Sign Up
          </button>
        </Form>
      </Formik>
        
        
        </div>
  )
}

export default UserRegistrForm;
