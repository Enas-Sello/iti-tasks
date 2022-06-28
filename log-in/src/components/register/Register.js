import { useState } from "react";
import { useFormik } from "formik";
import registerSchema from "./registerValidation";
import Error from "../util/Error";
import SuccessMessage from "../util/SuccessMessage";
import { Link } from "react-router-dom";
function Register() {
  const [validLogin, setValidLogin] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
      setValidLogin(true);
    },
  });
  return (
    <>
      {validLogin && <SuccessMessage message={'Successfull login'} />}

      <form
        className="flex flex-col space-y-4 items-center justify-center mx-auto border-2 border-violet-400 rounded-lg my-5 py-5 w-96"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="font-bold text-4xl text-violet-700">Register</h1>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs border-violet-500"
            {...formik.getFieldProps('name')}
          />
        </div>
        {formik.touched.name && formik.errors.name && (
          <Error errorMessage={formik.errors.name} />
        )}
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs border-violet-500"
            {...formik.getFieldProps('email')}
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <Error errorMessage={formik.errors.email} />
        )}

        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs border-violet-500"
            {...formik.getFieldProps('username')}
          />
        </div>
        {formik.touched.username && formik.errors.username && (
          <Error errorMessage={formik.errors.username} />
        )}
        <div className="form-control w-full max-w-xs">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs border-violet-500"
            {...formik.getFieldProps('password')}
          />
        </div>
        {formik.touched.password && formik.errors.password && (
          <Error errorMessage={formik.errors.password} />
        )}

        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Confirm Password"
            className="input input-bordered w-full max-w-xs border-violet-500"
            {...formik.getFieldProps('confirmPassword')}
          />
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <Error errorMessage={formik.errors.confirmPassword} />
        )}
        <p>
          Have an account? Click{' '}
          <Link to={'login'} className="text-violet-500 hover:text-green-700">
            {' '}
            Here
          </Link>{' '}
          to Login
        </p>
        <button type="submit" className="btn bg-violet-500 text-white text-2xl" >
          Register
        </button>
      </form>
    </>
  );
}

export default Register;
