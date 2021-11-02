import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import axios from "axios"
import {
    Button,
    Icon,
    Grid,
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

const baseurl = 'http://localhost:3200'

const datosaGuardar={

                "idalumno": 1,
                "nombre": "juan",
                "apellido": "sanchez",
                "numerodocumento": "45895658",
                "direccion": "cra 45 N 78-89",
                "barrio": "San luis",
                "telefonofijo": "2300048",
                "telefonomovil": "3102568974",
                "correoelectronico": "jusanchez@correo.com",
                "idestadocivil": 1,
                "contacto": "martha perez",
                "idafiliacioneps": 1,
                "pagos": 1,
                "idestadoalumno": 1,
                "afiliacioneps_idafiliacioneps": 1,
                "estadocivil_idestadocivil": 1,
                "nivelacademico_idnivelacademico": 1,
                "documento_iddocumento": 1,
                "pais_idpais": 1,
                "ciudad_idciudad": 1
    
        
        }



const RegistroCliente = () => {
    //const [state, setState] = useState({
      //  date: new Date(),
    //})

    const [data, setData] = useState({})

    const peticionGet = async () => {
        await axios.get(baseurl).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }

    const peticionpost = async (e) => {
        e.preventDefault();
        await axios.post(baseurl, datosaGuardar).then((response) => {
        })
    }

    useEffect(() => {
        const usarPeticionGet = async () => {
            await peticionGet()
        }
        usarPeticionGet()
    }, [])

     
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
            <ValidatorForm  onError={() => null}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField
                            className="mb-4 w-full"
                            variant="outlined"
                            id="nombre"
                            name="nombre"
                            label="nombre"
                            size="normal"
                        />

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className="mb-4 w-full"
                                margin="none"
                                id="apellido"
                                label="Fecha Nacimiento"
                                inputVariant="standard"
                                type="text"
                                autoOk={true}
                                //value={}
                                //onChange={}
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
                            //onChange={handleChange}
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
                            //onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                           // value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Correo Electronico"
                            //onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            //value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Estado Civil"
                            //onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            //value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="EPS"
                           // onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            //value={confirmPassword || ''}
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
                            //onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            //value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Nivel Academico"
                            //onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            //value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Con quien Vive"
                           // onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                           // value={confirmPassword || ''}
                            validators={['isPasswordMatch']}
                            errorMessages={[
                                'Campo Requerido',
                                'password no concuerda',
                            ]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Tipo Afiliado"
                            //onChange={handleChange}
                            name="confirmPassword"
                            type="firstName"
                            //value={confirmPassword || ''}
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

                <Button color="primary" variant="contained" type="submit" onClick={peticionpost}>
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Enviar</span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default RegistroCliente
