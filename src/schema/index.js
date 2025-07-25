import * as Yup from "yup";

const pwdRules = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$'

export const basicSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    age: Yup.number().positive().integer().required("Required"),
    password: Yup
        .string()
        .min(5)
        .matches(pwdRules, {message: "Please create a stronger password"})
        .required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null],  'Passwords must match').required('Required')
})

export const advancedSchema = Yup.object().shape({
    username: Yup
    .string()
    .min(3, 'Username must be at least 3 characters')
    .required(  'Required'),
    jobType: Yup
    .string()
    .oneOf(['Designer', 'Developer', 'Manager', 'Other'], 'Invalid Job Type')
    .required('Required'),
    acceptedTos: Yup
    .boolean()
    .oneOf([true], 'You must accept the terms of service')
})