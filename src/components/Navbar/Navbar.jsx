import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <header>

            <label for="" class="fas fa-bars"></label>

            <div className="logo"><span>T</span>ravel</div>

            <div className="navbar">
                <div class="navbar">
                    <a href="#home">Home</a>
                    <a href="#book">Book</a>
                    <a href="#packages">Packages</a>
                    <a href="#services">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#review">Review</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>

            <div className="icons">
                <a class="fas fa-search"></a>
                <Link to='/login'><a class="fas fa-user"></a></Link>

            </div>

            <form action="" class="search-box">
                <input type="text" placeholder="search here..." id="search-bar" />
                <label for="search-bar" class="fas fa-search"></label>
            </form>
        </header>
    )
}

export default Navbar;