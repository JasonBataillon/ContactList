import React, { useState, useEffect } from 'react';

const selectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId) {
      const fetchContact = async () => {
        try {
          const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );
          const result = await response.json();
          setContact(result);
        } catch (e) {
          console.error(e);
        }
      };
      fetchContact();
    }
  }, [selectedContactId]);

  if (!contact) return <div>Loading...</div>;

  return (
    <div>
      <h1>Selected Contact</h1>
      <p>Name: {contact.name}</p>
      <p>Username: {contact.username}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>
        Address: {contact.address.street} {contact.address.suite}{' '}
        {contact.address.city} {contact.address.zipcode}
      </p>
      <p>Website: {contact.website}</p>
      <p>Company: {contact.company.name}</p>
      <button onClick={() => setSelectedContactId(null)}>Return</button>
    </div>
  );
};

export default selectedContact;
