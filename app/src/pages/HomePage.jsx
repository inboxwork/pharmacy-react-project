import React, { useEffect } from 'react';
import HeroSlider from '../components/Home/HeroSlider';
import CategoriesSlider from '../components/Home/CategoriesSlider';
import ReviewsSection from '../components/Home/ReviewsSection';
import ContactSection from '../components/Home/ContactSection';

const HomePage = () => {
    useEffect(() => {
        if (window.jQuery && window.jQuery.fn.owlCarousel) {
            initializeSliders();
        } else {
            const checkInterval = setInterval(() => {
                if (window.jQuery && window.jQuery.fn.owlCarousel) {
                    initializeSliders();
                    clearInterval(checkInterval);
                }
            }, 100);
            
            return () => clearInterval(checkInterval);
        }
        
        function initializeSliders() {
            const $ = window.jQuery;
            
            if ($('#heroSlider').length && !$('#heroSlider').hasClass('owl-loaded')) {
                $('#heroSlider').owlCarousel({
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    margin: 0,
                    nav: false,
                    dots: true,
                    items: 1,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    smartSpeed: 1000
                });
            }

            if ($('#categoriesSlider').length && !$('#categoriesSlider').hasClass('owl-loaded')) {
                $('#categoriesSlider').owlCarousel({
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    margin: 5,
                    nav: false,
                    dots: true,
                    responsive: {
                        0: { items: 1 },
                        576: { items: 2 },
                        768: { items: 3 },
                        992: { items: 4 }
                    }
                });
            }

            if ($('#reviewsSlider').length && !$('#reviewsSlider').hasClass('owl-loaded')) {
                $('#reviewsSlider').owlCarousel({
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true,
                    margin: 20,
                    nav: false,
                    dots: true,
                    responsive: {
                        0: { items: 1 },
                        768: { items: 2 },
                        992: { items: 3 }
                    }
                });
            }
        }
        
        return () => {
            if (window.jQuery) {
                const $ = window.jQuery;
                $('.owl-carousel').trigger('destroy.owl.carousel');
                $('.owl-carousel').removeClass('owl-loaded');
            }
        };
    }, []);

    return (
        <>
            <HeroSlider />
            <CategoriesSlider />
            <ReviewsSection />
            <ContactSection />
        </>
    );
};

export default HomePage;