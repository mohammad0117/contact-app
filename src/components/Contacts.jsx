import { useState } from "react";

function Contacts() {
    const [contact,setContact]=useState({
        name:"",
        lastName:"",
        email:"",
        phone:"",
    })
    const changeHandler=(event)=>{
        
    }
  return (
    <div>
      <div>
        <input type="text" placeholder="Name" value={contact.name} onChange={changeHandler} />
        <input type="text" placeholder="Last Name" value={contact.lastName} onChange={changeHandler} />
        <input type="email" placeholder="Email" value={contact.email} onChange={changeHandler} />
        <input type="number" placeholder="Phone" value={contact.phone} onChange={changeHandler} />
        <button>Add Contact</button>
      </div>
    </div>
  );
}

export default Contacts;
