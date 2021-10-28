import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Breadcrumb, SimpleCard } from 'app/components'
import ReactHtmlParser from 'react-html-parser'
import { Autocomplete, createFilterOptions } from '@material-ui/lab'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Highlight from 'react-highlight'

import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    TextField,
} from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'



const suggestions = [
    { label: 'Producto 1' },
    { label: 'Producto 2' },
    { label: 'Producto 3' },
    { label: 'Producto 4' },
]

const OrdenServicio = () => {
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
                            label="Email"
                            onChange={handleChange}
                            type="email"
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
                            label="Celular"
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
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Direccion"
                            onChange={handleChange}
                            type="text"
                            name="mobile"
                            value={mobile || ''}
                            validators={['required']}
                            errorMessages={['Campo Requerido']}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Otro"
                            onChange={handleChange}
                            name="password"
                            type="firstName"
                            value={password || ''}
                            errorMessages={['Campo Requerido']}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Otro"
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

                        <FormControlLabel
                            control={<Checkbox />}
                            label="Deseo Recibir informacion mediante correo"
                        />
                    </Grid>
                </Grid>

                <Grid item lg={12} md={6} sm={12} xs={12}>
                    <div className="m-sm-30">
                        
                        <SimpleCard title="Pedido">
                            <Table>
                                <TableHead>
                                    <TableRow className="bg-default">
                                        <TableCell className="px-0">
                                            Producto

                                        </TableCell>
                                        
                                        <TableCell className="px-0">
                                            Cantidad
                                            
                                        </TableCell>
                                        <TableCell className="px-0">
                                            Precio
                                        </TableCell>
                                        <TableCell className="px-0">
                                        Agregar
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="px-0">
                                            <Autocomplete
                                                className="mb-2 w-300"
                                                options={suggestions}
                                                getOptionLabel={(option) =>
                                                    option.label
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Combo box"
                                                        variant="outlined"
                                                        fullWidth
                                                    />
                                                )}
                                            />
                                        </TableCell>
                                        <TableCell className="px-0 capitalize">
                                            <TextValidator
                                                className="mb-4 w-full"
                                                label="Cantidad"
                                                onChange={handleChange}
                                                type="text"
                                                name="firstName"
                                                value={firstName || ''}
                                                validators={['required']}
                                                errorMessages={[
                                                    'Campo Requerido',
                                                ]}
                                            />
                                        </TableCell>
                                        <TableCell className="px-0 capitalize">
                                            <span className="text-small">
                                                <TextValidator
                                                    className="mb-4 w-full"
                                                    label="Valor"
                                                    onChange={handleChange}
                                                    type="text"
                                                    name="firstName"
                                                    value={firstName || ''}
                                                    validators={['required']}
                                                    errorMessages={[
                                                        'Campo Requerido',
                                                    ]}
                                                />
                                            </span>
                                        </TableCell>
<TableCell>
   
   {<FavoriteBorder />}
</TableCell>

                                    </TableRow>
                                    <TableRow> 
                                    <TableCell>
   Precio Total

</TableCell>
<TableCell>
  

</TableCell>
<TableCell>
   56.236

</TableCell>
                                    </TableRow>
                                   
                                </TableBody>
                            </Table>

                            <div className="py-2"></div>
                        </SimpleCard>
                    </div>
                </Grid>

                <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Enviar</span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default OrdenServicio
