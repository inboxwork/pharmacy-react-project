import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MedicinesPage from './pages/MedicinesPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CustomCursor from './components/Common/CustomCursor';
import LoadingSpinner from './components/Common/LoadingSpinner';
import ToastNotification from './components/Common/ToastNotification';
import ScrollToTop from './components/Common/ScrollToTop';
import CartModal from './components/Common/CartModal';
import { CartProvider } from './contexts/CartContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [toast, setToast] = useState({ show: false, title: '', message: '', type: 'success' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  const showToast = (title, message, type = 'success') => {
    setToast({ show: true, title, message, type });
    setTimeout(() => {
      setToast({ ...toast, show: false });
    }, 5000);
  };

  return (
    <CartProvider>
      <Router>
        <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
          <CustomCursor />
          {isLoading && <LoadingSpinner />}
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/medicines" element={<MedicinesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          {toast.show && (
            <ToastNotification
              title={toast.title}
              message={toast.message}
              type={toast.type}
            />
          )}
          <CartModal showToast={showToast} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;