<div align="center">

<img width="256" src="https://github.com/user-attachments/assets/6f9e4cf9-912d-4faa-9d37-54fb676f547e">

*Vibe your PPT like vibing code.*

**中文 | [English](README_EN.md)**

# VibeSlide · 蕉幻

<p>
  <a href="https://github.com/Anionex/banana-slides/stargazers">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/Anionex/banana-slides?style=square">
  </a>
  <a href="https://github.com/Anionex/banana-slides/network">
    <img alt="GitHub Forks" src="https://img.shields.io/github/forks/Anionex/banana-slides?style=square">
  </a>
  <a href="https://github.com/Anionex/banana-slides/watchers">
    <img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/Anionex/banana-slides?style=square">
  </a>
  <a href="https://github.com/Anionex/banana-slides">
    <img alt="Version" src="https://img.shields.io/badge/version-v0.2.0-banana.svg">
  </a>
  <img alt="Docker" src="https://img.shields.io/badge/Docker-Build-2496ED?logo=docker&logoColor=white">
</p> 

<b>一个基于nano banana pro🍌的原生AI PPT生成应用，采用全新 Glassmorphism 视觉风格。<br></b>
<b> 支持想法/大纲/页面描述生成完整PPT演示文稿，自动提取附件图表、上传任意素材、口头提出修改，迈向真正的"Vibe PPT" </b>

<b>🎯 降低PPT制作门槛，让每个人都能快速创作出美观专业的演示文稿</b>

<br>

</div>

## ✨ 全新 Vibe 体验

VibeSlide 不仅仅是改名，我们带来了全新的 **Vibe Visual** 视觉体验：

- **🌫️ Glassmorphism UI**: 全局磨砂玻璃质感，轻盈通透。
- **🔐 安全认证**: 内置管理员身份认证系统。
- **🌊 动态光效**: 沉浸式流光背景，激发创作灵感。

## 👨‍💻 适用场景

1. **小白**：零门槛快速生成美观PPT，无需设计经验，减少模板选择烦恼
2. **PPT专业人士**：参考AI生成的布局和图文元素组合，快速获取设计灵感
3. **教育工作者**：将教学内容快速转换为配图教案PPT，提升课堂效果
4. **学生**：快速完成作业Pre，把精力专注于内容而非排版美化
5. **职场人士**：商业提案、产品介绍快速可视化，多场景快速适配

## 🎯 功能介绍

### 1. 灵活多样的创作路径
支持**想法**、**大纲**、**页面描述**三种起步方式，满足不同创作习惯。
- **一句话生成**：输入一个主题，AI 自动生成结构清晰的大纲和逐页内容描述。
- **自然语言编辑**：支持以 Vibe 形式口头修改大纲或描述（如"把第三页改成案例分析"），AI 实时响应调整。
- **大纲/描述模式**：既可一键批量生成，也可手动调整细节。

### 2. 强大的素材解析能力
- **多格式支持**：上传 PDF/Docx/MD/Txt 等文件，后台自动解析内容。
- **智能提取**：自动识别文本中的关键点、图片链接和图表信息，为生成提供丰富素材。
- **风格参考**：支持上传参考图片或模板，定制 PPT 风格。

### 3. "Vibe" 式自然语言修改
不再受限于复杂的菜单按钮，直接通过**自然语言**下达修改指令。
- **局部重绘**：对不满意的区域进行口头式修改（如"把这个图换成饼图"）。
- **整页优化**：基于 nano banana pro🍌 生成高清、风格统一的页面。

### 4. 开箱即用的格式导出
- **多格式支持**：一键导出标准 **PPTX** 或 **PDF** 文件。
- **完美适配**：默认 16:9 比例，排版无需二次调整，直接演示。

## 📦 使用方法 (Docker)

### 1. 配置环境变量

创建 `.env` 文件（参考 `.env.example`）：
```bash
cp .env.example .env
```

配置必要的环境变量（推荐使用 [AIHubMix](https://aihubmix.com/?aff=17EC)）：
```env
AI_PROVIDER_FORMAT=gemini
GOOGLE_API_KEY=your-api-key-here
SECRET_KEY=change-this-secret
```

### 2. 启动服务

```bash
docker compose up -d
```

### 3. 访问应用

- **URL**: `http://localhost:7000`
- **默认账号**: `admin`
- **默认密码**: `admin`

## 🛠️ 技术架构

### 前端技术栈
- **框架**：React 18 + TypeScript (Glassmorphism Refactor)
- **构建工具**：Vite 5
- **状态管理**：Zustand
- **路由**：React Router v6 (Protected Routes)
- **UI组件**：Tailwind CSS + Lucide React
- **拖拽功能**：@dnd-kit
- **UI风格**：Glassmorphism / Vibe UI

### 后端技术栈
- **语言**：Python 3.10+
- **框架**：Flask 3.0
- **包管理**：uv
- **数据库**：SQLite + Flask-SQLAlchemy
- **AI能力**：Google Gemini API
- **PPT处理**：python-pptx

## 📁 项目结构

```
banana-slides/
├── frontend/                    # React前端应用 (Vibe UI)
│   ├── src/
│   │   ├── pages/              # 页面组件
│   │   │   ├── Home.tsx        # 首页（Vibe Dashboard）
│   │   │   ├── Login.tsx       # 登录页 (New)
│   │   ├── components/         
│   │   │   ├── ProtectedRoute.tsx # 路由保护 (New)
│   │   │   └── ...
│   ├── index.css               # Global Glass Styles
│   ├── tailwind.config.js      # Vibe Color Palette
│   └── ...
│
├── backend/                    # Flask后端应用
│   ├── app.py                  # Flask应用入口
│   ├── Dockerfile
│   └── ...
│
├── docker-compose.yml          # Docker Compose配置
├── DEPLOYMENT.md               # 部署指南
└── README.md                   # 本文件
```
