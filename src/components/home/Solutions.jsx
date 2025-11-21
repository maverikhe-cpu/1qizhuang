import React from 'react';
import { motion } from 'framer-motion';
import { Brain, XCircle, CheckCircle } from 'lucide-react';
import './Solutions.css';

const Solutions = () => {
    return (
        <section className="section solutions-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">从"管不住"到"智能管"</h2>
                    <p className="section-subtitle">两步打造核心竞争力</p>
                </div>

                <div className="solutions-comparison">
                    {/* Left: Traditional */}
                    <motion.div
                        className="solution-card traditional"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="card-badge bad">传统方式</div>
                        <ul className="comparison-list">
                            <li>
                                <XCircle size={20} className="icon-bad" />
                                <span>人跑断腿，效率低下</span>
                            </li>
                            <li>
                                <XCircle size={20} className="icon-bad" />
                                <span>本子记账，数据混乱</span>
                            </li>
                            <li>
                                <XCircle size={20} className="icon-bad" />
                                <span>微信群聊，信息断层</span>
                            </li>
                            <li>
                                <XCircle size={20} className="icon-bad" />
                                <span>被动响应，投诉频发</span>
                            </li>
                        </ul>
                        <div className="chaos-bg"></div>
                    </motion.div>

                    {/* Center: AI Brain */}
                    <div className="solution-center">
                        <motion.div
                            className="ai-brain-container"
                            animate={{
                                boxShadow: ['0 0 0px rgba(74, 144, 226, 0)', '0 0 30px rgba(74, 144, 226, 0.5)', '0 0 0px rgba(74, 144, 226, 0)']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Brain size={64} color="#FFFFFF" />
                        </motion.div>
                        <div className="flow-arrows">
                            <motion.div
                                className="arrow-left"
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.div>
                            <motion.div
                                className="arrow-right"
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Smart */}
                    <motion.div
                        className="solution-card smart"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="card-badge good">一起装智能交付</div>
                        <ul className="comparison-list">
                            <li>
                                <CheckCircle size={20} className="icon-good" />
                                <span>远程监控，千里眼</span>
                            </li>
                            <li>
                                <CheckCircle size={20} className="icon-good" />
                                <span>AI记录，自动归档</span>
                            </li>
                            <li>
                                <CheckCircle size={20} className="icon-good" />
                                <span>数据分析，决策大脑</span>
                            </li>
                            <li>
                                <CheckCircle size={20} className="icon-good" />
                                <span>主动预警，口碑自动化</span>
                            </li>
                        </ul>
                        <div className="order-bg"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
