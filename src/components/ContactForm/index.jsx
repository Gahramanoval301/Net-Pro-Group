import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonNetPro from "../Button";
import React from "react";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const errorStyle = {
    color: 'red',
    fontSize: '12px',
    position: 'relative'
}

let bgColor = '#F3F3F3'
let textColor = '#7A8BA3'
const ContactForm = ({ side = 'left' }) => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required!"),
            message: Yup.string()
                .min(20, "Mininum 20 characters")
                .max(300, "Maximum 300 characters")
                .required("Required!"),
        }),
        onSubmit: (values) => {
            formik.handleReset()
            console.log(JSON.stringify(values));
        }
    })
    return (
        <Container sx={{ textAlign: side, py: 1 }}>
            <Stack spacing={3}>
                <Typography variant="h4" color="initial" component={'h2'}
                    sx={{
                        fontWeight: 600, color: 'primary.main'
                    }}>
                    Suallarınız var?
                </Typography>
                <Typography color="primary" >
                    Formu doldurun. Yaxın zamanda sizinlə əlaqə saxlayacayıq.
                </Typography>
                <form onSubmit={formik.handleSubmit} id="contact-info" name="contact-info">
                    <Stack
                        gap={3}
                        flexDirection="row"
                        flexWrap="wrap"
                        sx={{
                            "&>div": {
                                flex: 1
                            },
                            "& input, & textarea": {
                                minWidth: 200
                            }
                        }}
                    >
                        <Stack justifyContent="space-between" spacing={2}>
                            <TextField
                                placeholder="Adınız və Soyadınız"
                                fullWidth
                                name="fullName"
                                InputProps={{ style: { color: textColor } }}
                                sx={{ backgroundColor: bgColor }}
                                {...formik.getFieldProps('fullName')}
                            />
                            {formik.errors.fullName && formik.touched.fullName && (
                                <p style={errorStyle}>
                                    {formik.errors.fullName}
                                </p>
                            )}
                            <TextField
                                fullWidth
                                placeholder="Email ünvanı"
                                name="email"
                                InputProps={{ style: { color: textColor } }}
                                sx={{ backgroundColor: bgColor }}
                                {...formik.getFieldProps('email')}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <p style={errorStyle}>
                                    {formik.errors.email}
                                </p>
                            )}
                            <TextField
                                fullWidth
                                placeholder="Əlaqə nömrəsi"
                                name="phone"
                                InputProps={{ style: { color: textColor } }}
                                sx={{ backgroundColor: bgColor }}
                                {...formik.getFieldProps('phone')}
                            />
                            {formik.errors.phone && formik.touched.phone && (
                                <p style={errorStyle}>
                                    {formik.errors.phone}
                                </p>
                            )}
                        </Stack>
                        <Box>
                            <TextField
                                fullWidth
                                minRows={7}
                                placeholder="Mesajınız"
                                multiline
                                name="message"
                                InputProps={{ style: { color: textColor } }}
                                sx={{ backgroundColor: bgColor }}
                                {...formik.getFieldProps('message')}
                            />
                            {formik.errors.message && formik.touched.message && (
                                <p style={errorStyle}>
                                    {formik.errors.message}
                                </p>
                            )}
                        </Box>
                    </Stack>
                    <Box sx={{ mt: 3 }}>
                        <ButtonNetPro
                            color='primary'
                            iconColor='white'
                            title='Göndər'
                            baseColor='primary' />
                    </Box>
                </form>
            </Stack>
        </Container>

    )
}
export default ContactForm
