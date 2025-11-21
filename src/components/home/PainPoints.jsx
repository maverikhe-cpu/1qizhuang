import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, UserX } from 'lucide-react';
import './PainPoints.css';

const PainPoints = () => {
    const points = [
        {
            icon: <AlertCircle size={40} color="#FF7A00" />,
            percent: "85%",
            text: "消费者担心施工质量",
            desc: "隐蔽工程难监管，质量问题频发",
            delay: 0
        },
        {
            icon: <Clock size={40} color="#FF7A00" />,
            percent: "61.5%",
            text: "遭遇施工拖沓不专业",
            desc: "工期延误成常态，交付无保障",
            delay: 0.2
        },
        {
            icon: <UserX size={40} color="#FF7A00" />,
            percent: "60%",
            text: "被迫重度参与",
            desc: "业主跑断腿，时间成本极高",
            delay: 0.4
        }
    ];

    return (
        <section className="section pain-points-section">
            <div className="container">
                <div className="pain-points-grid">
                    {points.map((item, index) => (
                        <motion.div
                            key={index}
                            className="pain-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: item.delay, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="pain-icon-wrapper">
                                {item.icon}
                            </div>
                            <div className="pain-data">
                                {item.percent}
                            </div>
                            <h3 className="pain-title">{item.text}</h3>
                            <p className="pain-desc">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="pain-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="pain-quote">"交付品质决定口碑，口碑决定生死"</p>
                </motion.div>
            </div>
        </section>
    );
};

export default PainPoints;
