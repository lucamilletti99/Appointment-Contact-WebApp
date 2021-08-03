import React, {useState} from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm'
import {TileList} from '../../components/tileList/TileList'

export const AppointmentsPage = (props) => {
  const {contacts, addAppointment, appointments} = props;
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [contact,setContact] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(title,contact,date,time);
    setTitle('');
    setDate('');
    setTime('');
    setContact('');
  };
 
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
