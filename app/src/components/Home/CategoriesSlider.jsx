import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoriesSlider = () => {
    const navigate = useNavigate();

    const categories = [
        {
            id: 1,
            icon: "fas fa-shower",
            title: "Shampoos",
            description: "All types of shampoos for different hair needs including anti-dandruff and moisturizing",
            count: "4 Products",
            link: "/medicines#shampoos"
        },
        {
            id: 2,
            icon: "fas fa-sun",
            title: "Vitamin D",
            description: "Vitamin D supplements in various forms and dosages for bone health",
            count: "4 Products",
            link: "/medicines#vitamin-d"
        },
        {
            id: 3,
            icon: "fas fa-weight",
            title: "Iron & Anemia",
            description: "Iron supplements and medications for treating anemia and iron deficiency",
            count: "4 Products",
            link: "/medicines#iron"
        },
        {
            id: 4,
            icon: "fas fa-spa",
            title: "Acne Treatment",
            description: "Medications and creams for treating acne, pimples, and skin blemishes",
            count: "4 Products",
            link: "/medicines#acne"
        },
        {
            id: 5,
            icon: "fas fa-cut",
            title: "Hair Loss Treatment",
            description: "Specialized treatments and serums for hair loss prevention and regrowth",
            count: "4 Products",
            link: "/medicines#hair-loss"
        }
    ];

    const handleCategoryClick = (link) => {
        navigate(link);
    };

    return (
        <section className="categories-slider-section" id="categories">
            <div className="container">
                <div className="section-title">
                    <h2>Shop By Category</h2>
                    <p className="section-subtitle">Browse our extensive range of healthcare products organized by category</p>
                </div>
                
                <div className="owl-carousel" id="categoriesSlider">
                    {categories.map(category => (
                        <div key={category.id} className="category-slide">
                            <div 
                                className="category-card" 
                                onClick={() => handleCategoryClick(category.link)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="category-icon">
                                    <i className={category.icon}></i>
                                </div>
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <span className="category-count">{category.count}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSlider;