import React from 'react';

const ContactSection = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2 className="mb-3">Get In Touch</h2>
                    <p className="text-muted contact-subtitle">We're here to help with all your healthcare needs</p>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="contact-info-card">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h4>Our Location</h4>
                            <p>123 Health Street, Medical District</p>
                            <p>New York, NY 10001</p>
                            <a 
                                href="https://maps.google.com/?q=123+Health+Street+New+York+10001" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <i className="fas fa-directions me-2"></i>Get Directions
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 mb-4">
                        <div className="contact-info-card">
                            <div className="contact-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <h4>Call Us</h4>
                            <p>24/7 Customer Support</p>
                            <p>Emergency Line Available</p>
                            <a href="tel:+15551234567" className="contact-link">
                                <i className="fas fa-phone me-2"></i>+1 (555) 123-4567
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 mb-4">
                        <div className="contact-info-card">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h4>Email Us</h4>
                            <p>Quick Response Guaranteed</p>
                            <p>Within 24 Hours</p>
                            <a href="mailto:contact@elitepharmacy.com" className="contact-link">
                                <i className="fas fa-paper-plane me-2"></i>contact@elitepharmacy.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;