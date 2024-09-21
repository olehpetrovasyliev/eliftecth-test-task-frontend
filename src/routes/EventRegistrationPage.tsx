import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ParticipantInput } from "../helpers/types";
import { addParticipantToEvent } from "../helpers/api";
import { Value } from "sass";
import { toast } from "react-toastify";

const EventRegistrationPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ParticipantInput>();

  const validateAge = (value: any) => {
    const today = new Date();
    const birthDate = new Date(value);

    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  };

  const onSubmit = async (data: ParticipantInput) => {
    if (id) {
      await addParticipantToEvent(id, data);
      toast("Registration succesfull");
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
              {...register("name", {
                required: "Name is required",
                minLength: 2,
                maxLength: 100,
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </label>
          <label>
            Email:
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>
          <label>
            Date of birth:
            <input
              type="date"
              {...register("date_of_birth", {
                required: "Date of birth is required",
                validate: {
                  ageLimit: (value) => {
                    const age = validateAge(value);
                    return age >= 18 ? true : "You must be older than 18";
                  },
                },
              })}
            />
            {errors.date_of_birth && (
              <span>{errors.date_of_birth.message}</span>
            )}
          </label>
          <span className="eventRegistration__heared">
            How`d you heard about us?
          </span>
          <label>
            Friend:
            <input
              type="radio"
              value="Friend"
              {...register("heard_about_us", {
                required: "Please select how you heard about us",
              })}
            />
            {errors.heard_about_us && (
              <span>{errors.heard_about_us.message}</span>
            )}
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
