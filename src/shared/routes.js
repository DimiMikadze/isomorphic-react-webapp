import Home from '../components/Home';
import Main from '../components/Main';
import Work from '../components/Work';
import Skills from '../components/Skills';
import Project from '../components/Project';

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
