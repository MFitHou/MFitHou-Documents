# Yêu cầu hệ thống

Tài liệu này mô tả các yêu cầu phần cứng và phần mềm để chạy hệ thống MFitHou.

## Hardware Requirements

### Minimum Requirements

| Component | Specification |
|-----------|---------------|
| **CPU** | Dual-core 2.0 GHz |
| **RAM** | 4 GB |
| **Storage** | 5 GB free space |
| **Network** | Broadband internet connection |

### Recommended Requirements

| Component | Specification |
|-----------|---------------|
| **CPU** | Quad-core 2.5 GHz+ |
| **RAM** | 8 GB+ |
| **Storage** | 10 GB+ SSD |
| **Network** | High-speed internet (10+ Mbps) |

### Production Requirements

| Component | Specification |
|-----------|---------------|
| **CPU** | 8+ cores 3.0 GHz+ |
| **RAM** | 16 GB+ |
| **Storage** | 50 GB+ SSD (for Fuseki data) |
| **Network** | 100+ Mbps, static IP |

## Software Requirements

### Operating System

=== "Windows"
    - ✅ Windows 10 (64-bit)
    - ✅ Windows 11 (64-bit)
    - ✅ Windows Server 2019/2022

=== "macOS"
    - ✅ macOS 11 (Big Sur)
    - ✅ macOS 12 (Monterey)
    - ✅ macOS 13 (Ventura)
    - ✅ macOS 14 (Sonoma)

=== "Linux"
    - ✅ Ubuntu 20.04 LTS / 22.04 LTS
    - ✅ Debian 11 / 12
    - ✅ CentOS 8 / Rocky Linux 8
    - ✅ Fedora 36+

### Required Software

#### 1. Node.js

**Version:** 18.0.0 hoặc cao hơn

=== "Windows"
    ```powershell
    # Download từ nodejs.org
    https://nodejs.org/en/download/
    
    # Kiểm tra version
    node --version  # v18.0.0+
    npm --version   # 8.0.0+
    ```

=== "macOS"
    ```bash
    # Dùng Homebrew
    brew install node@18
    
    # Hoặc download từ nodejs.org
    https://nodejs.org/en/download/
    ```

=== "Linux"
    ```bash
    # Ubuntu/Debian
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
    # Kiểm tra
    node --version
    npm --version
    ```

#### 2. Python

**Version:** 3.9.0 hoặc cao hơn

=== "Windows"
    ```powershell
    # Download từ python.org
    https://www.python.org/downloads/
    
    # Kiểm tra version
    python --version  # 3.9.0+
    pip --version
    ```

=== "macOS"
    ```bash
    # Dùng Homebrew
    brew install python@3.9
    
    # Kiểm tra
    python3 --version
    pip3 --version
    ```

=== "Linux"
    ```bash
    # Ubuntu/Debian
    sudo apt update
    sudo apt install python3.9 python3.9-venv python3-pip
    
    # Kiểm tra
    python3 --version
    pip3 --version
    ```

#### 3. Git

**Version:** 2.30.0 hoặc cao hơn

=== "Windows"
    ```powershell
    # Download Git for Windows
    https://git-scm.com/download/win
    
    # Kiểm tra
    git --version
    ```

=== "macOS"
    ```bash
    # Dùng Homebrew
    brew install git
    
    # Hoặc Xcode Command Line Tools
    xcode-select --install
    ```

=== "Linux"
    ```bash
    # Ubuntu/Debian
    sudo apt install git
    
    # CentOS/Rocky
    sudo yum install git
    ```

#### 4. Java (for Fuseki)

**Version:** Java 11 hoặc cao hơn

=== "Windows"
    ```powershell
    # Download OpenJDK
    https://adoptium.net/
    
    # Kiểm tra
    java -version  # 11.0.0+
    ```

=== "macOS"
    ```bash
    # Dùng Homebrew
    brew install openjdk@11
    
    # Kiểm tra
    java -version
    ```

=== "Linux"
    ```bash
    # Ubuntu/Debian
    sudo apt install openjdk-11-jdk
    
    # CentOS/Rocky
    sudo yum install java-11-openjdk
    ```

#### 5. InfluxDB (for IoT Time-Series Data)

**Version:** 2.x hoặc cao hơn

=== "Windows"
    ```powershell
    # Download InfluxDB từ trang chính thức
    https://portal.influxdata.com/downloads/
    
    # Hoặc dùng Chocolatey
    choco install influxdb2
    
    # Kiểm tra
    influx version  # 2.0.0+
    
    # Chạy InfluxDB
    influxd
    ```

=== "macOS"
    ```bash
    # Dùng Homebrew
    brew install influxdb
    
    # Kiểm tra
    influx version
    
    # Chạy dưới dạng service
    brew services start influxdb
    
    # Hoặc chạy trực tiếp
    influxd
    ```

