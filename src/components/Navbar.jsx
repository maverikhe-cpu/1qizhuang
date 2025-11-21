import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(true); // Default to Dark for premium feel
    const location = useLocation();

    useEffect(() => {
        // Initialize Theme
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 || location.pathname !== '/') {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Initial check
        if (location.pathname !== '/') {
            setScrolled(true);
        } else {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const navLinks = [
        { name: '首页', path: '/' },
        { name: '产品功能', path: '/features' },
        { name: '解决方案', path: '/solutions' },
        { name: '营销获客', path: '/marketing' },
        { name: '客户成功', path: '/success' },
        { name: '合作生态', path: '/partners' },
        { name: '关于我们', path: '/about' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    <span className="logo-text">一起装</span>
                    <span className="logo-dot">.</span>
                </Link>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="nav-actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <Link to="/demo" className="btn btn-primary nav-cta">
                        申请演示
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
