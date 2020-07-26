import * as Yup from "yup";

export const validationSchema = Yup.object({  
    todo: Yup.string("Add Todo here")      
      .required("Todo is required"),
  });