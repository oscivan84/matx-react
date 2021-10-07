import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import OrdenServicios from '../material-kit/forms/OrdenServicio'
import { Card } from '@material-ui/core'

class OrdenServicio extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Forms', path: '/forms' },
                            { name: 'OrdenServicio' },
                        ]}
                    />
                </div>
                <Card className="px-6 pt-2 pb-4">
                    <OrdenServicios />
                </Card>
            </div>
        )
    }
}

export default OrdenServicio