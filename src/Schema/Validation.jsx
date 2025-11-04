import * as YUP from 'yup';


export const Validation = YUP.object({
    email: YUP.string().email().required("Please enter the email"),
    password: YUP.string().min(5).required("Please enter the password"),
})