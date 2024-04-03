import React from 'react';
import './Tourreview.css';
import pic1 from '../Assets/pic1.png';
import pic2 from '../Assets/pic2.png';
import pic3 from '../Assets/pic3.png';
import pic4 from '../Assets/pic4.png';


const Tourreview = () => {
    return (
        <div>

            <section class="review" id="review">
                <h1 class="heading">
                    <span>R</span>
                    <span>E</span>
                    <span>V</span>
                    <span>I</span>
                    <span>E</span>
                    <span>W</span>
                </h1>
                <div class="review-container review-slider">

                    <div class="swiper-wrapper">

                        <div class="swiper-slide">
                            <div class="review-box">
                                <img src={pic1} alt="review_img1"/>
                                    <div class="review-content">
                                        <h3>Jhone Deo</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione inventore quo quos atque. Facilis ipsum in obcaecati illo minus. Quo nulla eum pariatur sequi. Repudiandae accusamus quam est deleniti.</p>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="review-box">
                                <img src={pic2} alt="review_img2"/>
                                    <div class="review-content">
                                        <h3>Jhone Deo</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione inventore quo quos atque. Facilis ipsum in obcaecati illo minus. Quo nulla eum pariatur sequi. Repudiandae accusamus quam est deleniti.</p>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                        </div>


                        <div class="swiper-slide">
                            <div class="review-box">
                                <img src={pic3} alt="review_img3"/>
                                    <div class="review-content">
                                        <h3>Jhone Deo</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione inventore quo quos atque. Facilis ipsum in obcaecati illo minus. Quo nulla eum pariatur sequi. Repudiandae accusamus quam est deleniti.</p>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="review-box">
                                <img src={pic4} alt="review_img4"/>
                                    <div class="review-content">
                                        <h3>Jhone Deo</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione inventore quo quos atque. Facilis ipsum in obcaecati illo minus. Quo nulla eum pariatur sequi. Repudiandae accusamus quam est deleniti.</p>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Tourreview