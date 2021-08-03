import React from "react";

export const ContactPicker = ({onChange, contacts}) => {
  return (
    <select onChange={onChange}>
      <option value=""></option>
      {contacts.map((contact, index) => <option key={index} value={contact} selected="">{contact}</option>)}
    </select>
  );
};
