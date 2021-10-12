import React from 'react'
import { SimpleCard, MatxProgressBar } from 'app/components'

const Campaigns = () => {
    return (
        <div>
            <SimpleCard title="Campañas">
                <small className="text-muted">Hoy</small>
                <div className="pt-2" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Google (102k)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Twitter (40k)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Tensor (80k)"
                />

                <div className="py-3" />
                <small className="text-muted">Mañana</small>
                <div className="pt-2" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Google (102k)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Twitter (40k)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Tensor (80k)"
                />

                <div className="py-3" />
                <small className="text-muted">Ayer</small>
                <div className="pt-2" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Google (102k)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Twitter (40k)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Tensor (80k)"
                />
            </SimpleCard>
        </div>
    )
}

export default Campaigns
