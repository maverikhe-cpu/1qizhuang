import React from 'react';
import { Users, Truck, Wrench, Cpu, TrendingUp, Globe, Shield, Zap } from 'lucide-react';
import './Partners.css';

const Partners = () => {
    const partnerTypes = [
        {
            icon: <Users />,
            title: "城市合伙人",
            desc: "成为一起装SaaS的区域代理商。引领当地装企数字化转型，共享万亿市场红利。",
            tags: ["销售代理", "区域运营", "高额返佣"]
        },
        {
            icon: <Truck />,
            title: "供应链伙伴",
            desc: "将您的建材与家居产品直连数千家装企。打通数字化销售渠道，实现精准供需匹配。",
            tags: ["建材厂商", "家居品牌", "直采对接"]
        },
        {
            icon: <Wrench />,
            title: "服务提供商",
            desc: "施工队、设计师、监理机构入驻平台，接收标准化派单，实现项目交付全流程数字化。",
            tags: ["施工班组", "设计工作室", "第三方监理"]
        },
        {
            icon: <Cpu />,
            title: "技术生态伙伴",
            desc: "将您的AI、IoT设备或金融解决方案接入我们的开放API生态，为行业提供全方位服务。",
            tags: ["AI解决方案", "IoT设备", "装修金融"]
        }
    ];

    const values = [
        {
            icon: <TrendingUp />,
            title: "流量增长",
            desc: "背靠支付宝亿级流量入口，为合作伙伴导入精准装修需求，解决获客难题。"
        },
        {
            icon: <Globe />,
            title: "全国网络",
            desc: "加入覆盖全国的数字化服务网络，打破地域限制，拓展业务边界。"
        },
        {
            icon: <Shield />,
            title: "信任背书",
            desc: "获得“一起装”与支付宝双重品牌背书，建立客户信任，提升成交转化率。"
        },
        {
            icon: <Zap />,
            title: "效能提升",
            desc: "无缝融入智能交付工作流，减少中间环节摩擦，大幅提升运营与协作效率。"
        }
    ];

    const steps = [
        { num: "01", title: "在线申请", desc: "提交您的合作意向与资质信息。" },
        { num: "02", title: "资质审核", desc: "我们的生态团队将评估您的资源匹配度。" },
        { num: "03", title: "签约合作", desc: "签署正式合作协议，明确权益与义务。" },
        { num: "04", title: "赋能培训", desc: "接受产品、销售与系统操作的全方位培训。" },
        { num: "05", title: "正式启动", desc: "开启数字化生态合作之旅，共创价值。" }
    ];

    return (
        <div className="partners-page">
            <div className="container">
                <header className="partners-header">
                    <h1>共建泛家装数字化生态</h1>
                    <p>携手支付宝与行业领袖，打造“可信、智能、闭环”的家装新生态。加入我们，重塑行业未来。</p>
                </header>

                <section className="partner-types-section">
                    <div className="types-grid">
                        {partnerTypes.map((type, index) => (
                            <div className="type-card" key={index}>
                                <div className="type-icon">{type.icon}</div>
                                <h3>{type.title}</h3>
                                <p>{type.desc}</p>
                                <div className="type-tags">
                                    {type.tags.map((tag, i) => (
                                        <span className="type-tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="ecosystem-value-section">
                    <div className="value-grid">
                        <div className="value-content">
                            <h2>为什么加入生态圈？</h2>
                            <div className="value-list">
                                {values.map((val, index) => (
                                    <div className="value-item" key={index}>
                                        <div className="value-icon">{val.icon}</div>
                                        <div className="value-text">
                                            <h4>{val.title}</h4>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="value-visual">
                            <div className="ecosystem-circle c1">一起装</div>
                            <div className="ecosystem-circle c2">
                                <div className="orbit-item" style={{ top: '0%', left: '50%' }}>材料商</div>
                                <div className="orbit-item" style={{ top: '100%', left: '50%' }}>设计师</div>
                                <div className="orbit-item" style={{ top: '50%', left: '0%' }}>施工队</div>
                                <div className="orbit-item" style={{ top: '50%', left: '100%' }}>代理商</div>
                            </div>
                            <div className="ecosystem-circle c3">
                                <div className="orbit-item" style={{ top: '15%', left: '15%' }}>银行</div>
                                <div className="orbit-item" style={{ top: '85%', left: '85%' }}>保险</div>
                                <div className="orbit-item" style={{ top: '15%', left: '85%' }}>物流</div>
                                <div className="orbit-item" style={{ top: '85%', left: '15%' }}>IoT设备</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="join-process-section">
                    <h2>合作流程</h2>
                    <div className="process-steps">
                        {steps.map((step, index) => (
                            <div className="process-step" key={index}>
                                <div className="step-num">{step.num}</div>
                                <div className="step-card">
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="partners-cta">
                    <h2>准备好一起成长了吗？</h2>
                    <p>立即加入一起装生态体系，开启您的数字化增长新篇章。</p>
                    <button className="cta-btn">申请成为合作伙伴</button>
                </section>
            </div>
        </div>
    );
};

export default Partners;
