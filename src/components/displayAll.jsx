import { useState } from 'react';
import { PersonalInfo } from './personalInfo';
import { EducationInfo } from './educationInfo';
import { WorkInfo } from './workInfo';

export default function DisplayAll() {
  const initialPersonal = {
    name: 'Full Name',
    email: 'email@email.com',
    phone: '000-000-000',
    school: 'School Name',
    degree: 'Degree',
    edStart: '2000-01-01',
    edEnd: '2004-01-01',
    company: 'Company Name',
    position: 'Position Title',
    responsibilities: 'Responsibilities',
    jobStart: '2004-01-01',
    jobEnd: '2006-01-01',
  };

  function CVdisplay() {
    return (
      <>
        <h1 className="fullName">{personalUpdated.name}</h1>
        <div className="contacts">
          <div className="email">{personalUpdated.email} |</div>
          <div className="phone">{personalUpdated.phone}</div>
        </div>
        <h1>Education</h1>
        <h1>{personalUpdated.school}</h1>
        <h1>{personalUpdated.degree}</h1>
        <h1>{personalUpdated.edStart}</h1>
        <h1>{personalUpdated.edEnd}</h1>
        <h1>{personalUpdated.company}</h1>
        <h1>{personalUpdated.position}</h1>
        <h1>{personalUpdated.responsibilities}</h1>
        <h1>{personalUpdated.jobStart}</h1>
        <h1>{personalUpdated.jobEnd}</h1>
      </>
    );
  }

  const [personalUpdated, setPersonal] = useState(initialPersonal);

  return (
    <>
      <section className="inputSection">
        <PersonalInfo
          showItems={(item, e) => setPersonal({ ...personalUpdated, [item]: e.target.value })}
        />
        <EducationInfo
          showItems={(item, e) => setPersonal({ ...personalUpdated, [item]: e.target.value })}
        />
        <WorkInfo
          showItems={(item, e) => setPersonal({ ...personalUpdated, [item]: e.target.value })}
        />
      </section>
      <section className="displaySection">
        <CVdisplay />
      </section>
    </>
  );
}
