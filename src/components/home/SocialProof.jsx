import React from 'react';
import { motion } from 'framer-motion';
import './SocialProof.css';

const SocialProof = () => {
    const stats = [
        { value: "500+", label: "服务装企" },
        { value: "10,000+", label: "覆盖工地" },
        { value: "98%", label: "交付准时率" }
    ];

    const testimonials = [
        {
            quote: "以前工地管不过来，现在坐在办公室就能掌控全局。",
            author: "张总",
            role: "某知名装饰公司总经理"
        },
        {
            quote: "客户对透明化工地非常满意，签单率明显提升了。",
            author: "李经理",
            role: "项目总监"
        },
        {
            quote: "系统简单好用，工人上手快，确实解决了大问题。",
            author: "王工",
            role: "工程部主管"
        }
    ];

    return (
        <section className="section social-proof-section">
            <div className="container">
                {/* Stats */}
                <div className="proof-stats">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="proof-stat-item"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="proof-stat-value">{stat.value}</div>
                            <div className="proof-stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.2 }}
                        >
                            <p className="testimonial-quote">"{item.quote}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar"></div>
                                <div className="author-info">
                                    <div className="author-name">{item.author}</div>
                                    <div className="author-role">{item.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Logos (Placeholder) */}
                <div className="logos-container">
                    <p className="logos-title">他们都在用一起装</p>
                    <div className="logos-grid">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="logo-placeholder">Client {i + 1}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
