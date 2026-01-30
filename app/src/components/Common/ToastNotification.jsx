import React, { useEffect } from 'react';

const ToastNotification = ({ title, message, type = 'success' }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            const toast = document.getElementById('toast');
            if (toast) {
                toast.style.display = 'none';
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const iconClass = type === 'success' ? 'fas fa-check-circle me-3' :
                     type === 'error' ? 'fas fa-times-circle me-3' :
                     'fas fa-info-circle me-3';

    const iconStyle = {
        color: type === 'success' ? 'var(--secondary)' :
               type === 'error' ? '#ef4444' :
               'var(--primary)'
    };

    return (
        <div className={`toast toast-${type}`} id="toast" style={{ display: 'block' }}>
            <div className="d-flex align-items-center">
                <i className={iconClass} style={{ fontSize: '20px', ...iconStyle }}></i>
                <div>
                    <h6 className="mb-1" id="toastTitle">{title}</h6>
                    <p className="mb-0" id="toastMessage">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ToastNotification;