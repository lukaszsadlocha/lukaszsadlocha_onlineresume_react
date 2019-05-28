import './css/site.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './components/Home'

function renderApp() {
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
    ReactDOM.render(
        <Home />,
        document.getElementById('react-app')
    );
}

renderApp();