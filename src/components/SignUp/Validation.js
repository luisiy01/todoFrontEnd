import * as Yup from "yup";

export const validationSchema = Yup.object({  
    email: Yup.string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string("")
      .min(8, "Password must contain at least 8 characters")
      .required("Enter your password"),
    confirmPassword: Yup.string("Enter your password")
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Password does not match"),
  });