import React from "react";
import './contactForm.css'

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const RegExp = '[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}';
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required></input><br></br>
      <input placeholder="Phone {###-####-####}" pattern={RegExp} value={phone} onChange={(e)=>setPhone(e.target.value)} required></input><br></br>
      <input placeholder={"Email"} value={email} onChange={(e)=>setEmail(e.target.value)} required></input><br></br>
      <input type="submit" value='Add Contact Information'></input>
    </form>
  );
};
