import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { routes } from '../shared/routes';

import createBrowserHistory from './../../node_modules/history/lib/createBrowserHistory';

const wow = new WOW({ mobile: false });
wow.init();

ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)} routes={routes} history={createBrowserHistory()} />,
    document.getElementById('react-root')
);

wow.sync();