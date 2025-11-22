# Zeabur 根目录设置修复指南

## 问题描述
错误信息：`The specified Root Directory does not exist`
当前设置：`/server`
需要改为：`.` 或留空

## 解决方案（二选一）

### 方案一：修改根目录设置（推荐）

#### 步骤 1: 进入服务设置
1. 登录 Zeabur: https://zeabur.com
2. 选择您的项目
3. 点击您的服务（1qizhuang）
4. 点击右上角的 **Settings**（设置）图标

#### 步骤 2: 修改根目录
1. 在设置页面找到 **Root Directory** 字段
2. 当前值应该是：`/server`
3. 将其改为：`.`（一个点）
4. 或者完全清空该字段
5. 点击 **Save** 保存

#### 步骤 3: 重新部署
1. 返回服务主页
2. 点击 **Redeploy** 按钮
3. 等待构建完成（约 2-5 分钟）

### 方案二：删除并重新添加服务（更简单）

#### 步骤 1: 删除当前服务
1. 在 Zeabur 项目页面
2. 找到当前的服务
3. 点击服务右上角的 **⋮** (三个点)
4. 选择 **Delete Service**
5. 确认删除

#### 步骤 2: 重新添加服务
1. 点击 **Add Service**
2. 选择 **Git**
3. 选择您的仓库：`maverikhe-cpu/1qizhuang`
4. Zeabur 会自动检测项目类型
5. 点击 **Deploy**

#### 步骤 3: 等待部署
- Zeabur 会自动识别为 Vite 项目
- 自动使用正确的根目录（项目根目录）
- 等待构建完成

## 验证构建成功

构建成功后，您应该看到：

```
✓ Building...
✓ Installing dependencies...
✓ Running build command...
✓ Build completed successfully
✓ Deploying...
✓ Deployment successful
```

## 如果仍然失败

### 检查项目结构
确保您的 GitHub 仓库根目录包含：
- ✅ `package.json`
- ✅ `vite.config.js`
- ✅ `index.html`
- ✅ `src/` 目录

### 检查 zeabur.json
确保文件内容为：
```json
{
  "framework": "vite",
  "rootDirectory": ".",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

## 常见问题

### Q: 为什么会有 /server 这个设置？
A: 可能是 Zeabur 自动检测时出现了误判，或者之前有过其他配置。

### Q: 改完后还是失败怎么办？
A: 
1. 确认 GitHub 上的代码是最新的
2. 尝试方案二（删除重建）
3. 查看新的构建日志，看是否有其他错误

### Q: 如何确认根目录设置正确？
A: 在构建日志中，应该看到：
```
Cloning source code from git ...
✓ Successfully cloned
```
而不是错误信息。

## 快速检查清单

部署前确认：
- [ ] GitHub 代码已推送（最新提交：534a904）
- [ ] 本地 `npm run build` 成功
- [ ] Zeabur 根目录设置为 `.` 或留空
- [ ] 没有其他环境变量冲突

## 获取帮助

如果以上方法都不行：
1. 截图完整的构建日志
2. 检查 Zeabur 服务设置截图
3. 访问 Zeabur Discord 寻求帮助

---

**提示**: 方案二（删除重建）通常最快最有效！
