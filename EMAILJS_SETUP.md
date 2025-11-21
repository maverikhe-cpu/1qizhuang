# 表单邮件发送配置指南

本项目使用 EmailJS 服务来发送表单数据到指定邮箱。

## 设置步骤

### 1. 注册 EmailJS 账号
访问 [EmailJS官网](https://www.emailjs.com/) 并注册一个免费账号。

### 2. 创建邮件服务
1. 登录后，进入 **Email Services** 页面
2. 点击 **Add New Service**
3. 选择您的邮件服务提供商（推荐使用 Gmail 或 Outlook）
4. 按照提示连接您的邮箱账号
5. 记录下生成的 **Service ID**（例如：`service_yiqizhuang`）

### 3. 创建邮件模板
1. 进入 **Email Templates** 页面
2. 点击 **Create New Template**
3. 使用以下模板内容：

```
主题：【一起装】新的演示预约 - {{from_name}}

内容：
您收到一个新的演示预约申请：

姓名：{{from_name}}
职位：{{position}}
公司：{{company}}
手机号：{{phone}}
公司规模：{{company_size}}
当前痛点：{{pain_points}}
提交时间：{{submit_time}}

请在24小时内联系客户。
```

4. 在 **Settings** 中设置：
   - **To Email**: mingjie.he@timontech.cn
   - **From Name**: 一起装官网
   - **Reply To**: {{phone}}

5. 保存模板并记录 **Template ID**（例如：`template_demo_form`）

### 4. 获取 Public Key
1. 进入 **Account** > **General**
2. 找到 **Public Key** 并复制

### 5. 更新代码配置
打开 `src/pages/Demo.jsx` 文件，找到以下代码并替换为您的实际值：

```javascript
const serviceId = 'service_yiqizhuang'; // 替换为您的 Service ID
const templateId = 'template_demo_form'; // 替换为您的 Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // 替换为您的 Public Key
```

## 测试表单

1. 启动开发服务器：`npm run dev`
2. 访问演示预约页面：`http://localhost:5173/demo`
3. 填写表单并提交
4. 检查 `mingjie.he@timontech.cn` 邮箱是否收到邮件

## 免费额度

EmailJS 免费计划提供：
- 每月 200 封邮件
- 无需信用卡
- 适合小型项目使用

如需更多额度，可升级到付费计划。

## 故障排查

### 问题1：提交失败
- 检查 Service ID、Template ID 和 Public Key 是否正确
- 确认 EmailJS 服务状态正常
- 查看浏览器控制台的错误信息

### 问题2：未收到邮件
- 检查垃圾邮件文件夹
- 确认模板中的 To Email 设置正确
- 验证邮件服务连接状态

### 问题3：邮件内容缺失
- 确保模板变量名与代码中的 emailData 字段名一致
- 检查表单字段的 name 属性是否正确

## 备选方案

如果不想使用 EmailJS，您也可以：

1. **使用后端API**：创建一个后端服务来处理表单提交
2. **使用Formspree**：另一个表单处理服务
3. **使用Google Forms**：嵌入 Google 表单
4. **使用Netlify Forms**：如果部署在 Netlify 上

## 安全提示

- ⚠️ 不要将 Private Key 暴露在前端代码中
- ✅ 只使用 Public Key
- ✅ 在 EmailJS 控制台中设置域名白名单
- ✅ 启用验证码（可选）以防止垃圾邮件
