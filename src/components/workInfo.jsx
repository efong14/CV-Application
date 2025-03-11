function WorkInfo({ showItems }) {
  return (
    <section className="workInfo">
      <div className="inputHeader"> Relevant Experience</div>
      <div className="company">
        <label htmlFor="company">Company Name: </label>
        <input
          id="company"
          placeholder="Enter Company Name"
          onChange={(e) => {
            showItems('company', e);
          }}
        />
      </div>
      <div className="position">
        <label htmlFor="position">Position Name: </label>
        <input
          id="position"
          placeholder="Enter Position Name"
          onChange={(e) => {
            showItems('position', e);
          }}
        />
      </div>
      <div className="responsibilities">
        <label htmlFor="responsibilities">Responsibilities: </label>
        <textarea
          id="responsibilities"
          rows="5"
          placeholder="Enter Responsibilities Here"
          onChange={(e) => {
            showItems('responsibilities', e);
          }}
        />
      </div>
      <div className="workDuration">
        <label htmlFor="workStart">Start Date: </label>
        <input
          id="workStart"
          type="date"
          onChange={(e) => {
            showItems('jobStart', e);
          }}
        />
        <label htmlFor="workEnd">End Date: </label>
        <input
          id="workEnd"
          type="date"
          onChange={(e) => {
            showItems('jobEnd', e);
          }}
        />
      </div>
    </section>
  );
}
export { WorkInfo };
