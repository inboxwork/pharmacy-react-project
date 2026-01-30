import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="container text-center py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <i className="fas fa-exclamation-triangle mb-4" style={{ fontSize: '100px', color: 'var(--primary)' }}></i>
                    <h1 className="mb-3">404 - Page Not Found</h1>
                    <p className="mb-4">The page you are looking for doesn't exist or has been moved.</p>
                    <Link to="/" className="btn btn-primary-custom">
                        <i className="fas fa-home me-2"></i>Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;