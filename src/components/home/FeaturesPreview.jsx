import React from 'react';
import { motion } from 'framer-motion';
import { Video, ScanFace, BarChart3, Share2 } from 'lucide-react';
import './FeaturesPreview.css';

const FeaturesPreview = () => {
    const features = [
        {
            icon: <Video size={32} />,
            title: "24小时远程查看",
            desc: "手机随时随地看工地，告别跑断腿",
            bg: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)"
        },
        {
            icon: <ScanFace size={32} />,
            title: "AI自动识人识事",
            desc: "自动识别工人身份与违规行为",
            bg: "linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)"
        },
        {
            icon: <BarChart3 size={32} />,
            title: "数据驱动决策",
            desc: "多维度数据看板，管理有的放矢",
            bg: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)"
        },
        {
            icon: <Share2 size={32} />,
            title: "营销获客闭环",
            desc: "工地变展厅，自动生成营销素材",
            bg: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)"
        }
    ];

    return (
        <section className="section features-preview-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">全链路AI智能赋能</h2>
                    <p className="section-subtitle">不仅仅是监控，更是您的智能管家</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="feature-tag">AI赋能</div>
                            <div className="feature-visual" style={{ background: feature.bg }}>
                                <div className="feature-icon-wrapper">
                                    {feature.icon}
                                </div>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-desc">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesPreview;
