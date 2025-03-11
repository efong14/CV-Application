import { useState } from 'react';
function PersonalInfo({ showItems }) {
  const [isActive, setActive] = useState(true);

  function toggle() {
    isActive ? setActive(false) : setActive(true);
  }

  return (
    <section className="personalInfo">
      <div className="inputHeader"> General Information</div>
      <div className="name">
        <label htmlFor="name">Full Name: </label>
        <input
          id="name"
          placeholder="Enter Name"
          onChange={(e) => {
            showItems('name', e);
          }}
        />
      </div>
      <div className="email">
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          placeholder="Enter Email"
          onChange={(e) => {
            showItems('email', e);
          }}
        />
      </div>
      <div className="phone">
        <label htmlFor="phone">Phone Number: </label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter Phone Number"
          onChange={(e) => {
            showItems('phone', e);
          }}
        />
      </div>
    </section>
  );
}
export { PersonalInfo };
