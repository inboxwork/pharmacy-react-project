import React from 'react';

const ReviewsSection = () => {
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Regular Customer",
            rating: 5,
            text: "The vitamin supplements I purchased have made a significant difference in my energy levels. The quality is exceptional and delivery was prompt."
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Doctor",
            rating: 4.5,
            text: "As a healthcare professional, I appreciate the quality and authenticity of the medicines available. Great service for both patients and professionals."
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Beauty Blogger",
            rating: 5,
            text: "The skin care products are fantastic! My skin has never looked better. The acne treatment cream worked wonders in just two weeks."
        },
        {
            id: 4,
            name: "David Wilson",
            role: "Senior Citizen",
            rating: 5,
            text: "Excellent customer service and high-quality products. The staff helped me find exactly what I needed for my heart condition. Highly recommended!"
        }
    ];

    return (
        <section className="reviews-section" id="reviews">
            <div className="container">
                <div className="section-title">
                    <h2>Customer Reviews</h2>
                    <p className="section-subtitle">See what our customers say about our products and services</p>
                </div>
                
                <div className="owl-carousel reviews-slider" id="reviewsSlider">
                    {reviews.map(review => (
                        <div key={review.id} className="review-slide">
                            <div className="review-card">
                                <div className="review-header">
                                    <div className="review-info">
                                        <h5>{review.name}</h5>
                                        <p>{review.role}</p>
                                    </div>
                                </div>
                                <div className="review-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i 
                                            key={i}
                                            className={
                                                i < Math.floor(review.rating) 
                                                    ? "fas fa-star" 
                                                    : i < review.rating 
                                                        ? "fas fa-star-half-alt" 
                                                        : "far fa-star"
                                            }
                                        ></i>
                                    ))}
                                </div>
                                <p className="review-text">{review.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;