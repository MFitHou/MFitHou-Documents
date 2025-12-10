# Hướng dẫn Cài đặt

Hướng dẫn đầy đủ để cài đặt và chạy hệ thống OpenDataMap trên máy của bạn.

## Yêu cầu hệ thống

### Phần cứng tối thiểu

- **CPU**: Dual-core 2.0 GHz
- **RAM**: 4 GB
- **Ổ cứng**: 5 GB trống

### Phần cứng khuyến nghị

- **CPU**: Quad-core 2.5 GHz+
- **RAM**: 8 GB+
- **Ổ cứng**: 10 GB+ SSD

## Cài đặt phần mềm cần thiết

### 1. Git

=== "Windows"
    
    **Download và cài đặt:**
    
    1. Truy cập [git-scm.com/download/win](https://git-scm.com/download/win)
    2. Download và chạy installer
    3. Giữ nguyên các tùy chọn mặc định
    
    **Kiểm tra:**
    ```powershell
    git --version
    # git version 2.30.0+
    ```

=== "macOS"
    
    **Cài đặt qua Homebrew:**
    ```bash
    brew install git
    ```
    
    **Kiểm tra:**
    ```bash
    git --version
    ```

=== "Linux"
    
    **Ubuntu/Debian:**
    ```bash
    sudo apt update
    sudo apt install git
    ```
    
    **CentOS/RHEL:**
    ```bash
    sudo yum install git
    ```
    
    **Kiểm tra:**
    ```bash
    git --version
    ```

### 2. Node.js & npm

!!! info "Phiên bản yêu cầu"
    Node.js **18.0.0+** và npm **8.0.0+**

=== "Windows"
    
    **Download và cài đặt:**
    
    1. Truy cập [nodejs.org/en/download](https://nodejs.org/en/download/)
    2. Download **LTS version** (khuyến nghị)
    3. Chạy installer và làm theo hướng dẫn
    
    **Kiểm tra:**
    ```powershell
    node --version
    # v18.0.0+
    npm --version
    # 8.0.0+
    ```

=== "macOS"
    
    **Cài đặt qua Homebrew:**
    ```bash
    brew install node@18
    ```
    
    **Kiểm tra:**
    ```bash
    node --version
    npm --version
    ```

=== "Linux"
    
    **Ubuntu/Debian:**
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```
    
    **Kiểm tra:**
    ```bash
    node --version
    npm --version
    ```

### 3. Python

!!! info "Phiên bản yêu cầu"
    Python **3.9.0+** và pip

=== "Windows"
    
    **Download và cài đặt:**
    
    1. Truy cập [python.org/downloads](https://www.python.org/downloads/)
    2. Download Python 3.9+
    3. **Quan trọng**: Tick ✅ "Add Python to PATH"
    4. Chọn "Install Now"
    
    **Kiểm tra:**
    ```powershell
    python --version
    # Python 3.9.0+
    pip --version
    ```

=== "macOS"
    
    **Cài đặt qua Homebrew:**
    ```bash
    brew install python@3.9
    ```
    
    **Kiểm tra:**
    ```bash
    python3 --version
    pip3 --version
    ```

=== "Linux"
    
    **Ubuntu/Debian:**
    ```bash
    sudo apt update
    sudo apt install python3.9 python3.9-venv python3-pip
    ```
    
    **Kiểm tra:**
    ```bash
    python3 --version
    pip3 --version
    ```

### 4. Java (cho Apache Jena Fuseki)

!!! info "Phiên bản yêu cầu"
    Java **11+** (OpenJDK hoặc Oracle JDK)

=== "Windows"
    
    **Download và cài đặt OpenJDK:**
    
    1. Truy cập [adoptium.net](https://adoptium.net/)
    2. Chọn **OpenJDK 11 (LTS)** hoặc cao hơn
    3. Download và cài đặt
    
    **Thiết lập JAVA_HOME:**
    ```powershell
    # Thêm vào System Environment Variables
    JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-11.x.x
    ```
    
    **Kiểm tra:**
    ```powershell
    java -version
    # openjdk version "11.0.0" hoặc cao hơn
    ```

=== "macOS"
    
    **Cài đặt qua Homebrew:**
    ```bash
    brew install openjdk@11
    ```
    
    **Thiết lập JAVA_HOME:**
    ```bash
    echo 'export JAVA_HOME=$(/usr/libexec/java_home -v11)' >> ~/.zshrc
    source ~/.zshrc
    ```
    
    **Kiểm tra:**
    ```bash
    java -version
    ```

=== "Linux"
    
    **Ubuntu/Debian:**
    ```bash
    sudo apt install openjdk-11-jdk
    ```
    
    **CentOS/RHEL:**
    ```bash
    sudo yum install java-11-openjdk-devel
    ```
    
    **Kiểm tra:**
    ```bash
    java -version
    ```

### 5. InfluxDB (cho dữ liệu IoT)

!!! info "Phiên bản yêu cầu"
    InfluxDB **2.x**

=== "Windows"
    
    **Download và cài đặt:**
    
    1. Truy cập [portal.influxdata.com/downloads](https://portal.influxdata.com/downloads/)
    2. Chọn **InfluxDB 2.x** cho Windows
    3. Download và giải nén
    4. Chạy `influxd.exe`
    
    **Hoặc dùng Chocolatey:**
    ```powershell
    choco install influxdb2
    ```
    
    **Kiểm tra:**
    ```powershell
    influx version
    ```

=== "macOS"
    
    **Cài đặt qua Homebrew:**
    ```bash
    brew install influxdb
    ```
    
    **Khởi động service:**
    ```bash
    brew services start influxdb
    ```
    
    **Kiểm tra:**
    ```bash
    influx version
    ```

=== "Linux"
    
    **Ubuntu/Debian:**
    ```bash
    wget -q https://repos.influxdata.com/influxdata-archive_compat.key
    echo '393e8779c89ac8d958f81f942f9ad7fb82a25e133faddaf92e15b16e6ac9ce4c influxdata-archive_compat.key' | sha256sum -c
    cat influxdata-archive_compat.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg > /dev/null
    echo 'deb [signed-by=/etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg] https://repos.influxdata.com/debian stable main' | sudo tee /etc/apt/sources.list.d/influxdata.list
    
    sudo apt-get update
    sudo apt-get install influxdb2
    
    # Khởi động service
    sudo systemctl start influxdb
    sudo systemctl enable influxdb
    ```
    
    **Kiểm tra:**
    ```bash
    influx version
    sudo systemctl status influxdb
    ```

**Cấu hình InfluxDB lần đầu:**

```bash
# Setup qua CLI
influx setup

# Hoặc truy cập Web UI
# http://localhost:8086
```

**Thông tin cần nhập:**
- Username: `admin` (hoặc tùy chọn)
- Password: Chọn mật khẩu mạnh
- Organization: `MFitHou`
- Bucket: `iot-data`
- Retention: `30 days` (hoặc tùy nhu cầu)

**Tạo Token:**
```bash
influx auth create \
  --org MFitHou \
  --read-buckets \
  --write-buckets \
  --description "IoT Data Token"

# Lưu token hiển thị vào file .env
```

### 6. Apache Jena Fuseki

**Download Fuseki:**

1. Truy cập [jena.apache.org/download](https://jena.apache.org/download/)
2. Download **Apache Jena Fuseki** (file `.tar.gz` hoặc `.zip`)
3. Giải nén vào thư mục, ví dụ: `C:\fuseki` hoặc `~/fuseki`

**Khởi động Fuseki:**

=== "Windows"
    ```powershell
    cd C:\fuseki
    .\fuseki-server.bat
    ```

=== "macOS/Linux"
    ```bash
    cd ~/fuseki
    ./fuseki-server
    ```

**Truy cập Fuseki Web UI:**

Mở trình duyệt: `http://localhost:3030`

**Tạo Dataset:**

1. Click **"Manage datasets"**
2. Click **"+ Add new dataset"**
3. **Dataset name**: `mfithou`
4. **Dataset type**: **Persistent (TDB2)**
5. Click **"Create dataset"**

## Cài đặt Projects

### 1. Data Pipeline (Python)

**Clone repository:**

```bash
git clone https://github.com/MFitHou/OpenDataFitHou.git
cd OpenDataFitHou
```

**Cài đặt dependencies:**

```bash
# Tạo virtual environment
python -m venv venv

# Kích hoạt venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Cài packages
pip install -r requirements.txt
```

**Cấu hình `.env`:**

```bash
INFLUXDB_URL=http://localhost:8086
INFLUXDB_TOKEN=your-influxdb-token
INFLUXDB_ORG=MFitHou
INFLUXDB_BUCKET=iot-data

OSM_CITY=Hanoi
OSM_COUNTRY=Vietnam
```

### 2. Backend API (NestJS)

**Clone repository:**

```bash
git clone https://github.com/MFitHou/open_data_backend.git
cd open_data_backend
```

**Cài đặt dependencies:**

```bash
npm install
```

**Cấu hình `.env`:**

```bash
FUSEKI_SERVER_URL=http://localhost:3030
FUSEKI_DATASET=mfithou

INFLUXDB_URL=http://localhost:8086
INFLUXDB_TOKEN=your_influxdb_token
INFLUXDB_ORG=MFitHou
INFLUXDB_BUCKET=iot-data

PORT=3000
NODE_ENV=development
```

**Chạy backend:**

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

### 3. Frontend (React)

**Clone repository:**

```bash
git clone https://github.com/MFitHou/open_data_map.git
cd open_data_map
```

**Cài đặt dependencies:**

```bash
npm install
```

**Cấu hình `.env`:**

```bash
VITE_BACKEND_URL=http://localhost:3000
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_MAP_CENTER_LAT=21.0285
VITE_MAP_CENTER_LONG=105.8542
```

**Chạy frontend:**

```bash
npm run dev
# Truy cập: http://localhost:5173
```


## Chạy hệ thống

### Bước 1: Khởi động Fuseki

=== "Windows"
    ```powershell
    cd C:\fuseki
    .\fuseki-server.bat
    ```

=== "macOS/Linux"
    ```bash
    cd ~/fuseki
    ./fuseki-server
    ```

**Kiểm tra:** `http://localhost:3030`

### Bước 2: Khởi động InfluxDB

=== "Windows"
    ```powershell
    influxd
    ```

=== "macOS"
    ```bash
    brew services start influxdb
    ```

=== "Linux"
    ```bash
    sudo systemctl start influxdb
    ```

**Kiểm tra:** `http://localhost:8086`

### Bước 3: Khởi động Backend

```bash
cd open_data_backend
npm run start:dev
```

**Kiểm tra:** `http://localhost:3000`

### Bước 4: Khởi động Frontend

```bash
cd open_data_map
npm run dev
```

**Kiểm tra:** `http://localhost:5173`

### Bước 5: Nạp dữ liệu

```bash
cd OpenDataFitHou
source venv/bin/activate  # Windows: venv\Scripts\activate

# Thu thập dữ liệu OSM
python src/fetchers/osm_data_fetcher.py --city Hanoi --country Vietnam

# Chuyển đổi sang RDF
python src/processors/batch_processor.py --mode rdf --input data/ --output datav2/

# Upload lên Fuseki
curl -X POST http://localhost:3030/mfithou/data \
  --data-binary @datav2/data_hanoi_atm.ttl \
  -H "Content-Type: text/turtle"
```

## Kiểm tra cài đặt

### Checklist

- [ ] **Fuseki** chạy tại `http://localhost:3030`
- [ ] **InfluxDB** chạy tại `http://localhost:8086`
- [ ] **Backend** chạy tại `http://localhost:3000`
- [ ] **Frontend** chạy tại `http://localhost:5173`
- [ ] **Dữ liệu** đã được nạp vào Fuseki

### Test API

```bash
# Test Backend
curl http://localhost:3000/fuseki/hospitals-nearby?lat=21.0285&long=105.8542

# Test SPARQL
curl -X POST http://localhost:3030/mfithou/query \
  --data-urlencode 'query=SELECT * WHERE { ?s ?p ?o } LIMIT 10'
```

## Troubleshooting

### Lỗi thường gặp

#### Port đã được sử dụng

**Triệu chứng:** `EADDRINUSE: address already in use`

**Giải pháp:**

=== "Windows"
    ```powershell
    # Tìm process sử dụng port
    netstat -ano | findstr :3000
    
    # Kill process
    taskkill /PID <PID> /F
    ```

=== "macOS/Linux"
    ```bash
    # Tìm process
    lsof -i :3000
    
    # Kill process
    kill -9 <PID>
    ```

#### Fuseki không khởi động

**Triệu chứng:** `Exception in thread "main"`

**Giải pháp:**

1. Kiểm tra Java version: `java -version` (phải >= 11)
2. Kiểm tra JAVA_HOME:
   ```bash
   echo $JAVA_HOME  # macOS/Linux
   echo %JAVA_HOME%  # Windows
   ```
3. Xóa thư mục `run/` trong Fuseki và khởi động lại

#### InfluxDB connection failed

**Triệu chứng:** `ECONNREFUSED localhost:8086`

**Giải pháp:**

1. Kiểm tra InfluxDB đang chạy:
   ```bash
   # Windows
   tasklist | findstr influxd
   
   # macOS/Linux
   ps aux | grep influxd
   ```

2. Khởi động lại InfluxDB:
   ```bash
   # macOS
   brew services restart influxdb
   
   # Linux
   sudo systemctl restart influxdb
   
   # Windows
   # Chạy lại influxd.exe
   ```

3. Kiểm tra token trong `.env` đúng chưa

#### Frontend không kết nối được Backend

**Triệu chứng:** CORS errors hoặc API calls failed

**Giải pháp:**

1. Kiểm tra `VITE_BACKEND_URL` trong Frontend `.env`
2. Đảm bảo Backend đang chạy tại port 3000
3. Check Backend logs có lỗi gì không

#### Không có dữ liệu trên map

**Triệu chứng:** Map trống, không có markers

**Giải pháp:**

1. Kiểm tra Fuseki có dữ liệu chưa (xem phần Test Fuseki)
2. Chạy lại Data Pipeline notebooks
3. Check Backend logs khi call API
4. Check Browser Console có lỗi JavaScript không

## Resources

- 📖 [Architecture Overview](architecture-overview.md)
- 📚 [User Guide](../user-guide/index.md)
- 💻 [Developer Guide](../developer-guide/index.md)
- 🔌 [API Reference](../api-reference/index.md)
- 🐛 [Report Issues](https://github.com/MFitHou/MFitHou-Documents/issues)

---

!!! success "Cài đặt hoàn tất!"
    Bạn đã sẵn sàng sử dụng OpenDataMap! 🎉
