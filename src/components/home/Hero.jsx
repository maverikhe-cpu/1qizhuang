import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, MapPin, Activity } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [activeDistrict, setActiveDistrict] = useState(null);

    // 北京市主要区域的工地数据
    const beijingDistricts = [
        { id: 1, name: '朝阳区', sites: 156, x: 65, y: 45, color: '#4A90E2' },
        { id: 2, name: '海淀区', sites: 142, x: 35, y: 40, color: '#FF7A00' },
        { id: 3, name: '丰台区', sites: 98, x: 45, y: 65, color: '#00E676' },
        { id: 4, name: '石景山', sites: 67, x: 25, y: 55, color: '#FFD700' },
        { id: 5, name: '通州区', sites: 124, x: 75, y: 55, color: '#9C27B0' },
        { id: 6, name: '昌平区', sites: 89, x: 40, y: 25, color: '#FF5722' },
    ];

    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="data-grid"></div>
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-badge"
                    >
                        <span className="badge-dot"></span> 智能交付系统 2.0 全新发布
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="hero-title"
                    >
                        告别装修管理的<br />
                        <span className="highlight">"看不见、管不了"</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        用AI智能交付，撬动5万亿家装新市场。
                        <br />让每一个工地都成为您的金字招牌。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-actions"
                    >
                        <button className="btn btn-primary hero-btn">
                            申请免费试用 <ArrowRight size={18} style={{ marginLeft: 8 }} />
                        </button>
                        <button className="btn btn-outline hero-btn-secondary">
                            <Play size={18} style={{ marginRight: 8 }} /> 观看3分钟介绍
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="hero-trust"
                    >
                        <span>500+ 装企信赖之选</span>
                        <div className="trust-avatars">
                            {[1, 2, 3, 4].map(i => <div key={i} className="trust-avatar"></div>)}
                        </div>
                    </motion.div>
                </div>

                <div className="hero-visual">
                    {/* 3D Beijing Map Container */}
                    <div className="map-container glass-panel">
                        {/* Map Title */}
                        <div className="map-header">
                            <MapPin size={16} />
                            <span>北京市 · 实时工地监控</span>
                            <div className="live-indicator">
                                <Activity size={12} />
                                <span>LIVE</span>
                            </div>
                        </div>

                        {/* 3D Map Base */}
                        <div className="map-3d-base">
                            {/* Beijing City Outline (Simplified) */}
                            <svg className="city-outline" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(74, 144, 226, 0.3)" />
                                        <stop offset="100%" stopColor="rgba(74, 144, 226, 0.05)" />
                                    </linearGradient>
                                </defs>
                                {/* Simplified Beijing shape */}
                                <path
                                    d="M 100 20 L 160 40 L 180 80 L 170 130 L 140 160 L 100 170 L 60 160 L 30 130 L 20 80 L 40 40 Z"
                                    fill="url(#mapGradient)"
                                    stroke="rgba(74, 144, 226, 0.4)"
                                    strokeWidth="2"
                                />
                                {/* Inner rings */}
                                <ellipse cx="100" cy="100" rx="50" ry="45" fill="none" stroke="rgba(74, 144, 226, 0.2)" strokeWidth="1" strokeDasharray="4,4" />
                                <ellipse cx="100" cy="100" rx="30" ry="28" fill="none" stroke="rgba(74, 144, 226, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
                            </svg>

                            {/* District Markers */}
                            {beijingDistricts.map((district, index) => (
                                <motion.div
                                    key={district.id}
                                    className="district-marker"
                                    style={{
                                        left: `${district.x}% `,
                                        top: `${district.y}% `,
                                    }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                    onMouseEnter={() => setActiveDistrict(district.id)}
                                    onMouseLeave={() => setActiveDistrict(null)}
                                >
                                    <motion.div
                                        className="marker-pulse"
                                        style={{ backgroundColor: district.color }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.6, 0, 0.6],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.3,
                                        }}
                                    />
                                    <div
                                        className="marker-dot"
                                        style={{
                                            backgroundColor: district.color,
                                            boxShadow: `0 0 20px ${district.color} `
                                        }}
                                    />

                                    {/* District Info Tooltip */}
                                    <motion.div
                                        className="district-tooltip"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: activeDistrict === district.id ? 1 : 0,
                                            y: activeDistrict === district.id ? 0 : 10,
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="tooltip-header">{district.name}</div>
                                        <div className="tooltip-stats">
                                            <span className="stat-number">{district.sites}</span>
                                            <span className="stat-label">在建工地</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}

                            {/* Data Flow Lines */}
                            <svg className="data-flow-lines" viewBox="0 0 200 200">
                                {beijingDistricts.map((district, i) => (
                                    <motion.line
                                        key={`line - ${district.id} `}
                                        x1="100"
                                        y1="100"
                                        x2={district.x * 2}
                                        y2={district.y * 2}
                                        stroke={district.color}
                                        strokeWidth="1"
                                        strokeOpacity="0.3"
                                        strokeDasharray="4,4"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                                    />
                                ))}
                            </svg>
                        </div>

                        {/* Stats Card */}
                        <div className="hero-card glass-card">
                            <div className="card-header">
                                <div className="status-dot"></div>
                                <span>实时监控中心</span>
                            </div>
                            <div className="card-stats">
                                <div className="stat-item">
                                    <span className="stat-label">在线工地</span>
                                    <span className="stat-value">
                                        {beijingDistricts.reduce((sum, d) => sum + d.sites, 0)}
                                    </span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">今日预警</span>
                                    <span className="stat-value warning">12</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
