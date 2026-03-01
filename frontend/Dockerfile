# 镜像源配置参数（可通过 build args 覆盖）
ARG DOCKER_REGISTRY=
ARG NPM_REGISTRY=

# 构建阶段
# 如果指定了 DOCKER_REGISTRY，使用镜像源；否则使用官方源
FROM ${DOCKER_REGISTRY:-}node:18-alpine AS builder

# 重新声明ARG（FROM之后ARG作用域失效，需要重新声明）
ARG NPM_REGISTRY=

WORKDIR /app

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

# 复制 package.json
COPY frontend/package.json ./

# 安装依赖（配置镜像源 + 强制 IPv4 解决 Docker IPv6 不通问题）
COPY frontend/package-lock.json* ./
ENV NODE_OPTIONS="--dns-result-order=ipv4first"
RUN NPM_REG="${NPM_REGISTRY:-https://registry.npmmirror.com}"; \
    npm config set registry "$NPM_REG" && \
    echo "Using npm registry: $NPM_REG" && \
    npm install --include=dev

# 复制前端源代码
COPY frontend/ ./

# 构建应用
RUN npx vite build

# 生产阶段
# 如果指定了 DOCKER_REGISTRY，使用镜像源；否则使用官方源
FROM ${DOCKER_REGISTRY:-}nginx:alpine

# 复制构建产物到 nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 nginx 配置文件
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]

