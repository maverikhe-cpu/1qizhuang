import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, formType = 'general' }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        company: '',
        position: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const formTitles = {
        partner: '申请成为合作伙伴',
        alipay: '抢先接入支付宝生态',
        trial: '申请免费试用',
        general: '联系我们'
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const formDataToSend = new FormData();

            formDataToSend.append('form_type', formTitles[formType]);
            formDataToSend.append('name', formData.name);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('company', formData.company);
            formDataToSend.append('position', formData.position);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('message', formData.message);
            formDataToSend.append('submit_time', new Date().toLocaleString('zh-CN'));

            formDataToSend.append('_subject', `【一起装】${formTitles[formType]} - ${formData.name}`);
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
                setFormData({
                    name: '',
                    phone: '',
                    company: '',
                    position: '',
                    email: '',
                    message: ''
                });

                setTimeout(() => {
                    setSubmitStatus(null);
                    onClose();
                }, 2000);
            } else {
                throw new Error('提交失败');
            }

        } catch (error) {
            console.error('表单提交失败:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <h2>{formTitles[formType]}</h2>
                    <p>请填写以下信息，我们将在24小时内与您联系</p>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>
                                姓名 <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="请输入您的姓名"
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                手机号 <span className="required">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                pattern="^1[3-9]\d{9}$"
                                title="请输入有效的11位手机号"
                                placeholder="请输入手机号"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>
                                公司名称 <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                required
                                placeholder="请输入公司名称"
                            />
                        </div>

                        <div className="form-group">
                            <label>职位</label>
                            <input
                                type="text"
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                placeholder="请输入您的职位"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>邮箱</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="请输入邮箱地址"
                        />
                    </div>

                    <div className="form-group">
                        <label>留言</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="请告诉我们您的需求或问题..."
                        />
                    </div>

                    {submitStatus && (
                        <div className={`submit-message ${submitStatus}`}>
                            {submitStatus === 'success' ? (
                                <>
                                    <CheckCircle size={20} />
                                    <span>提交成功！我们会尽快与您联系。</span>
                                </>
                            ) : (
                                <>
                                    <AlertCircle size={20} />
                                    <span>提交失败，请稍后重试或直接联系我们。</span>
                                </>
                            )}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader className="spinner" size={20} />
                                <span>提交中...</span>
                            </>
                        ) : (
                            <span>提交申请</span>
                        )}
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default ContactModal;
