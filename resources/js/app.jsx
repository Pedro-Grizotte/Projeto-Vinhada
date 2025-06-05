import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';

import MainApp from './components/MainApp';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const rootElement = document.getElementById('app');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Header />
            <Home />
            <Footer />
        </React.StrictMode>
    );
}