import React from 'react';
import { useCart } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    
    const discount = product.originalPrice ? 
        Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    const getBadgeClass = () => {
        if (!product.badge) return '';
        if (product.badge.includes('OFF')) return 'sale';
        if (product.badge === 'Hot') return 'sale';
        if (product.badge === 'Best Seller') return 'best-seller';
        return 'new';
    };

    return (
        <div className="product-card">
            {product.badge && (
                <span className={`product-badge ${getBadgeClass()}`}>
                    {product.badge}
                </span>
            )}
            <div className="product-img">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    loading="lazy"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/img/Vitamin C 1000m.jpg';
                    }}
                />
            </div>
            <div className="product-info">
                <span className="product-category">
                    {product.category.replace('-', ' ').toUpperCase()}
                </span>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">
                    <span className="current-price">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                        <>
                            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                            <span className="discount">Save {discount}%</span>
                        </>
                    )}
                </div>
                <button 
                    className="add-to-cart-btn" 
                    onClick={() => addToCart(product)}
                >
                    <i className="fas fa-cart-plus me-2"></i>Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;