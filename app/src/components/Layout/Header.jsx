import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import TopBar from './TopBar';
import SearchBox from '../Common/SearchBox';
import { useCart } from '../../contexts/CartContext';

const Header = ({ darkMode, toggleDarkMode }) => {
    const { cartCount } = useCart();

    return (
        <header className="header">
            <TopBar />
            <div className="container">
                <div className="row align-items-center py-2">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/" className="logo">
                            <i className="fas fa-prescription-bottle-alt logo-icon"></i>
                            <div>
                                <span style={{ fontSize: '22px' }}>Elite</span><br />
                                <span style={{ fontSize: '16px', color: 'var(--secondary)' }}>Pharmacy</span>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="col-lg-6 col-md-5 d-none d-md-block">
                        <SearchBox />
                    </div>
                    
                    <div className="col-lg-4 col-md-4 col-sm-8 col-6 text-end">
                        <div className="d-flex justify-content-end align-items-center gap-3">
                            <button className="theme-toggle" onClick={toggleDarkMode}>
                                <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                            </button>
                            <div className="cart-icon" onClick={() => {
                                const cartModal = document.querySelector('.cart-modal');
                                const cartOverlay = document.querySelector('.cart-modal-overlay');
                                if (cartModal && cartOverlay) {
                                    cartModal.classList.add('active');
                                    cartOverlay.style.display = 'block';
                                    setTimeout(() => {
                                        cartOverlay.style.opacity = '1';
                                    }, 10);
                                }
                            }}>
                                <i className="fas fa-shopping-cart"></i>
                                <span className="cart-count">{cartCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {}
            {/* <div className="d-md-none">
                <div className="container">
                    <div className="my-2">
                        <SearchBox mobile={true} />
                    </div>
                </div>
            </div> */}
            
            <Navigation />
        </header>
    );
};

export default Header;