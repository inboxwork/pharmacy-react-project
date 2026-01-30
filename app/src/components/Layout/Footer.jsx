import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bg"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-5">
                        <div className="footer-widget">
                            <h5>Elite Pharmacy</h5>
                            <p className="mt-3" style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '14px' }}>
                                Your trusted partner in health and wellness. We provide high-quality medicines, healthcare products, and expert pharmaceutical advice.
                            </p>
                            <div className="social-links">
                                <a href="#" className="social-link">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-link">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-link">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="social-link">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-5">
                        <div className="footer-widget">
                            <h5>Quick Links</h5>
                            <ul className="footer-links">
                                <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
                                <li><Link to="/medicines"><i className="fas fa-chevron-right"></i> Medicines</Link></li>
                                <li><a href="/#contact"><i className="fas fa-chevron-right"></i> Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="footer-widget">
                            <h5>Contact Info</h5>
                            <ul className="footer-links">
                                <li>
                                    <a href="#">
                                        <i className="fas fa-map-marker-alt"></i>
                                        123 Health Street, City 10001
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+15551234567">
                                        <i className="fas fa-phone"></i>
                                        +1 (555) 123-4567
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@elitepharmacy.com">
                                        <i className="fas fa-envelope"></i>
                                        info@elitepharmacy.com
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-clock"></i>
                                        Mon-Sun: 8:00 AM - 10:00 PM
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="footer-widget">
                            <h5>Newsletter</h5>
                            <p className="mt-3" style={{ color: '#cbd5e1', fontSize: '14px' }}>
                                Subscribe to our newsletter for health tips and exclusive offers.
                            </p>
                            <div className="newsletter-form mt-4">
                                <input type="email" className="form-control mb-2" placeholder="Your email address" />
                                <button className="btn btn-primary-custom w-100">
                                    <i className="fas fa-paper-plane me-2"></i>Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p>&copy; 2026 Elite Pharmacy. All Rights Reserved. | Omnia Abdelshafy</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <p>
                                <a href="#" className="text-white-50 me-3">Privacy Policy</a>
                                <a href="#" className="text-white-50 me-3">Terms of Service</a>
                                <a href="#" className="text-white-50">Refund Policy</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;