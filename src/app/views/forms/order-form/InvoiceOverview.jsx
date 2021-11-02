import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Grid,
    Divider,
    Card,
    TextField,
    Icon,
    Button,
    IconButton,
} from '@material-ui/core'
import { format } from 'date-fns'

const baseurl = 'http://localhost:3200/1'

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


const InvoiceOverview = () => {
    const [data, setData] = useState({})

    const peticionGet = async () => {
        await axios.get(baseurl).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }

    const peticionpost = async () => {
        await axios.post(baseurl, datosaGuardar).then((response) => {
        })
    }

    useEffect(() => {
        const usarPeticionGet = async () => {
            await peticionGet()
        }
        usarPeticionGet()
    }, [])

    return (
        <Card className="p-4">
            <div className="mb-4 flex justify-between items-center">
                {data.Fecha}
                <h4 className="m-0 font-medium">Registro Orden - {data.telefonofijo}</h4>
                <div className="text-muted text-13 font-medium">
                    {format(new Date(), 'MMM dd, yyyy')}{' '}
                    {format(new Date(), 'HH:mm:aa')}
                </div>
            </div>

            <Divider className="mb-6" />

            <div className="flex mb-6">
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search products..."
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <Icon className="mr-3" fontSize="small">
                                search
                            </Icon>
                        ),
                    }}
                />
                <Button className="ml-3 px-7 font-medium text-primary bg-light-primary whitespace-pre">
                    Agregar
                </Button>
            </div>

            <div className="overflow-auto">
                <div className="min-w-600">
                    <div className="py-3">
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <h6 className="m-0 font-medium">
                                    Detalle de Product
                                </h6>
                            </Grid>
                            <Grid
                                item
                                lg={2}
                                md={2}
                                sm={2}
                                xs={2}
                                className="text-center"
                            >
                                <h6 className="m-0 font-medium">Precio</h6>
                            </Grid>
                            <Grid
                                item
                                lg={2}
                                md={2}
                                sm={2}
                                xs={2}
                                className="text-center"
                            >
                                <h6 className="m-0 font-medium">Cantidad</h6>
                            </Grid>
                            <Grid
                                item
                                lg={2}
                                md={2}
                                sm={2}
                                xs={2}
                                className="text-center"
                            >
                                <h6 className="m-0 font-medium">Total</h6>
                            </Grid>
                        </Grid>
                    </div>

                    <Divider />

                    {/* {dummyProductList.map((product) => ( */}
                    {dummyProductList.map((product) => (
                        <div key={product.id} className="py-4">
                            <Grid container alignItems="center">
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <div className="flex">
                                        <div className="flex-grow">
                                            <h6 className="mt-0 mb-3 text-15 text-primary">
                                                {product.title}
                                            </h6>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    lg={2}
                                    md={2}
                                    sm={2}
                                    xs={2}
                                    className="text-center"
                                >
                                    <h6>{product.price}</h6>
                                </Grid>
                                <Grid
                                    item
                                    lg={2}
                                    md={2}
                                    sm={2}
                                    xs={2}
                                    className="text-center"
                                >
                                    <TextField
                                        variant="outlined"
                                        name="amount"
                                        type="number"
                                        size="small"
                                        defaultValue={product.amount}
                                        inputProps={{
                                            style: {
                                                width: '60px',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={2}
                                    md={2}
                                    sm={2}
                                    xs={2}
                                    className="text-center"
                                >
                                    <div className="flex justify-end items-center">
                                        <h6 className="m-0">
                                            ${product.price * product.amount}
                                        </h6>
                                        <IconButton>
                                            <Icon fontSize="small">clear</Icon>
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </div>
            </div>

            <Divider className="mt-4 mb-6" />

            <Grid container spacing={3}>
                <Grid item md={7} xs={12}>
                    <h5 className="mt-0 mb-6">Notas</h5>
                    <TextField
                        placeholder="Write a note"
                        variant="outlined"
                        multiline
                        rows={3}
                        fullWidth
                    />
                </Grid>
                <Grid item md={5} xs={12}>
                    <h5 className="mt-0 mb-6">Detalles de Pago</h5>
                    <div className="flex justify-between mb-3">
                        <span className="text-muted">Total:</span>
                        <span className="font-medium">$568</span>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                        >
                            Terminar
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    )
}

const dummyProductList = [
    {
        id: '323sa680b32497dsfdsgga21rt47',
        imgUrl: '/assets/images/products/speaker-1.jpg',
        price: 324.0,
        amount: 10,
        title: 'Producto #1',
        category: 'audio',
        brand: 'Microlab',
        item: '2019 6582 2365',
    },
    {
        id: '323sa680b324976dfgga21rt47',
        imgUrl: '/assets/images/products/speaker-2.jpg',
        price: 454.0,
        amount: 15,
        title: 'Producto #2',
        category: 'audio',
        brand: 'Microlab',
        item: '2019 6582 2365',
    },
]

export default InvoiceOverview
