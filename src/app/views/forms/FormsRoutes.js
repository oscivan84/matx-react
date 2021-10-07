import React from 'react'

const formsRoutes = [
    {
        path: '/forms/OrdenServicio',
        component: React.lazy(() => import('./OrdenServicio')),
    },
    {
        path: '/forms/RegistroCliente',
        component: React.lazy(() => import('./RegistroCliente')),
    },
    {
        path: '/forms/basic',
        component: React.lazy(() => import('./BasicForm')),
    },
    {
        path: '/forms/editor',
        component: React.lazy(() => import('./EditorForm')),
    },
    {
        path: '/forms/upload',
        component: React.lazy(() => import('./UploadForm')),
    }
    {
        path: '/forms/orderform',
        component: React.lazy(() => import('./orderform')),
    }
]

export default formsRoutes
