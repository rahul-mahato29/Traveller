import React from 'react';
import './Booking.css'
import bookingImg from '../Assets/book-img.svg'

const Bookings = () => {
    return (
        <div>
            <section class="book" id="book">

                <h1 class="heading">
                    <span>B</span>
                    <span>O</span>
                    <span>O</span>
                    <span>K</span>
                    <span class="space"></span>
                    <span>N</span>
                    <span>O</span>
                    <span>W</span>
                </h1>

                <div class="book-container">

                    <div class="image">
                        <img src={bookingImg} alt="book_img" />
                    </div>

                    <form action="">
                        <div class="inputBox">
                            <h3>Where to</h3>
                            <input type="text" placeholder="Place name" />
                        </div>
                        <div class="inputBox">
                            <h3>How many</h3>
                            <input type="number" placeholder="Number of guests" />
                        </div>
                        <div class="inputBox">
                            <h3>Arrivals</h3>
                            <input type="date" />
                        </div>
                        <div class="inputBox">
                            <h3>Leaving</h3>
                            <input type="date" />
                        </div>

                        <input type="submit" class="btn" value="Book Now" />
                    </form>
                </div>

            </section>
        </div>
    )
}

export default Bookings