# 表单提交配置说明

## 当前配置

本项目使用 **FormSubmit.co** 服务来处理表单提交并发送邮件。这是一个完全免费的服务，无需注册或API密钥。

## 如何工作

当用户提交演示预约表单时：
1. 表单数据被发送到 FormSubmit.co
2. FormSubmit 自动将数据格式化为邮件
3. 邮件发送到：`mingjie.he@timontech.cn`

## 首次使用激活

⚠️ **重要**：第一次使用时需要激活邮箱

1. 提交一次测试表单
2. FormSubmit 会发送一封激活邮件到 `mingjie.he@timontech.cn`
3. 点击邮件中的激活链接
4. 激活后，所有后续提交都会正常工作

## 邮件格式

您将收到如下格式的邮件：

```
主题：【一起装】新的演示预约 - [客户姓名]

内容（表格格式）：
┌──────────┬────────────────┐
│ name     │ 张三           │
│ position │ 总经理         │
│ company  │ XX装饰公司     │
│ phone    │ 13800138000    │
│ companySize │ 50-100人    │
│ painPoints  │ 工地管理难   │
│ submit_time │ 2025/11/21... │
└──────────┴────────────────┘
```

## 功能特性

✅ **无需配置** - 开箱即用
✅ **免费使用** - 无限制提交
✅ **自动格式化** - 表格形式展示数据
✅ **防垃圾邮件** - 可选验证码保护
✅ **自定义主题** - 自动包含客户姓名

## 表单验证

表单包含以下验证：
- 姓名、职位、公司名称、手机号为必填项
- 手机号格式验证（中国大陆11位手机号）
- 提交时显示加载状态
- 成功/失败提示消息

## 更改接收邮箱

如需更改接收邮箱，请修改 `src/pages/Demo.jsx` 文件中的以下行：

```javascript
const response = await fetch('https://formsubmit.co/mingjie.he@timontech.cn', {
```

将 `mingjie.he@timontech.cn` 替换为您的邮箱地址。

## 高级配置

FormSubmit 支持更多配置选项：

### 1. 添加抄送
```javascript
formDataToSend.append('_cc', 'other@email.com');
```

### 2. 自定义成功页面
```javascript
formDataToSend.append('_next', 'https://yoursite.com/thank-you');
```

### 3. 启用验证码
```javascript
formDataToSend.append('_captcha', 'true'); // 改为 true
```

### 4. 自定义回复邮箱
```javascript
formDataToSend.append('_replyto', formData.phone);
```

## 故障排查

### 问题1：未收到激活邮件
- 检查垃圾邮件文件夹
- 确认邮箱地址正确
- 等待几分钟后重试

### 问题2：提交后没有反应
- 打开浏览器开发者工具（F12）
- 查看 Console 标签页的错误信息
- 检查网络连接

### 问题3：收到邮件但数据不完整
- 确认表单字段的 name 属性正确
- 检查 formDataToSend.append() 调用

## 备选方案

如果 FormSubmit 不满足需求，可以考虑：

1. **EmailJS** - 需要注册，每月200封免费额度
2. **Formspree** - 需要注册，每月50次提交免费
3. **自建后端** - 使用 Node.js + Nodemailer
4. **Google Forms** - 嵌入 Google 表单
5. **Netlify Forms** - 如果部署在 Netlify

## 安全性

- ✅ FormSubmit 使用 HTTPS 加密传输
- ✅ 不存储敏感数据
- ✅ 支持验证码防止垃圾邮件
- ⚠️ 邮箱地址暴露在前端代码中（可接受，因为只用于接收）

## 测试建议

1. 填写测试数据提交表单
2. 检查邮箱（包括垃圾邮件）
3. 点击激活链接（仅首次）
4. 再次提交测试，确认收到邮件
5. 验证邮件内容完整性

## 生产环境注意事项

- 确保已激活邮箱
- 测试所有表单字段
- 检查邮件格式
- 设置邮件过滤规则（避免进入垃圾邮件）
- 考虑添加验证码（防止滥用）
