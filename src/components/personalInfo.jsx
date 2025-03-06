import { useState } from 'react';

function PersonalInfo({ showItems, log }) {
  return (
    <section className="personalInfo">
      <div className="fullName">
        <label htmlFor="name">Full Name: </label>
        <input
          id="name"
          onChange={(e) => {
            showItems('name', e);
          }}
        />
      </div>
      <div className="email">
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          onChange={(e) => {
            showItems('email', e);
          }}
        />
      </div>
      <div className="phoneNumber">
        <label htmlFor="phone">Phone Number: </label>
        <input
          id="phone"
          onChange={(e) => {
            showItems('phone', e);
          }}
        />
      </div>
    </section>
  );
}
export { PersonalInfo };
