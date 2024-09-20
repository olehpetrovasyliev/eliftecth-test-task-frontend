import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ParticipantInput } from "../helpers/types";
import { addParticipantToEvent } from "../helpers/api";

const EventRegistrationPage = () => {
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit } = useForm<ParticipantInput>();

  const onSubmit = async (data: ParticipantInput) => {
    if (id) {
      console.log(data);

      await addParticipantToEvent(id, data);
    } else {
      console.error("Event ID is undefined");
    }
  };

  return (
    <section className="eventRegistration">
      <div className="eventRegistration__wrapper">
        <h1 className="eventRegistration__title">Event Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name:
            <input
              type="text"
              {...register("name", { required: "Name is requires" })}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
            />
          </label>
          <label>
            Date of birth:
            <input
              type="date"
              {...register("date_of_birth", {
                required: "Date of birth is required",
              })}
            />
          </label>
          <label>
            Friend:
            <input
              type="radio"
              value="Friend"
              {...register("heard_about_us", {
                required: "Please select how you heard about us",
              })}
            />
          </label>
          <label>
            Social Media:
            <input
              type="radio"
              value="Social Media"
              {...register("heard_about_us", {
                required: "Please select how you heard about us",
              })}
            />
          </label>
          <label>
            Advertisement:
            <input
              type="radio"
              value="Advertisement"
              {...register("heard_about_us", {
                required: "Please select how you heard about us",
              })}
            />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    </section>
  );
};

export default EventRegistrationPage;
