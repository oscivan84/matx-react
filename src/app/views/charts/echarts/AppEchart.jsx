import React from 'react'
import DoughnutChart from './Doughnut'
import LineChart from './LineChart'
import AreaChart from './AreaChart'
import ComparisonChart from './ComparisonChart'
import { Breadcrumb, SimpleCard } from 'app/components'
import { useTheme } from '@material-ui/styles'

const AppEchart = () => {
    const theme = useTheme()
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Charts', path: '/charts' },
                        { name: 'Echarts' },
                    ]}
                />
            </div>
            
            <SimpleCard title="Gráfico de anillos">
                <DoughnutChart
                    height="350px"
                    color={[
                        theme.palette.primary.dark,
                        theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]}
                />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Gráfico lineal">
                <LineChart
                    height="350px"
                    color={[
                        theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]}
                />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Gráfico de comparaciòn">
                <ComparisonChart
                    height="350px"
                    color={[
                        theme.palette.primary.dark,
                        // theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]}
                />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Gráfico de Area">
                <AreaChart
                    height="350px"
                    color={[theme.palette.primary.main]}
                />
            </SimpleCard>
        </div>
    )
}

export default AppEchart
