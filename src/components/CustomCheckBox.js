import { useField } from "formik";

const CustomCheckBox = ({label, ...props}) =>{

    const [field, meta] = useField(props);

    return (
        <>
           <div className="checkbox">
                 <input {...field} {...props} 
                className={meta.touched && meta.error ? 'input-error' : ''}
            />
            <span>I accept the terms of service</span>
            {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>)}
           </div>
        </>
    )
}

export default CustomCheckBox;