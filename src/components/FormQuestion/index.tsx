import * as yup from 'yup'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import Style from './FormQuestion.module.scss'
import BtnGeneral from '../BtnGeneral'

const QuestionSchema = yup.object().shape({
    name: yup.string().max(35, 'Must be 15 characters or less').min(3,'Must be 3 characters or more').defined(),
    sex: yup
        .mixed()
        .oneOf(['male' as const, 'female' as const, 'other' as const])
        .defined('gender must be defined'),
    email: yup.string().required().email(),
    companyName: yup.string().nullable(),
    website: yup.string().url().nullable(),
    message: yup.string().required(),
    news: yup.boolean().nullable()
})

interface Question {
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
        <div className={Style.form}>
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
                validationSchema={QuestionSchema}
                onSubmit={(
                    values: Question,
                    { setSubmitting }: FormikHelpers<Question>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 500)
                }
                }
            >

                {({ errors, touched }) => (
                    <Form className={Style.form}>
                        <div className={Style.form__input}>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' />
                            {errors.name && touched.name ? (
                                <div className={Style.errors}>*{errors.name}.</div>
                            ) : null}
                        </div>
                        <div className={Style.form__input}>
                            <label htmlFor='sex'>Gender</label>
                            <Field name='sex' as='select'>
                                <option value=''></option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </Field>
                            {errors.sex && touched.sex ? (
                                <div className={Style.errors}>*{errors.sex}.</div>
                            ) : null}
                        </div>
                        <div className={Style.form__input}>
                            <label htmlFor='email'>Email Address</label>
                            <Field name='email' type='email' />
                            {errors.email && touched.email ? (
                                <div className={Style.errors}>*{errors.email}.</div>
                            ) : null}
                        </div>
                        <div className={Style.form__input}>
                            <label htmlFor='companyName'>Company Name</label>
                            <Field name='companyName' />
                        </div>
                        <div className={Style.form__input}>
                            <label htmlFor='website'>Website</label>
                            <Field name='website' type='url' />
                        </div>
                        <div className={Style.form__input}>
                            <label htmlFor='message'>Message</label>
                            <Field name='message' as='textarea' />
                            {errors.message && touched.message ? (
                                <div className={Style.errors}>*{errors.message}.</div>
                            ) : null}
                        </div>
                        <div className={Style.form__input}>
                            <label htmlFor='news'>
                                <Field
                                    name='news'
                                    type='checkbox'
                                />
                                Stay up-to-date with company announcements and updates to our API
                            </label>
                        </div>
                        <BtnGeneral btnType='secondary' backgroundTheme='light'>Submit</BtnGeneral>

                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default FormQuestion