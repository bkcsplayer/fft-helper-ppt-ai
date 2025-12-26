# VibeSlide Deployment Guide

VibeSlide (formerly Banana Slides) is designed to be fully containerized using Docker, making it easy to deploy to any VPS (host).

## Prerequisites

1.  **VPS (Server)** with:
    *   Ubuntu 20.04/22.04 (Recommended) or any Docker-compatible OS.
    *   Minimum 2GB RAM (4GB Recommended for AI tasks).
2.  **Docker & Docker Compose** installed on the server.
    *   [Install Docker Engine](https://docs.docker.com/engine/install/ubuntu/)

## Deployment Steps

### 1. Upload Code to VPS
You can `git clone` your repository or upload the files directly via SFTP/SCP.
Ensure you upload the following files/directories:
*   `backend/`
*   `frontend/`
*   `docker-compose.yml`
*   `.env` (Make sure to configure this!)

> **Note**: Do NOT uploads `node_modules`, `.venv`, or `__pycache__` folders.

### 2. Configure Environment Variables
Create or edit the `.env` file in the project root. You can start from `.env.example`.

```bash
cp .env.example .env
nano .env
```

**Critical Configurations**:
*   `GOOGLE_API_KEY` (if using Gemini) or `OPENAI_API_KEY`.
*   `PORT=5000` (Backend internal port, keep as is).
*   `SECRET_KEY` (Change this for security).

### 3. Run with Docker Compose
Navigate to the project directory and run:

```bash
docker compose up -d --build
```

*   `--build`: Ensures required images are built from your source code.
*   `-d`: Runs in detached mode (background).

### 4. Verify Deployment
Check if containers are running:
```bash
docker compose ps
```

You should see two healthy services:
*   `banana-slides-frontend`: Mapped to port `7000`.
*   `banana-slides-backend`: Mapped to port `7001`.

### 5. Access the Application
Open your browser and visit:
`http://<YOUR_VPS_IP>:7000`

Login with:
*   Username: `admin`
*   Password: `admin`

## Troubleshooting

*   **Logs**: Check logs if something fails.
    ```bash
    docker compose logs -f
    ```
*   **Permissions**: Ensure `./uploads` and `./backend/instance` are writable. Docker usually handles this, but if you face issues:
    ```bash
    chmod -R 777 uploads backend/instance
    ```
*   **Firewall**: Ensure ports `7000` and `7001` are open on your VPS firewall (e.g., UFW or AWS Security Group).

## Updating the App
If you modify code, apply changes by running:
```bash
docker compose up -d --build
```
This rebuilds the specific containers with changes.

---

## Baota (BT Panel) & Domain Configuration 宝塔配置指南

If you are using Baota Panel and want to bind `ppthelper.khtain.com`:

### 1. Deploy Container First
Follow the steps above to start the Docker containers. Ensure they are running on port `7000`.

### 2. Add Website in Baota
1.  Go to **Website** -> **Add Site**.
2.  Domain: `ppthelper.khtain.com`
3.  PHP Version: `Pure Static` (or any version).
4.  Submit.

### 3. Configure Reverse Proxy (反向代理)
1.  Click the site name `ppthelper.khtain.com` to open settings.
2.  Go to **Reverse Proxy** (反向代理) -> **Add Reverse Proxy**.
3.  **Proxy Name**: `vibe_app`
4.  **Target URL**: `http://127.0.0.1:7000`
    *   *Note: This points to your Docker container.*
5.  **Sent Domain**: `$host`
6.  Submit.

### 4. Configure SSL (HTTPS)
1.  Go to **SSL** -> **Let's Encrypt**.
2.  Select your domain and Apply.
3.  Enable **Force HTTPS**.

### 5. Final Check
*   Frontend: `https://ppthelper.khtain.com` works.
*   API: `https://ppthelper.khtain.com/api` should proxy correctly to backend.

### 6. Strict Security (Optional)
Edit your `.env` file on VPS:
```env
CORS_ORIGINS=https://ppthelper.khtain.com
```
Then restart backend: `docker compose restart backend`
