import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { routes } from './../shared/routes';

import createBrowserHistory from './../../node_modules/history/lib/createBrowserHistory';

ReactDOM.render(
    <Router routes={routes} history={createBrowserHistory()} />,
    document.getElementById('react-root')
);