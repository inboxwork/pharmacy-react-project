import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('elitePharmacyCart');
        return saved ? JSON.parse(saved) : [];
    });

    const addToCart = (product) => {
        setCart(old => {
            const exists = old.find(x => x.id === product.id);
            let newCart;
            if (exists) {
                newCart = old.map(x => 
                    x.id === product.id 
                    ? { ...x, quantity: x.quantity + 1 } 
                    : x
                );
            } else {
                newCart = [...old, { ...product, quantity: 1 }];
            }
            localStorage.setItem('elitePharmacyCart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const removeFromCart = (id) => {
        setCart(old => {
            const newCart = old.filter(x => x.id !== id);
            localStorage.setItem('elitePharmacyCart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const updateQuantity = (id, qty) => {
        if (qty < 1) {
            removeFromCart(id);
            return;
        }
        setCart(old => {
            const newCart = old.map(x => 
                x.id === id ? { ...x, quantity: qty } : x
            );
            localStorage.setItem('elitePharmacyCart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('elitePharmacyCart');
    };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
                cartCount
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};