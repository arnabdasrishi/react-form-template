import React from "react";
import "../App.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { validSchema } from "../Form Validator/Validation";

const Form = () => {
  const schema = yup.object().shape(validSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const setUser = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(setUser)}>
      {errors ? <p>Error</p> : ""}
      {/* Personal Details Section */}
      <div className="personal__details">
        <p>
          <u>Personal Details</u>
        </p>
        <div className="personal__details__one">
          <div>
            <label htmlFor="name">
              Name<span style={{ color: "red" }}>*</span> :{" "}
            </label>
            <input type="text" placeholder="Enter Name" {...register("name")} />
            <p style={{ fontSize: "0.8rem", margin: ".2rem" }}>
              <i>{errors.name?.message}</i>
            </p>
          </div>
          <div>
            <label htmlFor="dob">
              Date of Birth or Age<span style={{ color: "red" }}>*</span> :{" "}
            </label>
            <input
              type="text"
              placeholder="DD/MM/YY or Age in Years"
              {...register("dob")}
            />
            <p style={{ fontSize: "0.8rem", margin: ".2rem" }}>
              <i>{errors.dob?.message}</i>
            </p>
          </div>
          <div>
            <label htmlFor="sex">
              Sex<span style={{ color: "red" }}>*</span> :{" "}
            </label>
            <select name="sex" id="sex" {...register("sex")}>
              <option value="">Enter Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            <p style={{ fontSize: "0.8rem", margin: ".2rem" }}>
              <i>{errors.sex?.message}</i>
            </p>
          </div>
        </div>

        <div className="personal__details__two">
          <div>
            <label htmlFor="name">Mobile : </label>
            <input
              type="number"
              placeholder="Enter Mobile"
              {...register("mobile")}
            />
          </div>
          <div>
            <label htmlFor="name">Govt Issued ID : </label>
            <select name="id-type" id="id__type" {...register("id_type")}>
              <option value="">ID Type</option>
              <option value="pan">PAN</option>
              <option value="aadhar">AADHAR</option>
            </select>
            <input
              type="text"
              placeholder="Enter Govt ID"
              {...register("id_number")}
            />
          </div>
        </div>
      </div>

      {/* Contact Details section hereby */}
      <div className="contact__details">
        <p>
          <u>Contact Details</u>
        </p>
        <div className="contact__details__one">
          <div>
            <label htmlFor="gurd-details">Gurdian Details : </label>
            <select
              name="gurd-details"
              id="gurd__details"
              {...register("guardian_type")}
            >
              <option value="">Enter Label</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="parent">Parent</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Guardian name"
              {...register("guardian_name")}
            />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="emergency-no">Emergency Contact Number : </label>
            <input
              type="number"
              placeholder="Enter Emergency No"
              {...register("emergency_contact")}
            />
          </div>
        </div>
      </div>

      {/* Address and Details section */}
      <div className="address_details">
        <p>
          <u>Address Details</u>
        </p>
        <div className="address__details__one">
          <div>
            <label htmlFor="address">Address : </label>
            <input
              type="text"
              placeholder="Enter Address"
              {...register("address")}
            />
          </div>
          <div>
            <label htmlFor="state">State : </label>
            <input
              type="text"
              placeholder="Enter state"
              {...register("state")}
            />
          </div>
          <div>
            <label htmlFor="city">City : </label>
            <input
              type="text"
              placeholder="Enter city/town/village"
              {...register("city")}
            />
          </div>
        </div>

        <div className="address__details__two">
          <div>
            <label htmlFor="country">Country : </label>
            <input
              type="text"
              placeholder="Enter Country"
              {...register("country")}
            />
          </div>
          <div>
            <label htmlFor="country">Pincode : </label>
            <input
              type="number"
              placeholder="Enter Pincode"
              {...register("pincode")}
            />
          </div>
        </div>
      </div>

      {/* Other Details */}
      <div className="other_details">
        <p>
          <u>Other Details</u>
        </p>
        <div className="other__details__one">
          <div>
            <label htmlFor="occupation">Occupation : </label>
            <input
              type="text"
              placeholder="Enter Occupation"
              {...register("occupation")}
            />
          </div>
          <div>
            <label htmlFor="religion">Religion : </label>
            <input
              type="text"
              placeholder="Enter Religion"
              {...register("religion")}
            />
          </div>
          <div>
            <label htmlFor="marital">Marital Status : </label>
            <select
              name="Enter Marital Status"
              id="marital"
              {...register("marital_status")}
            >
              <option value="">Martial Status</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="seperated">Seperated</option>
              <option value="widowed">Widowed</option>
              <option value="single">Single</option>
            </select>
          </div>
          <div>
            <label htmlFor="blood">Blood Group : </label>
            <select name="Group" id="blood__group" {...register("blood_group")}>
              <option value="">Group</option>
              <option value="a+">A+</option>
              <option value="a-">A-</option>
              <option value="b+">B+</option>
              <option value="b-">B-</option>
              <option value="ab+">AB+</option>
              <option value="ab-">AB-</option>
            </select>
          </div>
        </div>
        <div className="nationality">
          <label htmlFor="name">Nationality : </label>
          <input
            type="text"
            placeholder="Enter Country"
            {...register("nationality")}
          />
        </div>
      </div>

      <div className="form__buttons">
        <button>
          Cancel <br /> <span style={{ fontSize: "0.8rem" }}>(ESC)</span>
        </button>
        <button type="submit">
          Submit <br /> <span style={{ fontSize: "0.8rem" }}>(⌘ S)</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
