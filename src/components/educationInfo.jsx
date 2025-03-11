function EducationInfo({ showItems }) {
  return (
    <section className="educationInfo">
      <div className="inputHeader"> Education</div>
      <div className="school">
        <label htmlFor="school">School: </label>
        <input
          id="school"
          placeholder="Enter School Name"
          onChange={(e) => {
            showItems('school', e);
          }}
        />
      </div>
      <div className="degree">
        <label htmlFor="degree">Degree: </label>
        <input
          id="degree"
          placeholder="Enter Degree Name"
          onChange={(e) => {
            showItems('degree', e);
          }}
        />
      </div>
      <div className="edDuration">
        <label htmlFor="edStart">Start Date: </label>
        <input
          id="edStart"
          type="date"
          onChange={(e) => {
            showItems('edStart', e);
          }}
        />
        <label htmlFor="edEnd">End Date: </label>
        <input
          id="edEnd"
          type="date"
          onChange={(e) => {
            showItems('edEnd', e);
          }}
        />
      </div>
    </section>
  );
}
export { EducationInfo };
