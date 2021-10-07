import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import RegistroClientes from '../material-kit/forms/RegistroCliente'
import { Card } from '@material-ui/core'

class RegistroCliente extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Forms', path: '/forms' },
                            { name: 'RegistroCliente' },
                        ]}
                    />
                </div>
                <Card className="px-6 pt-2 pb-4">
                    <RegistroClientes />
                </Card>
            </div>
        )
    }
}

export default RegistroCliente