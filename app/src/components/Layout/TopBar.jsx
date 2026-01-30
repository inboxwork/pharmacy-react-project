import React from 'react';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <i className="fas fa-phone me-2"></i> +1 (555) 123-4567
                        <i className="fas fa-envelope ms-4 me-2"></i> info@elitepharmacy.com
                    </div>
                    <div className="col-md-6 text-md-end">
                        <span>🚚 Free shipping on orders over $50 |</span>
                        <a href="#" className="ms-2"><i className="fas fa-map-marker-alt me-1"></i> Store Locator</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;