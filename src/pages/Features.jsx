import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, AlertTriangle, Map, FileCheck, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import './Features.css';

const FeatureSection = ({ id, title, icon: Icon, children }) => (
    <div id={id} className="feature-detail-section">
        <div className="feature-header">
            <div className="feature-icon-box">
                <Icon size={32} />
            </div>
            <h2>{title}</h2>
        </div>
        {children}
    </div>
);

const Features = () => {
    const [activeTab, setActiveTab] = useState('site');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveTab(id);
        }
    };

    return (
        <div className="page-container features-page">
            <div className="features-layout container">
                {/* Left Sidebar Navigation */}
                <div className="features-sidebar">
                    <div className="sidebar-menu">
                        <div className="menu-group">
                            <h3>工地现场管理</h3>
                            <ul>
                                <li onClick={() => scrollToSection('remote-view')} className={activeTab === 'remote-view' ? 'active' : ''}>远程查看与巡检</li>
                                <li onClick={() => scrollToSection('ai-recognition')} className={activeTab === 'ai-recognition' ? 'active' : ''}>AI智能识人</li>
                                <li onClick={() => scrollToSection('safety-warning')} className={activeTab === 'safety-warning' ? 'active' : ''}>整洁与安全预警</li>
                            </ul>
                        </div>
                        <div className="menu-group">
                            <h3>工期管理</h3>
                            <ul>
                                <li onClick={() => scrollToSection('smart-dispatch')} className={activeTab === 'smart-dispatch' ? 'active' : ''}>智能统筹派工</li>
                                <li onClick={() => scrollToSection('online-acceptance')} className={activeTab === 'online-acceptance' ? 'active' : ''}>在线验收</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="features-content">

                    {/* Feature 1: AI Recognition */}
                    <FeatureSection id="ai-recognition" title="AI智能识人" icon={Video}>
                        <div className="pain-solution-card">
                            <div className="ps-item pain">
                                <XCircle size={20} />
                                <span>工人考勤难记录，冒名顶替</span>
                            </div>
                            <div className="ps-arrow"><ArrowRight size={20} /></div>
                            <div className="ps-item solution">
                                <CheckCircle size={20} />
                                <span>人脸识别，自动记录工时</span>
                            </div>
                        </div>

                        <div className="feature-demo ai-demo">
                            <div className="demo-screen">
                                <div className="camera-feed">
                                    <motion.div
                                        className="face-box"
                                        animate={{ scale: [1, 1.1, 1], borderColor: ['#4A90E2', '#FF7A00', '#4A90E2'] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <div className="face-label">王师傅 | 水电工</div>
                                    </motion.div>
                                    <div className="worker-card">
                                        <div className="worker-info">
                                            <strong>王师傅</strong>
                                            <span>水电工</span>
                                        </div>
                                        <div className="worker-stats">今日工时: 6.5h</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="value-formula">
                            <span className="formula-label">效率提升</span>
                            <span className="formula-content">1个AI系统 = 10个巡检员</span>
                        </div>
                    </FeatureSection>

                    {/* Feature 2: Safety Warning */}
                    <FeatureSection id="safety-warning" title="安全与违规预警" icon={AlertTriangle}>
                        <div className="pain-solution-card">
                            <div className="ps-item pain">
                                <XCircle size={20} />
                                <span>现场违规难发现，隐患大</span>
                            </div>
                            <div className="ps-arrow"><ArrowRight size={20} /></div>
                            <div className="ps-item solution">
                                <CheckCircle size={20} />
                                <span>AI自动抓拍，实时报警</span>
                            </div>
                        </div>

                        <div className="feature-demo safety-demo">
                            <div className="safety-grid">
                                <div className="safety-item">
                                    <div className="safety-icon red"><AlertTriangle /></div>
                                    <span>抽烟检测</span>
                                </div>
                                <div className="safety-item">
                                    <div className="safety-icon yellow"><AlertTriangle /></div>
                                    <span>未穿工服</span>
                                </div>
                                <div className="safety-item">
                                    <div className="safety-icon red"><AlertTriangle /></div>
                                    <span>电瓶车入户</span>
                                </div>
                                <div className="safety-item">
                                    <div className="safety-icon orange"><AlertTriangle /></div>
                                    <span>材料乱堆</span>
                                </div>
                            </div>
                            <motion.div
                                className="alert-timeline"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                            >
                                <span>10:00 发现</span> → <span>10:01 推送</span> → <span>10:05 处理</span>
                            </motion.div>
                        </div>
                    </FeatureSection>

                    {/* Feature 3: Smart Dispatch */}
                    <FeatureSection id="smart-dispatch" title="智能统筹派工" icon={Map}>
                        <div className="pain-solution-card">
                            <div className="ps-item pain">
                                <XCircle size={20} />
                                <span>派工靠电话，调度混乱</span>
                            </div>
                            <div className="ps-arrow"><ArrowRight size={20} /></div>
                            <div className="ps-item solution">
                                <CheckCircle size={20} />
                                <span>地图可视化，智能推荐</span>
                            </div>
                        </div>

                        <div className="feature-demo map-demo">
                            <div className="map-view">
                                <div className="map-pin busy" style={{ top: '30%', left: '40%' }}>忙</div>
                                <div className="map-pin idle" style={{ top: '50%', left: '60%' }}>闲</div>
                                <div className="map-pin idle" style={{ top: '20%', left: '70%' }}>闲</div>
                                <motion.div
                                    className="dispatch-line"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 100 }}
                                    transition={{ duration: 1 }}
                                ></motion.div>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Feature 4: Online Acceptance */}
                    <FeatureSection id="online-acceptance" title="在线验收" icon={FileCheck}>
                        <div className="pain-solution-card">
                            <div className="ps-item pain">
                                <XCircle size={20} />
                                <span>验收扯皮，纸质单据易丢</span>
                            </div>
                            <div className="ps-arrow"><ArrowRight size={20} /></div>
                            <div className="ps-item solution">
                                <CheckCircle size={20} />
                                <span>小程序验收，自动生成报告</span>
                            </div>
                        </div>

                        <div className="feature-demo mobile-demo">
                            <div className="mobile-screen">
                                <div className="app-header">验收报告</div>
                                <div className="checklist">
                                    <div className="check-item checked">
                                        <CheckCircle size={16} /> 水电隐蔽工程
                                    </div>
                                    <div className="check-item checked">
                                        <CheckCircle size={16} /> 防水工程
                                    </div>
                                    <div className="check-item">
                                        <div className="circle"></div> 泥木工程
                                    </div>
                                </div>
                                <div className="report-preview">
                                    PDF 报告生成中...
                                </div>
                            </div>
                        </div>
                    </FeatureSection>

                    {/* Comparison Section */}
                    <div className="comparison-section">
                        <h3>为什么选择一起装？</h3>
                        <div className="comparison-cards">
                            <div className="comp-card traditional">
                                <h4>传统方式</h4>
                                <ul>
                                    <li>人工巡检效率低</li>
                                    <li>数据滞后无依据</li>
                                    <li>客户信任度低</li>
                                </ul>
                            </div>
                            <div className="comp-card smart">
                                <h4>一起装智能交付</h4>
                                <ul>
                                    <li>AI全天候自动监管</li>
                                    <li>数据实时驱动决策</li>
                                    <li>透明交付赢口碑</li>
                                </ul>
                            </div>
                        </div>
                        <p className="comp-summary">"我们交付的不是冰冷的监控硬件，而是一位助您省心管理工地、轻松触达客户、提高转化率的智能助手"</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;
