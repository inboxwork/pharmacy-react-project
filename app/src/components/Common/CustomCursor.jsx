import React, { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            const customCursor = document.getElementById('customCursor');
            const cursorFollower = document.getElementById('cursorFollower');

            const handleMouseMove = (e) => {
                if (customCursor && cursorFollower) {
                    customCursor.style.left = e.clientX + 'px';
                    customCursor.style.top = e.clientY + 'px';
                    
                    setTimeout(() => {
                        cursorFollower.style.left = e.clientX + 'px';
                        cursorFollower.style.top = e.clientY + 'px';
                    }, 50);
                }
            };

            const handleMouseEnter = () => {
                if (customCursor && cursorFollower) {
                    customCursor.classList.add('hover');
                    cursorFollower.classList.add('hover');
                }
            };

            const handleMouseLeave = () => {
                if (customCursor && cursorFollower) {
                    customCursor.classList.remove('hover');
                    cursorFollower.classList.remove('hover');
                }
            };

            document.addEventListener('mousemove', handleMouseMove);

            const hoverElements = [
                'a', 'button', '.btn', '.nav-link', '.dropdown-item', 
                '.search-btn', '.theme-toggle', '.cart-icon', '.add-to-cart-btn',
                '.category-card', '.product-card', '.contact-link', '.social-link',
                '.scroll-to-top'
            ];

            hoverElements.forEach(selector => {
                document.querySelectorAll(selector).forEach(element => {
                    element.addEventListener('mouseenter', handleMouseEnter);
                    element.addEventListener('mouseleave', handleMouseLeave);
                });
            });

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                hoverElements.forEach(selector => {
                    document.querySelectorAll(selector).forEach(element => {
                        element.removeEventListener('mouseenter', handleMouseEnter);
                        element.removeEventListener('mouseleave', handleMouseLeave);
                    });
                });
            };
        }
    }, []);

    return (
        <>
            <div className="custom-cursor" id="customCursor"></div>
            <div className="custom-cursor-follower" id="cursorFollower"></div>
        </>
    );
};

export default CustomCursor;