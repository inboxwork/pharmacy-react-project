import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';

const CartModal = ({ showToast }) => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleCartIconClick = () => {
            setIsOpen(true);
        };

        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            cartIcon.addEventListener('click', handleCartIconClick);
        }

        return () => {
            if (cartIcon) {
                cartIcon.removeEventListener('click', handleCartIconClick);
            }
        };
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('cart-modal-overlay')) {
            handleClose();
        }
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            showToast('Cart Empty', 'Please add items to your cart before checking out', 'error');
            return;
        }
        
        showToast('Order Placed', `Thank you for your order! Total: $${cartTotal.toFixed(2)}`, 'success');
        handleClose();
    };

    return (
        <>
            {isOpen && (
                <div 
                    className="cart-modal-overlay" 
                    id="cartOverlay"
                    onClick={handleOverlayClick}
                    style={{ display: 'block' }}
                >
                    <div className={`cart-modal ${isOpen ? 'active' : ''}`} id="cartModal">
                        <div className="cart-header">
                            <h4 className="mb-0"><i className="fas fa-shopping-cart me-2"></i>Your Cart</h4>
                            <button 
                                className="btn-close btn-close-white" 
                                id="closeCart"
                                onClick={handleClose}
                            ></button>
                        </div>
                        
                        <div className="cart-body">
                            <div id="cartItems">
                                {cart.length === 0 ? (
                                    <div className="text-center py-4">
                                        <i className="fas fa-shopping-cart mb-3" style={{ fontSize: '48px', color: 'var(--gray)' }}></i>
                                        <h5>Your cart is empty</h5>
                                        <p className="text-muted">Add some products to get started</p>
                                    </div>
                                ) : (
                                    cart.map(item => (
                                        <div key={item.id} className="cart-item">
                                            <div className="row align-items-center">
                                                <div className="col-3">
                                                    <img src={item.image} alt={item.name} className="img-fluid rounded" />
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="mb-1">{item.name}</h6>
                                                    <p className="mb-1 text-muted">${item.price.toFixed(2)} each</p>
                                                </div>
                                                <div className="col-3 text-end">
                                                    <div className="d-flex align-items-center justify-content-end gap-2">
                                                        <button 
                                                            className="btn btn-sm btn-outline-secondary cart-decrease"
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="mx-2 cart-quantity">{item.quantity}</span>
                                                        <button 
                                                            className="btn btn-sm btn-outline-secondary cart-increase"
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <button 
                                                        className="btn btn-link text-danger p-0 mt-2 cart-remove"
                                                        onClick={() => removeFromCart(item.id)}
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        
                        <div className="cart-footer">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="mb-0">Total:</h5>
                                <h4 className="mb-0 text-primary" id="cartTotal">
                                    ${cartTotal.toFixed(2)}
                                </h4>
                            </div>
                            <div className="d-grid gap-2">
                                <button 
                                    className="btn btn-primary-custom" 
                                    id="checkoutBtn"
                                    onClick={handleCheckout}
                                >
                                    <i className="fas fa-shopping-bag me-2"></i>Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartModal;