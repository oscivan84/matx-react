import React from 'react'
import { Divider, Card, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Rating } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Autocomplete, createFilterOptions } from '@material-ui/lab'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    avatar: {
        border: '4px solid rgba(var(--body), 0.03)',
        boxShadow: theme.shadows[3],
    },
}))

const InvoiceCustomer = () => {
    const classes = useStyles()

    return (
        <Card className="p-4">
            <div className="mb-4 flex justify-between items-center">
                <h4 className="m-0 font-medium">Buscar Cliente</h4>
                
                


                <Link className="text-primary" to="/">
                    Ver Detalles
                </Link>
            </div>

            <Divider className="mb-6" />

            <div className="flex-column justify-center items-center mb-6">
                <Avatar
                    className={clsx('w-100 h-100 mb-6', classes.avatar)}
                    src="/assets/images/faces/4.jpg"
                />
                <h5>Martha Leal</h5>
                <p className="text-primary mt-0 mb-2">
                    correoMartha@gmail.com
                </p>
                <p className="mt-0">310 2885964</p>
                <Rating readOnly={true} value={4} />
                <p className="mt-0">Pension</p>
            </div>

            <Divider className="mb-6" />

            <div className="mb-6">
                <p className="font-medium mb-3">Direccion</p>
                <p className="mt-0 mb-1">Calle 34 #23-55 Barrio</p>
                
            </div>

           
        </Card>
    )
}

export default InvoiceCustomer
