import React, {useEffect} from "react";
import {ContactPicker} from '../../components/contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  useEffect(()=>{
    const date = getTodayString();
    console.log(date);
  },[]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder={"Appointment Title"}
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
        ></input>
        <ContactPicker value={contact} contacts={contacts.map((contact)=>contact.name)} onChange={e => setContact(e.target.value)}/>
        <input 
          placeholder={"Date"}
          min={getTodayString()}
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          required
        ></input>
        <input 
          placeholder={"Time"}
          value={time}
          onChange={(e)=>setTime(e.target.value)}
          required
        ></input>
        <input type="submit" value="Add Appointment" onSubmit={handleSubmit}></input>
      </form>
    </div>
  );
};
