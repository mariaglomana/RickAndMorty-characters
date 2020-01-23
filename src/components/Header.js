import React from 'react';
import logo from '../images/logo.png';


const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} alt="Rick and Morty logo" className="App-header__logo" />
        </header>
    );
};

export default Header;