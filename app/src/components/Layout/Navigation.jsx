import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../Common/SearchBox';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleDropdownClick = (e) => {
        e.preventDefault();
        toggleDropdown();
    };

    return (
        <nav className="main-nav navbar navbar-expand-lg">
            <div className="container">
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className="fas fa-bars"></i>
                </button>

                {/* Mobile Search */}
                <div className="d-md-none w-100 my-2">
                    <SearchBox mobile={true} />
                </div>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/" 
                                onClick={closeMenu}
                                end
                            >
                                <i className="fas fa-home me-2"></i>Home
                            </NavLink>
                        </li>

                        <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="#" 
                                role="button"
                                onClick={handleDropdownClick}
                                aria-expanded={dropdownOpen}
                            >
                                <i className="fas fa-pills me-2"></i>Medicines
                            </a>
                            <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-center ${dropdownOpen ? 'show' : ''}`}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="dropdown-header">
                                            <i className="fas fa-stethoscope"></i> By Specialty
                                        </div>
                                        <a className="dropdown-item" href="/medicines#cardiac">
                                            <i className="fas fa-heart"></i> Cardiac Medicines
                                        </a>
                                        <a className="dropdown-item" href="/medicines#dental">
                                            <i className="fas fa-tooth"></i> Dental Medicines
                                        </a>
                                        <a className="dropdown-item" href="/medicines#pregnancy">
                                            <i className="fas fa-baby"></i> Pregnancy & Birth
                                        </a>
                                        <a className="dropdown-item" href="/medicines#children">
                                            <i className="fas fa-child"></i> Children Medicines
                                        </a>
                                        <a className="dropdown-item" href="/medicines#diabetes">
                                            <i className="fas fa-tint"></i> Diabetes Care
                                        </a>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="dropdown-header">
                                            <i className="fas fa-capsules"></i> Vitamins & Supplements
                                        </div>
                                        <a className="dropdown-item" href="/medicines#vitamin-d">
                                            <i className="fas fa-sun"></i> Vitamin D
                                        </a>
                                        <a className="dropdown-item" href="/medicines#vitamin-c">
                                            <i className="fas fa-lemon"></i> Vitamin C
                                        </a>
                                        <a className="dropdown-item" href="/medicines#vitamin-e">
                                            <i className="fas fa-seedling"></i> Vitamin E
                                        </a>
                                        <a className="dropdown-item" href="/medicines#iron">
                                            <i className="fas fa-weight"></i> Iron & Anemia
                                        </a>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="dropdown-header">
                                            <i className="fas fa-user-md"></i> Skin & Hair Care
                                        </div>
                                        <a className="dropdown-item" href="/medicines#acne">
                                            <i className="fas fa-spa"></i> Acne Treatments
                                        </a>
                                        <a className="dropdown-item" href="/medicines#hair-loss">
                                            <i className="fas fa-cut"></i> Hair Loss Treatment
                                        </a>
                                        <a className="dropdown-item" href="/medicines#shampoos">
                                            <i className="fas fa-shower"></i> All Shampoos
                                        </a>
                                        <a className="dropdown-item" href="/medicines#hair-care">
                                            <i className="fas fa-spray-can"></i> Hair Sprays & Serums
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="/#reviews"
                                onClick={closeMenu}
                            >
                                <i className="fas fa-star me-2"></i>Reviews
                            </a>
                        </li>

                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="/#contact"
                                onClick={closeMenu}
                            >
                                <i className="fas fa-phone me-2"></i>Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;