import React, { useState } from 'react';
import { CheckCircle, Shield, Loader } from 'lucide-react';
import './Demo.css';

const Demo = () => {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        company: '',
        phone: '',
        companySize: '20人以下',
        painPoints: []
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            painPoints: checked
                ? [...prev.painPoints, value]
                : prev.painPoints.filter(point => point !== value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // 使用 FormSubmit.co 服务发送邮件
            // 这是一个免费的表单提交服务，无需API密钥
            const formElement = e.target;
            const formDataToSend = new FormData(); // Create a new FormData object

            // Manually append all form data from state
            formDataToSend.append('name', formData.name);
            formDataToSend.append('position', formData.position);
            formDataToSend.append('company', formData.company);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('companySize', formData.companySize);
            formDataToSend.append('painPoints', formData.painPoints.join(', ') || '未选择');
            formDataToSend.append('submit_time', new Date().toLocaleString('zh-CN'));

            // 添加额外的隐藏字段 for FormSubmit
            formDataToSend.append('_subject', `【一起装】新的演示预约 - ${formData.name} `);
            formDataToSend.append('_template', 'table');
            formDataToSend.append('_captcha', 'false');

            const response = await fetch('https://formsubmit.co/mingjie.he@timontech.cn', {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus('success');
                // 重置表单
                setFormData({
                    name: '',
                    position: '',
                    company: '',
                    phone: '',
                    companySize: '20人以下',
                    painPoints: []
                });

                // 3秒后清除成功消息
                setTimeout(() => setSubmitStatus(null), 3000);
            } else {
                throw new Error('提交失败');
            }

        } catch (error) {
            console.error('表单提交失败:', error);
            setSubmitStatus('error');
            // 5秒后清除错误消息
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="page-container demo-page">
            <div className="container">
                <div className="demo-layout">

                    {/* Left: Form */}
                    <div className="demo-form-container">
                        <h2>预约免费演示</h2>
                        <p className="form-subtitle">填写下方表格，我们的顾问将在24小时内与您联系</p>

                        <form className="demo-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>姓名 <span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="请输入您的姓名"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>职位 <span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    placeholder="例如：总经理"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>公司名称 <span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder="请输入公司全称"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>手机号 <span className="required">*</span></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="用于接收演示账号"
                                    pattern="^1[3-9]\d{9}$"
                                    title="请输入有效的中国大陆手机号"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>公司规模</label>
                                <select
                                    name="companySize"
                                    value={formData.companySize}
                                    onChange={handleInputChange}
                                >
                                    <option>20人以下</option>
                                    <option>20-50人</option>
                                    <option>50-100人</option>
                                    <option>100人以上</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>当前痛点 (多选)</label>
                                <div className="checkbox-group">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="工地管理难"
                                            checked={formData.painPoints.includes('工地管理难')}
                                            onChange={handleCheckboxChange}
                                        /> 工地管理难
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="获客成本高"
                                            checked={formData.painPoints.includes('获客成本高')}
                                            onChange={handleCheckboxChange}
                                        /> 获客成本高
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="员工效率低"
                                            checked={formData.painPoints.includes('员工效率低')}
                                            onChange={handleCheckboxChange}
                                        /> 员工效率低
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="其他"
                                            checked={formData.painPoints.includes('其他')}
                                            onChange={handleCheckboxChange}
                                        /> 其他
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader size={18} className="spinner" /> 提交中...
                                    </>
                                ) : (
                                    '立即预约演示'
                                )}
                            </button>

                            {/* 提交状态提示 */}
                            {submitStatus === 'success' && (
                                <div className="submit-message success">
                                    <CheckCircle size={18} />
                                    提交成功！我们将在24小时内与您联系
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="submit-message error">
                                    ⚠️ 提交失败，请稍后重试或直接联系我们
                                </div>
                            )}
                        </form>

                        <div className="form-security">
                            <Shield size={14} /> 您的信息将严格保密，仅用于预约演示
                        </div>
                    </div>

                    {/* Right: Benefits */}
                    <div className="demo-benefits">
                        <div className="benefits-content">
                            <h3>预约演示后您将获得：</h3>
                            <ul className="benefits-list">
                                <li>
                                    <CheckCircle size={20} className="check-icon" />
                                    <div>
                                        <h4>专属解决方案</h4>
                                        <p>基于您公司的实际情况，定制数字化转型方案</p>
                                    </div>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="check-icon" />
                                    <div>
                                        <h4>30天免费试用</h4>
                                        <p>全功能无限制试用，亲身体验智能交付</p>
                                    </div>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="check-icon" />
                                    <div>
                                        <h4>行业数据报告</h4>
                                        <p>获赠《2024家装行业数字化白皮书》</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="trust-badge">
                                <div className="badge-logo">支付宝</div>
                                <span>认证服务商</span>
                            </div>

                            <div className="demo-testimonial">
                                <p>"预约演示非常值得，顾问不仅讲了系统，还帮我们梳理了管理流程。"</p>
                                <div className="dt-author">— 某装饰公司总经理</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Demo;
