import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Row } from 'react-bootstrap';
import './contactForm.css'
import ButtonPolis from '../button/ButtonPolis';
import Title from '../title/Title';

export const ContactForm = () => {

    const validationSchema = yup.object({
        name: yup
            .string('Ingrese su nombre')
            .required('El nombre es requerido'),
        lastName: yup
            .string('Ingrese su apellido')
            .required('El apellido es requerido'),
        email: yup
            .string('Ingrese su email')
            .email('Ingrese un email valido')
            .required('Su email es requerido'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="form-conteiner form-login">
            <Title
                        type='sky-3'
                        placeholder='Formá parte de nuestra comunidad y no te pierdas ninguna de nuestras novedades, eventos o informes.  ¡Cada día somos más!'
                        position='center'
                    />
            <form onSubmit={formik.handleSubmit} className="">
                <div>
                    <Row xxs={1} md={3} className="d-flex justify-content-center m-auto align-items-center">
                        <TextField
                            className='input-login mb-2 '
                            id="name"
                            name="name"
                            label="Nombre"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            className='input-login mb-2 '
                            id="lastName"
                            name="lastName"
                            label="Apellido"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />

                    </Row>
                    <Row xxs={1} md={3} className="d-flex justify-content-center  m-auto">
                        <TextField
                            className='input-login mb-2'
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Row>
                    <div className="w-75 d-flex justify-content-center m-auto">
                        <ButtonPolis type='submit' placeholder={'Suscribirse'} />
                    </div>
                        
                </div>
            </form>
        </div>
    )
}
