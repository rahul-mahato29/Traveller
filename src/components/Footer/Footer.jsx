import React from 'react';
import './Footer.css';
import c1 from '../Assets/1.jpg'
import c2 from '../Assets/2.jpg'
import c3 from '../Assets/3.jpg'
import c4 from '../Assets/4.jpg'
import c5 from '../Assets/5.jpg'
import c6 from '../Assets/6.jpg'

const Footer = () => {
    return (
        <div>

            <section class="brand">

                <div class="swiper-container brand-slider">

                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src={c1} alt=""/></div>
                        <div class="swiper-slide"><img src={c2} alt=""/></div>
                        <div class="swiper-slide"><img src={c3} alt=""/></div>
                        <div class="swiper-slide"><img src={c4} alt=""/></div>
                        <div class="swiper-slide"><img src={c5} alt=""/></div>
                        <div class="swiper-slide"><img src={c6} alt=""/></div>
                    </div>
                </div>

            </section>


            <footer>
                <div class="footer-container">

                    <div class="footer-box">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur beatae maiores delectus, facilis nam reiciendis tempore! Explicabo eligendi animi minus.</p>
                    </div>


                    <div class="footer-box">
                        <h2>Branch Location</h2>
                        <div class="links">
                            <a href="#">India</a>
                            <a href="#">USA</a>
                            <a href="#">Japan</a>
                            <a href="#">France</a>
                        </div>
                    </div>


                    <div class="footer-box">
                        <h2>Quick Links</h2>
                        <div class="links">
                            <a href="#">Home</a>
                            <a href="#">Book</a>
                            <a href="#">Packages</a>
                            <a href="#">Services</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>


                    <div class="footer-box">
                        <h2>Follow Us</h2>
                        <div class="links">
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">Youtube</a>
                            <a href="#">Twitter</a>
                            <a href="#">Linkedin</a>
                        </div>
                    </div>

                </div>

                <div class="credit">Created by <span>Rahul Mahato</span> | All Rights Reserved</div>

            </footer>
        </div>
    )
}

export default Footer