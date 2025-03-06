import { useState } from 'react';

function PersonalInfo({ onSubmit }) {
  const initialPersonal = {
    name: 'Default',
    email: 'default@defaultMail.com',
    phone: '000-000-000',
  };

  const [edit, setEdit] = useState(true);
  const [personalUpdated, setPersonal] = useState(initialPersonal);

  return (
    <section className="personalInfo">
      <div className="fullName">
        <label htmlFor="name">Full Name: </label>
        <input id="name" />
      </div>
      <div className="email">
        <label htmlFor="email">Email: </label>
        <input id="email" />
      </div>
      <div className="phoneNumber">
        <label htmlFor="phone">Phone Number: </label>
        <input id="phone" />
      </div>
      <button onClick={onSubmit}> Submit</button>
    </section>
  );
}
export { PersonalInfo };
