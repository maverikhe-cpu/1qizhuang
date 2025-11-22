import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Headphones, Wrench, BookOpen, Lightbulb, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import ContactModal from '../components/ContactModal';
import './Success.css';

const Success = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cases = [
        {
            name: "XX装饰",
            scale: "年营收5亿",
            quote: "使用一起装后，我们的交付口碑直线上升，回头客明显增多。",
            stats: [
                { label: "管理成本", value: "30%", type: "down" },
                { label: "投诉率", value: "50%", type: "down" },
                { label: "转化率", value: "40%", type: "up" }
            ]
        },
        {
            name: "YY设计",
            scale: "高端工作室",
            quote: "业主对透明化工地非常满意，这成为了我们谈单的杀手锏。",
            stats: [
                { label: "客户满意度", value: "99%", type: "up" },
                { label: "转介绍率", value: "35%", type: "up" },
                { label: "人效", value: "50%", type: "up" }
            ]
        },
        {
            name: "ZZ整装",
            scale: "连锁装企",
            quote: "多门店管理变得非常轻松，数据看板让我对经营状况一目了然。",
            stats: [
                { label: "管理半径", value: "3倍", type: "up" },
                { label: "延期率", value: "0%", type: "down" },
                { label: "利润率", value: "15%", type: "up" }
            ]
        }
    ];

    return (
        <div className="page-container success-page">
            <div className="container">
                <div className="success-header text-center">
                    <h1>客户成功</h1>
                    <p>成就客户，是我们存在的唯一理由</p>
                </div>

                {/* Service Promise */}
                <section className="service-promise-section">
                    <h2 className="section-heading">全方位服务保障</h2>
                    <div className="promise-grid">
                        <div className="promise-card">
                            <div className="promise-icon"><Headphones size={32} /></div>
                            <h3>专属客户经理</h3>
                            <p>1对1贴心服务，随时响应您的需求</p>
                        </div>
                        <div className="promise-card">
                            <div className="promise-icon"><Wrench size={32} /></div>
                            <h3>7×24小时支持</h3>
                            <p>技术团队全天候待命，保障系统稳定</p>
                        </div>
                        <div className="promise-card">
                            <div className="promise-icon"><BookOpen size={32} /></div>
                            <h3>定期行业培训</h3>
                            <p>分享行业最佳实践，赋能团队成长</p>
                        </div>
                        <div className="promise-card">
                            <div className="promise-icon"><Lightbulb size={32} /></div>
                            <h3>持续优化建议</h3>
                            <p>基于数据分析，提供经营改进建议</p>
                        </div>
                    </div>
                </section>

                {/* Case Studies */}
                <section className="case-studies-section">
                    <h2 className="section-heading">标杆客户案例</h2>
                    <div className="cases-grid">
                        {cases.map((item, index) => (
                            <motion.div
                                key={index}
                                className="case-card"
                                whileHover={{ y: -10 }}
                            >
                                <div className="case-header">
                                    <div className="case-logo">Logo</div>
                                    <div className="case-info">
                                        <h4>{item.name}</h4>
                                        <span>{item.scale}</span>
                                    </div>
                                </div>
                                <div className="case-stats">
                                    {item.stats.map((stat, i) => (
                                        <div key={i} className="stat-row">
                                            <span className="stat-label">{stat.label}</span>
                                            <div className="stat-val-wrapper">
                                                {stat.type === 'up' ? <TrendingUp size={14} color="#27AE60" /> : <TrendingDown size={14} color="#E74C3C" />}
                                                <span className={`stat-value ${stat.type}`}>{stat.value}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="case-quote">"{item.quote}"</p>
                                <button className="btn-link">查看完整案例 <ArrowRight size={14} /></button>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Alipay Cooperation */}
                <section className="alipay-section">
                    <div className="alipay-container">
                        <div className="alipay-header">
                            <span className="brand-alipay">支付宝</span>
                            <span className="brand-plus">+</span>
                            <span className="brand-yiqi">一起装</span>
                        </div>
                        <h2>装修公司入驻支付宝享受亿级流量，一起装是必经之路</h2>

                        <div className="alipay-value-grid">
                            <div className="value-box alipay-side">
                                <h3>支付宝赋能</h3>
                                <ul>
                                    <li>可信资金托管</li>
                                    <li>亿级公域流量</li>
                                    <li>品牌信用背书</li>
                                </ul>
                            </div>
                            <div className="connection-anim">
                                <div className="arrow-anim">⇄</div>
                                <span>生态融合</span>
                            </div>
                            <div className="value-box yiqi-side">
                                <h3>一起装赋能</h3>
                                <ul>
                                    <li>AI智能验收</li>
                                    <li>施工数据存证</li>
                                    <li>工人实名认证</li>
                                </ul>
                            </div>
                        </div>

                        <button className="btn btn-primary alipay-cta" onClick={() => setIsModalOpen(true)}>抢先接入支付宝生态</button>
                    </div>
                </section>

            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                formType="alipay"
            />
        </div>
    );
};

export default Success;
