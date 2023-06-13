import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(7),
  rememberMe: yup.boolean(),
});

export const registrationValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});
