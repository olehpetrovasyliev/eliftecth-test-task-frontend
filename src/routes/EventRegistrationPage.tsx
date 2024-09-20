import React from "react";
import { useParams } from "react-router-dom";

const EventRegistrationPage = () => {
  const { id } = useParams<{ id: string }>();

  const handleSubmit = (e: any, values: any) => {
    e.preventDefault;
    console.log(values);
  };

  return (
    <section className="eventRegistration">
      <div className="eventRegistration__wrapper">
        <h1 className="eventRegistration__title">Event Registration</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="name" />
          </label>
          <label>
            <input type="mail" name="email" />
          </label>
          <label>
            <input type="date" name="date_of_birth" />
          </label>
          <label>
            <input type="radio" name="heard_about_us" value="Friends" />
          </label>
          <label>
            <input type="radio" name="heard_about_us" value="Social Media" />
          </label>
          <label>
            <input type="radio" name="heard_about_us" value="Advertisement" />
          </label>
        </form>
      </div>
      <button type="submit">submit</button>
    </section>
  );
};

export default EventRegistrationPage;
