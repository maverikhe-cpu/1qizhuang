import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, ShieldCheck, Store, Repeat, ArrowRight, Users, TrendingUp, Zap } from 'lucide-react';
import './Marketing.css';

const Marketing = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { id: 0, label: '知道', sub: '多渠道引流', color: '#4A90E2', icon: Share2 },
        { id: 1, label: '了解', sub: '建立信任', color: '#27AE60', icon: ShieldCheck },
        { id: 2, label: '到店', sub: '体验转化', color: '#F5A623', icon: Store },
        { id: 3, label: '成交', sub: '口碑裂变', color: '#E74C3C', icon: Repeat },
    ];

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return (
                    <div className="step-detail">
                        <div className="detail-text">
                            <h3>多渠道引流：流量自动汇聚</h3>
                            <p>打通微信、抖音、小区广告等全域流量，将潜在客户汇聚到私域流量池。</p>
                            <ul className="feature-list">
                                <li><strong>围观装修小程序</strong>：自动推送"您关注的工地有更新"</li>
                                <li><strong>社交裂变</strong>：一键生成海报，老带新奖励自动分发</li>
                                <li><strong>全员营销</strong>：员工、工长、设计师全员推广</li>
                            </ul>
                        </div>
                        <div className="detail-visual traffic-pool">
                            <div className="pool-center">私域池</div>
                            <motion.div className="pool-item p1" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>抖音</motion.div>
                            <motion.div className="pool-item p2" animate={{ y: [0, -10, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>朋友圈</motion.div>
                            <motion.div className="pool-item p3" animate={{ y: [0, -10, 0] }} transition={{ duration: 2.4, repeat: Infinity }}>小区</motion.div>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="step-detail">
                        <div className="detail-text">
                            <h3>建立信任：所见即所得</h3>
                            <p>通过透明化的展示和专业内容，消除客户顾虑，建立品牌信任感。</p>
                            <ul className="feature-list">
                                <li><strong>24h工地直播</strong>：敢透明，才值得信赖</li>
                                <li><strong>VR全景案例</strong>：身临其境的装修体验</li>
                                <li><strong>真实评价沉淀</strong>：客户证言自动归档展示</li>
                            </ul>
                        </div>
                        <div className="detail-visual trust-build">
                            <div className="trust-card">
                                <div className="live-badge">LIVE</div>
                                <div className="trust-content">真实工地直播中...</div>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="step-detail">
                        <div className="detail-text">
                            <h3>吸引到店：沉浸式体验</h3>
                            <p>线上种草，线下拔草。通过数字化展厅提升客户到店体验与转化率。</p>
                            <ul className="feature-list">
                                <li><strong>数字化展厅</strong>：大屏实时展示在建工地</li>
                                <li><strong>智能报价</strong>：透明报价，拒绝套路</li>
                                <li><strong>到店礼包</strong>：扫码自动核销，数据留存</li>
                            </ul>
                        </div>
                        <div className="detail-visual store-visit">
                            <div className="store-scene">
                                <div className="screen-display">工地大屏</div>
                                <div className="customer"></div>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="step-detail">
                        <div className="detail-text">
                            <h3>口碑裂变：让交付成为营销</h3>
                            <p>满意的交付是最好的广告。系统自动触发分享机制，实现老客带新客。</p>
                            <ul className="feature-list">
                                <li><strong>节点自动分享</strong>：验收合格自动生成喜报</li>
                                <li><strong>口碑飞轮</strong>：好交付 &rarr; 好口碑 &rarr; 新客户</li>
                                <li><strong>佣金自动结算</strong>：激励推荐人持续介绍</li>
                            </ul>
                        </div>
                        <div className="detail-visual flywheel">
                            <motion.div
                                className="wheel"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="spoke s1">交付</div>
                                <div className="spoke s2">口碑</div>
                                <div className="spoke s3">获客</div>
                            </motion.div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="page-container marketing-page">
            <div className="container">
                <div className="marketing-header text-center">
                    <h1>数字化营销闭环</h1>
                    <p>从流量到留量，打造自动运转的获客机器</p>
                </div>

                {/* Loop Visualization */}
                <div className="marketing-loop">
                    <div className="loop-container">
                        {steps.map((step, index) => (
                            <React.Fragment key={step.id}>
                                <motion.div
                                    className={`loop-step ${activeStep === index ? 'active' : ''}`}
                                    onClick={() => setActiveStep(index)}
                                    whileHover={{ scale: 1.05 }}
                                    style={{ borderColor: step.color }}
                                >
                                    <div className="step-icon" style={{ backgroundColor: step.color }}>
                                        <step.icon size={24} color="white" />
                                    </div>
                                    <div className="step-label">{step.label}</div>
                                    <div className="step-sub">{step.sub}</div>
                                </motion.div>
                                {index < steps.length - 1 && (
                                    <div className="loop-connector">
                                        <ArrowRight size={20} color="#ddd" />
                                    </div>
                                )}
                                {/* Loop back arrow for visual effect (optional, simplified here) */}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Detail Content */}
                <div className="marketing-content-area">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {renderStepContent()}
                    </motion.div>
                </div>

                {/* Advantages Summary */}
                <div className="marketing-advantages">
                    <div className="advantage-card">
                        <div className="adv-icon"><TrendingUp size={32} color="#4A90E2" /></div>
                        <h3>低成本获客</h3>
                        <p>相比传统电销/投放，获客成本降低60%</p>
                        <div className="adv-chart down"></div>
                    </div>
                    <div className="advantage-card">
                        <div className="adv-icon"><Zap size={32} color="#F5A623" /></div>
                        <h3>高信任转化</h3>
                        <p>透明化交付建立信任，转化率提升28%</p>
                        <div className="adv-chart up"></div>
                    </div>
                    <div className="advantage-card">
                        <div className="adv-icon"><Users size={32} color="#E74C3C" /></div>
                        <h3>口碑自动化</h3>
                        <p>系统自动驱动裂变，转介绍率提升40%</p>
                        <div className="adv-chart network"></div>
                    </div>
                </div>

                <div className="marketing-footer text-center">
                    <p className="highlight-quote">"让好交付自动带来新客户，实现口碑的持续增长"</p>
                </div>

            </div>
        </div>
    );
};

export default Marketing;
