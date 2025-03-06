import { useState } from 'react';

function PersonalInfo({}) {
  const initialPersonal = {
    name: 'Default',
    email: 'default@defaultMail.com',
    phone: '000-000-000',
  };

  const [edit, setEdit] = useState(true);
  const [personalUpdated, setPersonal] = useState(initialPersonal);

  function changePersonal(info, e) {
    setPersonal({ ...personalUpdated, [info]: e.target.value });
  }

  return (
    <section className="personalInfo">
      <div className="fullName">
        <label htmlFor="name">Full Name: </label>
        <input
          id="name"
          onChange={(e) => {
            setPersonal({ ...personalUpdated, name: e.target.value });
          }}
        />
      </div>
      <div className="email">
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          onChange={(e) => {
            setPersonal({ ...personalUpdated, email: e.target.value });
          }}
        />
      </div>
      <div className="phoneNumber">
        <label htmlFor="phone">Phone Number: </label>
        <input
          id="phone"
          onChange={(e) => {
            changePersonal('phone', e);
          }}
        />
      </div>
      <button onClick={() => console.log(personalUpdated)}> Submit</button>
    </section>
  );
}
export { PersonalInfo };
