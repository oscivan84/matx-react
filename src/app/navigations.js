import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'AutoGestion',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        label: 'Paginas',
        type: 'label',
    },
    {
        name: 'Acceso/Autenticacion',
        icon: 'security',
        children: [
            {
                name: 'Entrada',
                iconText: 'SI',
                path: '/session/signin',
            },
            {
                name: 'Salida',
                iconText: 'SU',
                path: '/session/signup',
            },
            {
                name: 'Olvido la Contraseña',
                iconText: 'FP',
                path: '/session/forgot-password',
            },
            {
                name: 'Error',
                iconText: '404',
                path: '/session/404',
            },
        ],
    },
    
    {
        label: 'Componentes',
        type: 'label',
    },
    {
        name: 'Componentes',
        icon: 'favorite',
        badge: { value: '+', color: 'secondary' },
        children: [
            {
                name: 'Registro Cliente',
                path: '/forms/registrocliente',
                iconText: 'A',
            },
            {
                name: 'Orden Servicio',
                path: '/forms/orderform',
                iconText: 'A',
            },
            
        ],
    },
    

    {
        name: 'Charts',
        icon: 'trending_up',
        children: [
            {
                name: 'Echarts',
                path: '/charts/echarts',
                iconText: 'E',
            }
        ],
    },
  
]
