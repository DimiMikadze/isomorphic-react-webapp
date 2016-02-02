import Home from '../src/client/components/Home';
import Main from '../src/client/components/Main';
import Work from '../src/client/components/Work';
import Skills from '../src/client/components/Skills';
import Project from '../src/client/components/Project';

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
