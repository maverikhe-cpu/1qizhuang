import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, HardHat, Home as HomeIcon, TrendingUp, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import './Solutions.css';

const Solutions = () => {
    const [activeRole, setActiveRole] = useState('boss');

    const roles = [
        { id: 'boss', label: '装企老板', icon: User },
        { id: 'manager', label: '项目经理', icon: HardHat },
        { id: 'owner', label: '装修业主', icon: HomeIcon },
    ];

    const roleData = {
        boss: {
            title: "运筹帷幄，决胜千里",
            pains: [
                "工地分散，管理半径受限",
                "人员冗余，运营成本高企",
                "口碑难以量化，获客成本高"
            ],
            solutions: [
                "数字化看板，全局掌控",
                "AI替代人工巡检，降本增效",
                "交付即营销，自动裂变"
            ],
            roi: "管理成本↓30% | 客户投诉↓50% | 签单转化率↑40%",
            scene: "boss-cockpit",
            timeline: [
                { time: "09:00", action: "查看日报", desc: "系统自动推送昨日工地概况与风险日报" },
                { time: "14:00", action: "决策审批", desc: "移动端快速审批增项与款项支付" },
                { time: "18:00", action: "经营分析", desc: "查看本月交付满意度与回款进度" }
            ]
        },
        manager: {
            title: "高效统筹，井井有条",
            pains: [
                "电话打爆，协调效率低",
                "工人难管，工期不可控",
                "验收扯皮，责任界定难"
            ],
            solutions: [
                "智能派工，自动调度",
                "实时监控，工期预警",
                "在线验收，留痕存证"
            ],
            roi: "人效提升50% | 延期率降低80% | 沟通成本降低60%",
            scene: "manager-site",
            timeline: [
                { time: "08:30", action: "早班点名", desc: "查看工人AI打卡情况，确认到岗" },
                { time: "11:00", action: "远程巡检", desc: "通过摄像头检查关键节点工艺" },
                { time: "16:00", action: "进度汇报", desc: "一键生成今日施工进度报告发给业主" }
            ]
        },
        owner: {
            title: "所见即所得，安心无忧",
            pains: [
                "没时间跑工地，心里没底",
                "不懂工艺，怕被忽悠",
                "增项无底洞，预算超支"
            ],
            solutions: [
                "手机看工地，随时随地",
                "AI节点播报，透明施工",
                "标准报价，拒绝恶意增项"
            ],
            roi: "节省跑工地时间90% | 满意度提升100% | 推荐意愿度↑",
            scene: "owner-home",
            timeline: [
                { time: "10:00", action: "收到推送", desc: "微信收到'水电验收合格'通知与照片" },
                { time: "13:00", action: "查看直播", desc: "午休时间打开手机看一眼现场直播" },
                { time: "20:00", action: "分享喜悦", desc: "将新家进度视频分享到朋友圈" }
            ]
        }
    };

    const currentData = roleData[activeRole];

    return (
        <div className="page-container solutions-page">
            <div className="container">
                <div className="solutions-header text-center">
                    <h1>分角色场景化解决方案</h1>
                    <p>为每一个核心角色，量身定制的智能助手</p>
                </div>

                {/* Role Switcher */}
                <div className="role-switcher">
                    {roles.map((role) => (
                        <button
                            key={role.id}
                            className={`role-tab ${activeRole === role.id ? 'active' : ''}`}
                            onClick={() => setActiveRole(role.id)}
                        >
                            <role.icon size={20} />
                            <span>{role.label}</span>
                            {activeRole === role.id && (
                                <motion.div className="active-line" layoutId="underline" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeRole}
                        className="role-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="role-main-grid">
                            {/* Left: Text Info */}
                            <div className="role-info">
                                <h2>{currentData.title}</h2>

                                <div className="info-block">
                                    <h3><AlertCircle size={18} className="text-accent" /> 核心痛点</h3>
                                    <ul>
                                        {currentData.pains.map((pain, i) => (
                                            <li key={i}>{pain}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="info-block">
                                    <h3><CheckCircle size={18} className="text-secondary" /> 解决方案</h3>
                                    <ul>
                                        {currentData.solutions.map((sol, i) => (
                                            <li key={i}>{sol}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="roi-box">
                                    <TrendingUp size={24} />
                                    <span className="roi-text">{currentData.roi}</span>
                                </div>
                            </div>

                            {/* Right: Scene Illustration */}
                            <div className="role-scene">
                                <div className={`scene-visual ${currentData.scene}`}>
                                    {/* Abstract representation of the scene */}
                                    <div className="scene-bg"></div>
                                    <div className="scene-elements">
                                        {activeRole === 'boss' && (
                                            <div className="dashboard-mockup">
                                                <div className="chart-line"></div>
                                                <div className="chart-bar"></div>
                                            </div>
                                        )}
                                        {activeRole === 'manager' && (
                                            <div className="site-map-mockup">
                                                <div className="pin p1"></div>
                                                <div className="pin p2"></div>
                                            </div>
                                        )}
                                        {activeRole === 'owner' && (
                                            <div className="phone-mockup">
                                                <div className="video-play"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Story */}
                        <div className="role-timeline">
                            <h3><Clock size={20} /> 智能工作流的一天</h3>
                            <div className="timeline-steps">
                                {currentData.timeline.map((step, index) => (
                                    <div key={index} className="timeline-step">
                                        <div className="step-time">{step.time}</div>
                                        <div className="step-dot"></div>
                                        <div className="step-content">
                                            <h4>{step.action}</h4>
                                            <p>{step.desc}</p>
                                        </div>
                                        {index < currentData.timeline.length - 1 && <div className="step-line"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Solutions;
