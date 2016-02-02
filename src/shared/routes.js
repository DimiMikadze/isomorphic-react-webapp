import Home from '../client/components/Home';
import Main from '../client/components/Main';
import Work from '../client/components/Work';
import Skills from '../client/components/Skills';
import Project from '../client/components/Project';

const routes = {
    path: '',
    component: Main,
    childRoutes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/work',
            component: Work
        },
        {
            path: '/skills',
            component: Skills
        },
        {
            path: '/work/:work',
            component: Project
        },
        {
            path: '*',
            component: Home
        }
    ]
};

export { routes };
