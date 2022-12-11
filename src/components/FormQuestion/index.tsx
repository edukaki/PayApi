import * as yup from 'yup'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import Style from './FormQuestion.module.scss'

const questionSchema = yup.object({
    name: yup.string().defined(),
    sex: yup
    .mixed()
    .oneOf(['male' as const, 'female' as const, 'other' as const])
    .defined(),
    email: yup.string().required().email(),
    companyName: yup.string().nullable(),
    website: yup.string().url().nullable(),
    message: yup.string().required(),
    news: yup.boolean().nullable()
})

interface Question extends yup.InferType<typeof questionSchema>{
    name: string,
    sex: string,
    email: string,
    companyName: string,
    website: string,
    message: string,
    news: boolean
}

const FormQuestion = () => {
    return (
        <div>
            <Formik 
            initialValues={
                {
                    name: '',
                    sex: '',
                    email: '',
                    companyName: '',
                    website: '',
                    message: '',
                    news: false
                }
            }
            onSubmit={(
                values: Question,
                { setSubmitting }: FormikHelpers<Question>
            ) => {
                    setTimeout(() =>{
                        alert(JSON.stringify(values,null,2))
                        setSubmitting(false)
                    },500)
                }
            }
            >

            </Formik>

        </div>
    )
}

export default FormQuestion