=== "Linux"
    ```bash
    # Ubuntu/Debian
    wget -q https://repos.influxdata.com/influxdata-archive_compat.key
    echo '393e8779c89ac8d958f81f942f9ad7fb82a25e133faddaf92e15b16e6ac9ce4c influxdata-archive_compat.key' | sha256sum -c && cat influxdata-archive_compat.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg > /dev/null
    echo 'deb [signed-by=/etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg] https://repos.influxdata.com/debian stable main' | sudo tee /etc/apt/sources.list.d/influxdata.list
    
    sudo apt-get update && sudo apt-get install influxdb2
    
    # Khởi động service
    sudo systemctl start influxdb
    sudo systemctl enable influxdb
    
    # Kiểm tra status
    sudo systemctl status influxdb
    ```

**Cấu hình InfluxDB:**

```bash
# Setup InfluxDB qua CLI
influx setup

# Hoặc truy cập Web UI
http://localhost:8086

# Thông tin cần cấu hình:
# - Username: admin (hoặc tùy chọn)
# - Password: (chọn mật khẩu mạnh)
# - Organization: MFitHou
# - Bucket: iot-data
# - Retention: 30 days (hoặc tùy nhu cầu)
```

**Tạo Token:**

```bash
# Tạo token với quyền đọc/ghi
influx auth create \
  --org MFitHou \
  --read-buckets \
  --write-buckets \
  --description "IoT Data Token"

# Lưu token vào .env file
```

## Browser Requirements

### Supported Browsers (Frontend)

| Browser | Minimum Version |
|---------|-----------------|
| **Google Chrome** | 90+ |
| **Mozilla Firefox** | 88+ |
| **Microsoft Edge** | 90+ |
| **Safari** | 14+ |
| **Opera** | 76+ |

### Browser Features Required

- ✅ JavaScript ES6+
- ✅ WebGL (for map rendering)
- ✅ LocalStorage
- ✅ Fetch API
- ✅ CSS Grid & Flexbox

## Network Requirements

### Ports

| Service | Default Port | Protocol | Description |
|---------|--------------|----------|-------------|
| **Fuseki** | 3030 | HTTP | SPARQL endpoint |
| **InfluxDB** | 8086 | HTTP | Time-series database |
| **Backend** | 3000 | HTTP | REST API |
| **Frontend** | 5173 | HTTP | Dev server (Vite) |
| **Frontend (Prod)** | 80/443 | HTTP/HTTPS | Production |

### Firewall Rules

Mở các ports sau nếu chạy production:

```powershell
# Windows Firewall
netsh advfirewall firewall add rule name="Fuseki" dir=in action=allow protocol=TCP localport=3030
netsh advfirewall firewall add rule name="InfluxDB" dir=in action=allow protocol=TCP localport=8086
netsh advfirewall firewall add rule name="Backend" dir=in action=allow protocol=TCP localport=3000
netsh advfirewall firewall add rule name="Frontend" dir=in action=allow protocol=TCP localport=80
```

### External Services

Các dịch vụ bên ngoài cần truy cập:

| Service | URL | Purpose |
|---------|-----|---------|
| **OpenStreetMap** | `https://overpass-api.de` | Data collection |
| **Wikidata** | `https://www.wikidata.org` | Location search |
| **Google Gemini** | `https://generativelanguage.googleapis.com/...` | AI chatbot |
| **NPM Registry** | `https://registry.npmjs.org` | Package installation |
| **PyPI** | `https://pypi.org` | Python packages |

## Development Tools (Optional)

### Recommended IDEs

- **Visual Studio Code** - Recommended for all components
- **PyCharm** - For Data Pipeline (Python)
- **WebStorm** - For Backend/Frontend (TypeScript)
- **Jupyter Lab** - Alternative to Jupyter Notebook

### VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-python.python",
    "ms-python.vscode-pylance",
    "ms-toolsai.jupyter",
    "bradlc.vscode-tailwindcss"
  ]
}
```

## Environment Variables

### Backend (.env)

```bash
# Fuseki Configuration
FUSEKI_SERVER_URL=http://localhost:3030
FUSEKI_DATASET=mfithou

# InfluxDB Configuration
INFLUXDB_URL=http://localhost:8086
INFLUXDB_TOKEN=your_influxdb_token_here
INFLUXDB_ORG=MFitHou
INFLUXDB_BUCKET=iot-data

# Server Configuration
PORT=3000
NODE_ENV=development
```

### Frontend (.env)

```bash
VITE_BACKEND_URL=http://localhost:3000
VITE_GEMINI_API_KEY=your_api_key_here
VITE_MAP_CENTER_LAT=21.0285
VITE_MAP_CENTER_LONG=105.8542
```

### Data Pipeline (.env)

```bash
# InfluxDB Configuration for Python
INFLUXDB_URL=http://localhost:8086
INFLUXDB_TOKEN=your_influxdb_token_here
INFLUXDB_ORG=MFitHou
INFLUXDB_BUCKET=iot-data

# Fuseki Configuration
FUSEKI_SERVER_URL=http://localhost:3030
FUSEKI_DATASET=mfithou
```

---

