import *  as yup from 'yup'

let newThoughtSchema = yup.object().shape({
    username: yup.string().matches(/^[A-Za-z][A-Za-z0-9]*$/,'Your Username cannot have white spaces or be empty').min(3, 'Your username has to be of 3 characters minimun').max(16, 'Your username has to be of 16 characters maximun'),
    thought: yup.string().min(16, 'Your thought has to be of 16 characters minimun').max(640, 'Your thought has to be of 640 characters maximun'),
    feeling: yup.mixed().oneOf(['negative', 'positive'], 'Your feeling has to be positve or negative'),
    year: yup.number().typeError("You must select a number!").min(1989, 'The year must be bigger than 1989').max(new Date().getFullYear(), `The year must be less than ${new Date().getFullYear()}`)
})
const validateField = async (field, data, setFieldError) => {
    try{
        await yup.reach(newThoughtSchema, field).validate(data)
        setFieldError(prev => ({...prev, [field] : null}))
    }
    catch(err){
        setFieldError(prev => ({...prev, [field] : err?.errors[0] }))
    }
}

export default validateField
//to do generic function that validate a field and set the error in an state to show it in the page