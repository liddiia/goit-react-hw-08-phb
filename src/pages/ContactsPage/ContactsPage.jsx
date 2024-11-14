import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

import { useDispatch, useSelector } from "react-redux";

import { apiGetContacts } from "../../redux/contacts/operations"         

import { Toaster, toast } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { useEffect } from "react";
import { selectContacts, selectError, selectIsLoading } from "../../redux/contacts/selectors";


const ContactsPage = () => {
 
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const contacts = useSelector(selectContacts)
 
  useEffect(()=>{ 
  
  dispatch(apiGetContacts())
  .unwrap()
  .then(() => {
    toast.success("The phonebook is loaded!");
  })
  .catch((error)=> {
    toast.error(error.message);
  });
   },[dispatch]
)
 

  return (
    <div
      style={{

        display: "block",
        flexDirection: "column",
        marginLeft: "20px",
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm  />
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
       <SearchBox   />  
   { contacts=== null ?
   (<p> <b>There are no contacts in your Phonebook yet!</b></p>) :
     ( <ContactList />)}
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "#4b723a",
            },
          },
          error: {
            icon: "❌",
            style: {
              background: "#c86b62",
            },
          },
        }}
      />
    </div>
  );
};

export default ContactsPage;