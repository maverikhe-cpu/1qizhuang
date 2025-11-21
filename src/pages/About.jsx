import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, MapPin, Calendar, Building } from 'lucide-react';
import './About.css';

const About = () => {
    const stats = [
        { label: "成立时间", value: "2015", unit: "年" },
        { label: "团队规模", value: "200", unit: "+" },
        { label: "服务装企", value: "500", unit: "+" },
        { label: "覆盖城市", value: "30", unit: "+" },
        { label: "核心专利", value: "15", unit: "项" },
        { label: "客户满意度", value: "98", unit: "%" },
    ];

    const team = [
        { name: "张三", role: "CEO / 创始人", bg: "清华大学硕士 | 连续创业者", desc: "拥有10年家装行业经验，致力于用科技重塑行业。" },
        { name: "李四", role: "CTO", bg: "前阿里P8 | 技术专家", desc: "主导过亿级并发系统架构，深耕AI视觉领域。" },
        { name: "王五", role: "COO", bg: "前龙湖地产高管", desc: "精通工程管理与供应链整合，打造标准化交付体系。" },
    ];

    const history = [
        { year: "2015", title: "公司成立", desc: "获得天使轮融资，确立'智能交付'方向" },
        { year: "2017", title: "产品1.0上线", desc: "首创远程可视化工地管理系统" },
        { year: "2019", title: "AI实验室成立", desc: "引入计算机视觉技术，实现违规自动抓拍" },
        { year: "2021", title: "B轮融资", desc: "获得知名VC投资，业务覆盖全国20城" },
        { year: "2023", title: "支付宝战略合作", desc: "成为支付宝家装行业核心服务商" },
        { year: "2024", title: "AI大模型应用", desc: "发布行业首个垂类大模型，赋能营销获客" },
    ];

    return (
        <div className="page-container about-page">
            <div className="container">
                <div className="about-header text-center">
                    <h1>关于我们</h1>
                    <p>用科技让装修更简单，让交付更放心</p>
                </div>

                {/* Company Stats */}
                <section className="company-stats-section">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="company-stat-item">
                                <div className="stat-number">
                                    {stat.value}<span className="stat-unit">{stat.unit}</span>
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Core Team */}
                <section className="team-section">
                    <h2 className="section-heading">核心团队</h2>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                className="team-card"
                                whileHover={{ y: -10 }}
                            >
                                <div className="member-avatar">
                                    <Users size={40} color="#ccc" />
                                </div>
                                <h3>{member.name}</h3>
                                <div className="member-role">{member.role}</div>
                                <div className="member-bg">{member.bg}</div>
                                <p className="member-desc">{member.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* History */}
                <section className="history-section">
                    <h2 className="section-heading">发展历程</h2>
                    <div className="timeline-container">
                        <div className="timeline-line"></div>
                        {history.map((item, index) => (
                            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-content">
                                    <div className="timeline-year">{item.year}</div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="timeline-dot"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Partners */}
                <section id="partners" className="partners-section">
                    <h2 className="section-heading">合作伙伴</h2>
                    <div className="partners-category">
                        <h3>战略合作伙伴</h3>
                        <div className="logos-row large">
                            <div className="logo-box">海康威视</div>
                            <div className="logo-box">萤石云</div>
                            <div className="logo-box">中国电信</div>
                        </div>
                    </div>
                    <div className="partners-category">
                        <h3>生态合作伙伴</h3>
                        <div className="logos-row medium">
                            <div className="logo-box">阿里巴巴</div>
                            <div className="logo-box">百度</div>
                            <div className="logo-box">高德地图</div>
                            <div className="logo-box">企业微信</div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default About;
