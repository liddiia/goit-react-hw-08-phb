import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import css from "./ContactList.module.css";
import { selectFilterContacts } from "../../redux/contacts/selectors";


const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);

  return ( 
    <div>
      <h2>Contacts</h2>
      
        <ul className={css.listBox}>
          {contacts.length===0 ? (
            <p>There are no contacts in your Phonebook!</p>
          ):(contacts.map((contact) => (
            <li key={contact.id}>
              <ContactItem id={contact.id} name={contact.name} number={contact.number} />
            </li>
          )))}
        </ul>
     
    </div>
  );
};

export default ContactList;
