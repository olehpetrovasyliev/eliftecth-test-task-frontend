import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ParticipantInput } from "../helpers/types";

const EventRegistrationPage = () => {
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit } = useForm<ParticipantInput>();

  const onSubmit = (data: ParticipantInput) => {
    console.log(data);
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
            Email:
            <input
              type="radio"
              value="Friends"
              {...register("heard_about_us", {
                required: "Please select how you heard about us",
              })}
            />
          </label>
          <label>
            Email:
            <input
              type="radio"
              value="Social Media"
              {...register("heard_about_us", {
                required: "Please select how you heard about us",
              })}
            />
          </label>
          <label>
            Email:
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

// import React from "react";
// import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";
// import { ParticipantInput } from "../helpers/types";

// const EventRegistrationPage = () => {
//   const { id } = useParams<{ id: string }>();
//   const { register, handleSubmit } = useForm<ParticipantInput>();

//   const onSubmit = (data: ParticipantInput) => {
//     console.log(data);
//   };

//   return (
//     <section className="eventRegistration">
//       <div className="eventRegistration__wrapper">
//         <h1 className="eventRegistration__title">Event Registration</h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <label>
//             Name:
//             <input
//               type="text"
//               {...register("name", { required: "Name is required" })}
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="email"
//               {...register("email", { required: "Email is required" })}
//             />
//           </label>
//           <label>
//             Date of Birth:
//             <input
//               type="date"
//               {...register("date_of_birth", {
//                 required: "Date of birth is required",
//               })}
//             />
//           </label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 value="Friends"
//                 {...register("heard_about_us", {
//                   required: "Please select how you heard about us",
//                 })}
//               />
//               Friends
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="Social Media"
//                 {...register("heard_about_us", {
//                   required: "Please select how you heard about us",
//                 })}
//               />
//               Social Media
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="Advertisement"
//                 {...register("heard_about_us", {
//                   required: "Please select how you heard about us",
//                 })}
//               />
//               Advertisement
//             </label>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default EventRegistrationPage;
