import HomeContainer from './home/HomeContainer';

export const routes = [
    {
        type: 'protected',
        mode: 'view',
        exact: true,
        path: '/',
        component: HomeContainer,
    },
];
