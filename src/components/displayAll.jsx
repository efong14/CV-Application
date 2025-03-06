import { useState } from 'react';
import { PersonalInfo } from './personalInfo';

export default function DisplayAll() {
  const initialPersonal = {
    name: 'Default',
    email: 'default@defaultMail.com',
    phone: '000-000-000',
  };

  function CVdisplay() {
    return (
      <>
        <h1>{personalUpdated.name}</h1>
        <h1>{personalUpdated.email}</h1>
        <h1>{personalUpdated.phone}</h1>
      </>
    );
  }

  const [personalUpdated, setPersonal] = useState(initialPersonal);

  return (
    <>
      <PersonalInfo
        showItems={(item, e) => setPersonal({ ...personalUpdated, [item]: e.target.value })}
      />
      <CVdisplay />
    </>
  );
}
