import React from 'react';
import './Contact.css';
import contactImg from '../Assets/contact-img.svg'

const Contact = () => {
    return (
        <div>
            <section class="contact" id="contact">
                <h1 class="heading">
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>T</span>
                    <span>A</span>
                    <span>C</span>
                    <span>T</span>
                </h1>
                <div class="contact-container">
                    <div class="image">
                        <img src={contactImg} alt="Cont_img" />
                    </div>
                    <div class="contact-form">
                        <form action="">
                            <div class="inputBox">
                                <input type="text" placeholder="name" class="box" />
                                <input type="email" placeholder="email" class="box" />
                            </div>
                            <div class="inputBox">
                                <input type="number" placeholder="number" class="box" />
                                <input type="text" placeholder="subject" class="box" />
                            </div>
                            <div class="textAr">
                                <textarea name="" id="message" cols="30" rows="10" placeholder="message"></textarea>
                            </div>
                            <input type="submit" value="Send Message" class="btn" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact