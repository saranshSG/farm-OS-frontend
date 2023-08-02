import * as yup from "yup";

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
});

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("Email is required"),
});
