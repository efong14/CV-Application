import { useState } from 'react';

function PersonalInfo({ onSubmit }) {
  const initialPersonal = {
    name: 'Default',
    email: 'default@defaultMail.com',
    phone: '000-000-000',
  };

  const [edit, setEdit] = useState(true);
  const [fullName, setFullName] = useState(initialPersonal.name);
  const [email, setEmail] = useState(initialPersonal.email);
  const [phone, setPhone] = useState(initialPersonal.phone);

  return (
    <section className="personalInfo">
      <div className="fullName">
        <label>Full Name: </label>
        <input />
      </div>
      <div className="email">
        <label>Email: </label>
        <input />
      </div>
      <div className="phoneNumber">
        <label>Phone Number: </label>
        <input />
      </div>
      <button onClick={onSubmit}> Submit</button>
    </section>
  );
}
export { PersonalInfo };
