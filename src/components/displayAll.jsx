import { useState } from 'react';
import { PersonalInfo } from './personalInfo';

const initialInfo = {
  name: 'Default',
  email: 'default@defaultMail.com',
  phone: '000-000-000',
};

function CVdisplay({ isEdit }) {
  return (
    <>
      <h1>CV</h1>
      {isEdit ? <div>Editable</div> : <div>Submitted</div>}
    </>
  );
}

export default function DisplayAll() {
  const [edit, setEdit] = useState(true);
  return (
    <>
      <PersonalInfo />
      <CVdisplay isEdit={edit} />
    </>
  );
}
