import React from 'react';
import { render } from 'react-dom';
import Me from './components/Me';
import Work from './components/Work';
import Project from './components/Project';
import Main from './components/Main';
import Skills from './components/Skills';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

render((
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Main}>
            <IndexRoute component={Me} />
            <Route path="work" component={Work} />
            <Route path="/project/:project" component={Project} />
            <Route path="skills" component={Skills} />
            <Route path="*" component={Me} />
        </Route>
    </Router>
), document.getElementById('react-container'));

