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
    edEnd: 'Present',
    company: 'Company Name',
    position: 'Position Title',
    responsibilities: 'Responsibilities',
    jobStart: '2004-01-01',
    jobEnd: 'Present',
  };

  function CVdisplay() {
    return (
      <>
        <h1 className="fullNameCV">{personalUpdated.name}</h1>
        <div className="contactsCV">
          <div className="emailCV">{personalUpdated.email} |</div>
          <div className="phoneCV">{personalUpdated.phone}</div>
        </div>
        <h1 className="sectionHeader">Education</h1>
        <div className="sectionContainer">
          <div className="sectionInfo">
            <div className="schoolCV">{personalUpdated.school}</div>
            <div className="degreeCV ">{personalUpdated.degree}</div>
          </div>
          <div className="dates">
            {personalUpdated.edStart} ~ {personalUpdated.edEnd}
          </div>
        </div>
        <h1 className="sectionHeader">Relevant Experience</h1>
        <div className="sectionContainer">
          <div className="sectionInfo">
            <div className="companyCV">{personalUpdated.company}</div>
            <div className="positionCV">{personalUpdated.position}</div>
            <div className="responsibilitiesCV">{personalUpdated.responsibilities}</div>
          </div>
          <div className="dates">
            {personalUpdated.jobStart} ~ {personalUpdated.jobEnd}
          </div>
        </div>
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
