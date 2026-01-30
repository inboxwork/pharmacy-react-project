import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { products, medicinesProducts } from '../../data/products';

const SearchBox = ({ mobile = false }) => {
    const [query, setQuery] = useState('');
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();
    const searchResultsRef = useRef();

    const allProducts = [...products, ...medicinesProducts];

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        setShowResults(value.length > 0);
    };

    const handleProductClick = (product) => {
        setQuery('');
        setShowResults(false);
        
        navigate('/medicines');
        
        setTimeout(() => {
            const element = document.getElementById(product.category);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                
                element.classList.add('highlight');
                setTimeout(() => {
                    element.classList.remove('highlight');
                }, 2000);
            }
        }, 500);
    };

    const handleClickOutside = (e) => {
        if (searchResultsRef.current && !searchResultsRef.current.contains(e.target)) {
            setShowResults(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filteredProducts = query.trim() === '' 
        ? [] 
        : allProducts.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );

    const getCategoryName = (category) => {
        const categories = {
            'vitamin-d': 'Vitamin D',
            'vitamin-c': 'Vitamin C',
            'vitamin-e': 'Vitamin E',
            'iron': 'Iron & Anemia',
            'acne': 'Acne Treatment',
            'hair-loss': 'Hair Loss Treatment',
            'shampoos': 'Shampoos',
            'hair-care': 'Hair Sprays & Serums',
            'cardiac': 'Cardiac Medicines',
            'dental': 'Dental Medicines',
            'pregnancy': 'Pregnancy & Birth',
            'children': 'Children Medicines',
            'diabetes': 'Diabetes Care'
        };
        return categories[category] || category.replace('-', ' ').toUpperCase();
    };

    return (
        <div className="search-container" ref={searchResultsRef}>
            <input
                type="text"
                className="search-box"
                placeholder={mobile ? "Search medicines, products..." : "Search medicines, products, categories..."}
                value={query}
                onChange={handleSearch}
                onFocus={() => query.trim().length > 0 && setShowResults(true)}
            />
            <button className="search-btn">
                <i className="fas fa-search"></i>
            </button>
            
            {showResults && (
                <div className="search-results" style={{ display: 'block' }}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div 
                                key={product.id} 
                                className="search-result-item"
                                onClick={() => handleProductClick(product)}
                            >
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="search-result-image"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/img/Vitamin C 1000m.jpg';
                                    }}
                                />
                                <div>
                                    <h6 className="mb-1">{product.name}</h6>
                                    <p className="mb-1 text-muted">${product.price.toFixed(2)}</p>
                                    <small className="text-primary">
                                        {getCategoryName(product.category)}
                                    </small>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="search-result-item">
                            <div className="text-center py-3">
                                <i className="fas fa-search mb-2" style={{ fontSize: '24px', color: 'var(--gray)' }}></i>
                                <p className="mb-0">No products found for "{query}"</p>
                                <small className="text-muted">Try different keywords</small>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBox;