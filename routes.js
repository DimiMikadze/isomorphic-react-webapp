import Me from './client/components/Me';
import Main from './client/components/Main';
import Work from './client/components/Work';
import Skills from './client/components/Skills';
import Project from './client/components/Project';

const routes = {
    path: '',
    component: Main,
    childRoutes: [
        {
            path: '/',
            component: Work
        },
        {
            path: '/me',
            component: Me
        },
        {
            path: '/skills',
            component: Skills
        },
        {
            path: '/project/:project',
            component: Project
        },
        {
            path: '*',
            component: Work
        }
    ]
};

export { routes };
