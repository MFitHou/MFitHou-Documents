# Frequently Asked Questions (FAQ)

## Câu hỏi chung

### MFitHou là gì?

MFitHou là hệ sinh thái dữ liệu mở liên kết (Linked Open Data) phục vụ nghiên cứu và chuyển đổi số, được phát triển cho cuộc thi Phần mềm Nguồn mở - Olympic Tin học sinh viên (OLP) 2025.

### Hệ thống bao gồm những thành phần nào?

Hệ thống gồm 4 thành phần chính:

1. **Data Pipeline** (OpenDataFitHou) - Thu thập dữ liệu từ OpenStreetMap và chuyển đổi sang RDF
2. **Backend API** (open_data_backend) - NestJS REST API tích hợp Apache Jena Fuseki
3. **Frontend Web** (open_data_map) - React web application với interactive map
4. **Documentation** (MFitHou-Documents) - Tài liệu toàn diện cho hệ thống

### Giấy phép sử dụng?

Toàn bộ hệ thống được phát hành dưới giấy phép **GNU GPL v3.0** - phần mềm nguồn mở, tự do sử dụng và phát triển.

---

## Installation

### Yêu cầu hệ thống tối thiểu?

- **Python**: 3.9 trở lên
- **Node.js**: 18.0 trở lên
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 2GB free space
- **OS**: Windows, macOS, Linux

### Làm sao để cài đặt toàn bộ hệ thống?

Xem hướng dẫn chi tiết tại [Quick Start Guide](getting-started/quick-start.md).

### Apache Jena Fuseki cài đặt như thế nào?

Xem [Fuseki Installation Guide](installation/fuseki/download-install.md).

---

## Data Pipeline

### Dữ liệu lấy từ đâu?

Dữ liệu POI (Points of Interest) được lấy từ **OpenStreetMap** thông qua Overpass API.

### Dữ liệu được chuyển đổi sang định dạng gì?

Dữ liệu GeoJSON từ OSM được chuyển đổi sang **RDF/Turtle** format tuân thủ chuẩn W3C.

### Làm sao để chạy Data Pipeline?

```bash
cd OpenDataFitHou
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
jupyter notebook
```

Mở `OverpassApi.ipynb` và `ParseRDF.ipynb` để chạy.

---

## Backend API

### Backend API chạy ở port nào?

Mặc định: `http://localhost:3000`

### Có những API endpoints nào?

7 endpoints chính:

- `GET /fuseki/atms-nearby` - Tìm ATM lân cận
- `GET /fuseki/hospitals-nearby` - Tìm bệnh viện
- `GET /fuseki/toilets-nearby` - Tìm nhà vệ sinh
- `GET /fuseki/bus-stops-nearby` - Tìm trạm xe buýt
- `GET /fuseki/playgrounds-nearby` - Tìm sân chơi
- `GET /fuseki/hello` - Health check
- `POST /fuseki/query` - Custom SPARQL query

### CORS được cấu hình như thế nào?

CORS được enable trong `main.ts`:

```typescript
app.enableCors({
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true,
});
```

---

## Frontend Web

### Frontend chạy ở port nào?

Development: `http://localhost:5173` (Vite default)

### Map library sử dụng?

**Leaflet 1.9.4** với OpenStreetMap tiles.

### Có tích hợp AI không?

Có - **Google Gemini API** được tích hợp làm chatbot hỗ trợ người dùng.

### Làm sao để export dữ liệu?

Sử dụng component `DataExportDialog` - hỗ trợ export sang XML, RDF, JSON.

---

## SPARQL & RDF

### SPARQL là gì?

**SPARQL** (SPARQL Protocol and RDF Query Language) là ngôn ngữ query cho dữ liệu RDF, tương tự SQL cho database.

### Ví dụ SPARQL query?

```sparql
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX schema: <http://schema.org/>

SELECT ?name ?lat ?long WHERE {
  ?poi schema:name ?name ;
       geo:lat ?lat ;
       geo:long ?long .
  FILTER(CONTAINS(LCASE(?name), "hospital"))
}
LIMIT 10
```

### Ontology được thiết kế như thế nào?

Xem [Ontology Schema](data-rdf/ontology/schema-overview.md).

---

## Deployment

### Có thể deploy lên production không?

Có! Xem hướng dẫn:

- [Backend Deployment](installation/backend/running-server.md)
- [Frontend Deployment](installation/frontend/development-server.md)
- [Docker Deployment](installation/docker/production-deployment.md)

### Có Docker hỗ trợ không?

Có - xem [Docker Compose Guide](installation/docker/docker-compose.md).

---

## Contributing

### Làm sao để đóng góp code?

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add some AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Mở Pull Request

Xem chi tiết tại [Contributing Guide](developer-guide/contributing.md).

### Code style convention?

- **TypeScript**: ESLint + Prettier
- **Python**: PEP 8
- **Commits**: Conventional Commits

Xem [Coding Standards](developer-guide/coding-standards/index.md).

---

## Support

### Gặp lỗi phải làm sao?

1. Kiểm tra [Troubleshooting Guide](user-guide/troubleshooting.md)
2. Tìm trong [Issues](https://github.com/MFitHou) các repository
3. Tạo issue mới với template [Bug Report](https://github.com/MFitHou/.github/blob/main/.github/ISSUE_TEMPLATE/bug_report.md)

### Có cộng đồng hỗ trợ không?

- GitHub Issues: https://github.com/MFitHou
- Email: [Contact Support](support.md)

---

!!! question "Không tìm thấy câu trả lời?"
    Vui lòng tạo issue trên GitHub hoặc liên hệ qua [Support Page](support.md).
