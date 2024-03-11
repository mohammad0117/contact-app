import React from "react";

function ContactItem({ data: { id, name, lastName, email, phone }, deleteHandler }) {
  console.log({ id });
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📫</span> {email}
      </p>
      <p>
        <span>📞</span> {phone}
      </p>
      <button onClick={() => deleteHandler(id)}>🗑️</button>
    </li>
  );
}

export default ContactItem;
