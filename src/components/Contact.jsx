import React from "react";

function Contact({ contact }) {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Email: {contact.email || "your-email@example.com"}</p>
      <p>Phone: {contact.phone || "123-456-7890"}</p>
      <p>Address: {contact.address || "Your Address Here"}</p>
    </section>
  );
}

export default Contact;
