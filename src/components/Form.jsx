import React from "react";
import "../App.css";

const Form = () => {
  return (
    <form>
      {/* Personal Details Section */}
      <div className="personal__details">
        <p>Personal Details</p>
        <div className="personal__details__one">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth or Age</label>
            <input type="text" placeholder="DD/MM/YY or Age in Years" />
          </div>
          <div>
            <label htmlFor="sex">Sex</label>
            <select name="sex" id="sex">
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="name">Mobile</label>
          <input type="number" placeholder="Enter Mobile" />
        </div>
        <div>
          <label htmlFor="name">Govt Issued ID</label>
          <select name="id-type" id="id__type">
            <option value="pan">PAN</option>
            <option value="aadhar">AADHAR</option>
          </select>
          <input type="text" placeholder="Enter Govt ID" />
        </div>
      </div>

      {/* Contact Details section hereby */}
      <div className="contact__details">
        <p>Contact Details</p>
        <div>
          <label htmlFor="gurd-details">Gurdian Details</label>
          <select name="gurd-details" id="gurd__details">
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="parent">Parent</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Email" />
        </div>
        <div>
          <label htmlFor="emergency-no">Emergency Contact Number</label>
          <input type="number" placeholder="Enter Emergency No" />
        </div>
      </div>

      {/* Address Details section */}
      <div className="address_details">
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" placeholder="Enter Address" />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input type="text" placeholder="Enter state" />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" placeholder="Enter city/town/village" />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input type="text" placeholder="Enter Country" />
        </div>
        <div>
          <label htmlFor="country">Pincode</label>
          <input type="number" placeholder="Enter Pincode" />
        </div>
      </div>

      {/* Other Details */}
      <div className="other_details">
        <p>Other Details</p>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <input type="text" placeholder="Enter Occupation" />
        </div>
        <div>
          <label htmlFor="religion">Religion</label>
          <input type="text" placeholder="Enter Religion" />
        </div>
        <div>
          <label htmlFor="marital">Marital Status</label>
          <select name="Enter Marital Status" id="marital">
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="seperated">Seperated</option>
            <option value="widowed">Widowed</option>
            <option value="single">Single</option>
          </select>
        </div>
        <div>
          <label htmlFor="blood">Blood Group</label>
          <select name="Group" id="blood__group">
            <option value="">Group</option>
            <option value="a+">A+</option>
            <option value="a-">A-</option>
            <option value="b+">B+</option>
            <option value="b-">B-</option>
            <option value="ab+">AB+</option>
            <option value="ab-">AB-</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Nationality</label>
          <input type="text" placeholder="Enter Country" />
        </div>
      </div>
    </form>
  );
};

export default Form;
