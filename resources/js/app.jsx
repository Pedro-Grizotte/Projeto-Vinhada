import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';

import MainApp from './components/MainApp';

const rootElement = document.getElementById('app');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <MainApp />
        </React.StrictMode>
    );
}