import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-text">一起装</span>
                            <span className="logo-dot">.</span>
                        </div>
                        <p className="footer-desc">
                            为装企提供一站式智能交付与数字化营销解决方案。
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>产品</h4>
                            <Link to="/features">功能全景</Link>
                            <Link to="/solutions">解决方案</Link>
                            <Link to="/marketing">营销获客</Link>
                        </div>
                        <div className="footer-col">
                            <h4>公司</h4>
                            <Link to="/about">关于我们</Link>
                            <Link to="/success">客户案例</Link>
                            <Link to="/partners">合作生态</Link>
                        </div>
                        <div className="footer-col">
                            <h4>联系</h4>
                            <a href="#">400-123-4567</a>
                            <a href="#">contact@yiqizhuang.com</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} 一起装智能交付系统. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
