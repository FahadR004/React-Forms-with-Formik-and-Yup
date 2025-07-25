import { useFormik } from "formik";
import { basicSchema } from "../schema";


const BasicForm = () => {

  const onSubmit = ( values, actions ) => {
    console.log('submitted')
    actions.resetForm();
  }

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: ""
    },
    validationSchema: basicSchema,
    onSubmit
  });

  console.log(errors)

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input 
          value={values.email}
          onChange={handleChange}
          id="email" 
          type="email" 
          placeholder="Enter your email" 
        />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
        <label htmlFor="age">Age</label>
      <input 
          value={values.age}
          onChange={handleChange}
          id="age" 
          type="number" 
          placeholder="Enter your age" 
          className={errors.age && touched.age ? 'input-error' : ''}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
        <label htmlFor="password">Password</label>
      <input 
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password" 
          type="password" 
          placeholder="Enter your password" 
          className={errors.password && touched.password ? 'input-error' : ''}
        />
      {errors.password && touched.password && <p className="error">{errors.password}</p>}
        <label htmlFor="confirmPassword">Confirm Password</label>
      <input 
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="confirmPassword" 
          type="password" 
          placeholder="Confirm your password" 
          className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
        />
        {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      <button disabled={isSubmitting} type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
