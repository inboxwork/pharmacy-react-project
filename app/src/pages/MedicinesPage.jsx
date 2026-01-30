import React, { useEffect } from 'react';
import { medicinesProducts } from '../data/products';
import ProductCard from '../components/Common/ProductCard';

const MedicinesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        
        if (window.location.hash) {
            setTimeout(() => {
                const element = document.querySelector(window.location.hash);
                if (element) {
                    const offset = 120;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    }, []);

    const getCategoryProducts = (category) => {
        return medicinesProducts.filter(product => product.category === category);
    };

    const categories = [
        { id: 'cardiac', name: 'Cardiac Medicines', icon: 'fas fa-heart' },
        { id: 'dental', name: 'Dental Medicines', icon: 'fas fa-tooth' },
        { id: 'pregnancy', name: 'Pregnancy & Birth', icon: 'fas fa-baby' },
        { id: 'children', name: 'Children Medicines', icon: 'fas fa-child' },
        { id: 'diabetes', name: 'Diabetes Care', icon: 'fas fa-tint' },
        { id: 'vitamin-d', name: 'Vitamin D', icon: 'fas fa-sun' },
        { id: 'vitamin-c', name: 'Vitamin C', icon: 'fas fa-lemon' },
        { id: 'vitamin-e', name: 'Vitamin E', icon: 'fas fa-seedling' },
        { id: 'iron', name: 'Iron & Anemia', icon: 'fas fa-weight' },
        { id: 'acne', name: 'Acne Treatments', icon: 'fas fa-spa' },
        { id: 'hair-loss', name: 'Hair Loss Treatment', icon: 'fas fa-cut' },
        { id: 'shampoos', name: 'All Shampoos', icon: 'fas fa-shower' },
        { id: 'hair-care', name: 'Hair Sprays & Serums', icon: 'fas fa-spray-can' }
    ];

    return (
        <section id="medicines-page" className="medicines-page">
            <div className="page-header">
                <h1>Medicines</h1>
                <p>Browse our comprehensive range of medicines and healthcare products</p>
            </div>
            <div className="container">
                {categories.map(category => {
                    const products = getCategoryProducts(category.id);
                    if (products.length === 0) return null;

                    return (
                        <div key={category.id} className="category-section">
                            <h2 id={category.id}>
                                <i className={category.icon}></i> {category.name}
                            </h2>
                            <div className="product-grid">
                                {products.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default MedicinesPage;