import React, { useEffect, useState } from 'react';

const HeroSlider = () => {
    const [slides] = useState([
        {
            id: 1,
            image: "img/صوره دوا.jpg",
            title: "Premium Healthcare Products",
            description: "Discover our extensive range of medicines, supplements, and healthcare essentials."
        },
        {
            id: 2,
            image: "img/دوا3.jpg",
            title: "Vitamins & Supplements",
            description: "Boost your immunity and overall health with our premium supplements."
        },
        {
            id: 3,
            image: "img/ادويه اورانج.avif",
            title: "Quality Medicines",
            description: "Trusted pharmaceutical products for all your healthcare needs."
        },
        {
            id: 4,
            image: "img/Hair Growth Serum.webp",
            title: "Skin Care Products",
            description: "Advanced skin care solutions for a radiant and healthy complexion."
        }
    ]);

    return (
        <section className="hero-slider">
            <div className="owl-carousel" id="heroSlider">
                {slides.map(slide => (
                    <div key={slide.id} className="hero-slide">
                        <img 
                            src={slide.image} 
                            alt={slide.title}
                            loading="lazy"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
                            }}
                        />
                        <div className="hero-slide-content">
                            <h2 className="hero-slide-title">{slide.title}</h2>
                            <p className="hero-slide-description">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;