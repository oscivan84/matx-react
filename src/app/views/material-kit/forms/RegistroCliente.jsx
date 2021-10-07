import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    TextField,
} from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

const RegistroCliente = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        username,
        firstName,
        creditCard,
        mobile,
        password,
        confirmPassword,
        gender,
        date,
        email,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Nombre"
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            value={firstName || ''}
                            validators={['required']}
                            errorMessages={['Campo Requerido']}
                        />

                        <TextValidator
                            className="mb-4 w-full"
                            label="Documento Identidad"
                            onChange={handleChange}
                            type="text"
                            name="email"
                            value={email || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'Campo Requerido',
                                'email is not valid',
                            ]}
                        />

                        <TextValidator
                            className="mb-8 w-full"
                            label="Lugar Nacimiento"
                            onChange={handleChange}
                            type="number"
                            name="creditCard"
                            value={creditCard || ''}
                            validators={[
                                'required',
                                'minStringLength:16',
                                'maxStringLength: 16',
                            ]}
                            errorMessages={['Campo Requerido']}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Direccion Residencia"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Telefono Fijo"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Correo Electronico"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                         <TextValidator
                            className="mb-4 w-full"
                            label="Estado Civil"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                "password no concuerda",
                            ]}
                        />
                         <TextValidator
                            className="mb-4 w-full"
                            label="EPS"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                "password no concuerda",
                            ]}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Apellido"
                            onChange={handleChange}
                            type="text"
                            name="username"
                            value={username || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            errorMessages={['Campo Requerido']}
                        />

                        <TextValidator
                            className="mb-4 w-full"
                            label="Fecha Nacimiento"
                            onChange={handleChange}
                            type="text"
                            name="mobile"
                            value={mobile || ''}
                            validators={['required']}
                            errorMessages={['Campo Requerido']}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Nacionalidad"
                            onChange={handleChange}
                            name="password"
                            type="firstName"
                            value={password || ''}
                            errorMessages={['Campo Requerido']}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Barrio"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Telefono Movil"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Nivel Academico"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                         <TextValidator
                            className="mb-4 w-full"
                            label="Con quien Vive"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                "password no concuerda",
                            ]}
                        />
                         <TextValidator
                            className="mb-4 w-full"
                            label="Tipo Afiliado"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                "password no concuerda",
                            ]}
                        />
                        <TextField
                        
                        label="Observaciones Generales"
                        variant="outlined"
                        fullWidth
                    />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Deseo Recibir informacion mediante correo"
                        />
                    </Grid>
                </Grid>

                <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Enviar</span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default RegistroCliente
