import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Dashboard from './components/dashboard';

class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <Home>
                    <Routes>
                        <Route path='/' element={<Dashboard />} exact />
                        <Route path='/home' element={<Dashboard />} />
                    </Routes>
                </Home>
            </BrowserRouter>
        );
    }
}

export default Routers;
