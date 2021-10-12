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
    MenuItem,
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
    const currencies = [
        {
            value: 'TI',
            label: 'TI',
        },
        {
            value: 'CC',
            label: 'CC',
        },
        {
            value: 'Otro',
            label: 'Otro',
        },
    ]

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField
                            className="mb-4 w-full"
                            variant="outlined"
                            name="nombre"
                            label="Nombre"
                            size="normal"
                        />

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className="mb-4 w-full"
                                margin="none"
                                id="mui-pickers-date"
                                label="Fecha Nacimiento"
                                inputVariant="standard"
                                type="text"
                                autoOk={true}
                                value={date}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                        <TextField
                            className="mb-4 w-full"
                            select
                            label="Documento Identidad"
                            value="Seleccione"
                            onChange={handleChange}
                        >
                            {currencies.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            className="mb-4 w-full"
                            variant="outlined"
                            name="LugarNacimiento"
                            label="Lugar Nacimiento"
                            size="normal"
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
                                'password no concuerda',
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
                                'password no concuerda',
                            ]}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField
                            className="mb-4 w-full"
                            variant="outlined"
                            name="Apellido"
                            label="Apellidos"
                            size="normal"
                        />

                        <TextField
                            className="mb-4 w-full"
                            variant="outlined"
                            name="Edad"
                            label="Edad"
                            size="normal"
                        />

                        <TextField
                            className="mb-4 w-full"
                            variant="outlined"
                            name="DocumentoIdentidad"
                            label="No. Documento"
                            size="normal"
                        />
                        <TextField
                            className="mb-4 w-full"
                            variant="outlined"
                            name="DocumentoIdentidad"
                            label="No. Documento"
                            size="normal"
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
                                'password no concuerda',
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
                                'password no concuerda',
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
