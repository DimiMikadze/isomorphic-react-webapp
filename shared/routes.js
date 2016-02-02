var Home = require('../src/client/components/Home');
var Main = require('../src/client/components/Main');
var Work = require('../src/client/components/Work');
var Skills = require('../src/client/components/Skills');
var Project = require('../src/client/components/Project');

var routes = {
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

export var routes = routes;
