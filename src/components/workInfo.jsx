function WorkInfo({ showItems }) {
  return (
    <section className="workInfo">
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
          value="2004-01-01"
          onChange={(e) => {
            showItems('workStart', e);
          }}
        />
        <label htmlFor="workEnd">End Date: </label>
        <input
          id="workEnd"
          type="date"
          value="2006-01-01"
          onChange={(e) => {
            showItems('workEnd', e);
          }}
        />
      </div>
    </section>
  );
}
export { WorkInfo };
