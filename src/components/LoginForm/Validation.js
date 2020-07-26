import * as Yup from "yup";

export const validationSchema = Yup.object({  
    email: Yup.string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
      password: Yup.string("")      
      .required("Enter your password"),  
  });