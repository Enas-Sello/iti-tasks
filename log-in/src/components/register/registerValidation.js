import * as Yup from "yup";

let registerSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),

  username: Yup.string()
    .matches(/^(\S+$)/, "Username can't contain whitespace")
    .required("username is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      " Password must be minimum 8 characters, at least one letter, one number and one special character: "
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please renter your password"),
});

export default registerSchema;
