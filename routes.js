import Me from './app/components/Me';
import Main from './app/components/Main';
import Work from './app/components/Work';
import Skills from './app/components/Skills';
import Project from './app/components/Project';

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
