import { Form, Formik, Field } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema} from '../schema/index'
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";

const onSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
}

const AdvancedForm = () => {
  return (
    <Formik
       initialValues={{  username: '', jobType: '', acceptedTos: false }}
       validationSchema={advancedSchema}
       onSubmit={onSubmit}
     >
       {({isSubmitting}) => (
         <Form>
            <CustomInput
              label='Username'
              name='username'
              type='text'
              placeholder='Enter your username'
            />
            <CustomSelect
              label='Job Type'
              name='jobType'
              placeholder='Select your job type'
            >

              <option value=''>Select a job type</option>
              <option value='Developer'>Developer</option>
              <option value='Designer'>Designer</option>
              <option value='Manager'>Manager</option>
              <option value='Other'>Other</option>  
            </CustomSelect>
            <CustomCheckBox type='checkbox' name='acceptedTos'/>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
  );
};
export default AdvancedForm;
