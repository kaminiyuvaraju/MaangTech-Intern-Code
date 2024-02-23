import React from 'react';
import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo Showing a money bag" id =  'image'/>
            <h1>Investment Calculator</h1>
        </header>
    );
}
