import * as yup from "yup";

export const validSchema = {
  name: yup.string().required("Cannot leave name empty"),
  dob: yup.string().required("Enter your DOB or age"),
  sex: yup.string().required("Sex field can not be empty"),
  mobile: yup.string().matches(/^[6-9]\d{9}$/, "Invalid Indian mobile number"),
  id_type: yup.string(),
  id_number: yup.string(),
  guardian_type: yup.string(),
  guardian_name: yup.string(),
  email: yup.string().email(),
  // emergency_contact: yup.number(),
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string(),
  // pincode: yup.number(),
  occupation: yup.string(),
  religion: yup.string(),
  marital_status: yup.string(),
  blood_group: yup.string(),
  nationality: yup.string(),
};
