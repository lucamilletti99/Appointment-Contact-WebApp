import React, {useState,useEffect} from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const {contacts, setContacts, addContact} = props;
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   console.log(`Name: ${name}`);
   duplicateCheck();
   console.log("Value of duplicate name: "+duplicateName);
    if(!duplicateName){ //if duplicate name is set to true, addContact
      addContact(name,phone,email);
      setName('');
      setPhone('');
      setEmail('');
    }
    else{
      //alert("Please Enter A different name!");
      setName('');
      setPhone('');
      setEmail('');
    }
  };
  
  const duplicateCheck = () => { //flow on correct enter: return false
    let value = contacts.find((contact)=> contact.name === name);
    if(value !== undefined){
      return false;
    }else return true;
  }
  useEffect(()=>{ //on returned false from duplicate check, setDuplicateName to true
    if(duplicateCheck()) setDuplicateName(false); //if the contacts/find is empty, return false and no duplicate name
    else setDuplicateName(true);
  }, [name, contacts, duplicateName]);
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          tiles={contacts}
        />
      </section>
    </div>
  );
};
