# Giới thiệu về OpenDataMap

## Open Data Map là gì?

**OpenDataMap** là hệ sinh thái **Linked Open Data (LOD)** phục vụ nghiên cứu và chuyển đổi số. Hệ thống cung cấp nền tảng dữ liệu mở liên kết về các điểm quan tâm (POI - Points of Interest) tại Việt Nam, tuân thủ chuẩn **W3C Semantic Web** (RDF, SPARQL, Linked Data) và **NGSI-LD** của ETSI.

## Mục tiêu dự án

| | Mục tiêu | Mô tả |
|---|---------|-------|
| :material-database-arrow-right: | **Chuyển đổi số dữ liệu** | Chuyển đổi dữ liệu địa lý từ OpenStreetMap sang RDF/Turtle tuân thủ chuẩn NGSI-LD, hỗ trợ SPARQL và liên kết với Semantic Web |
| :material-api: | **REST API** | API tìm kiếm POI lân cận với tích hợp Apache Jena Fuseki và custom SPARQL queries, tương thích NGSI-LD |
| :material-web: | **Web Application** | React app với Leaflet map, AI chatbot (Gemini), và xuất dữ liệu đa định dạng (JSON-LD, RDF/Turtle, XML) |
| :material-open-source-initiative: | **Open Source** | GNU GPL v3.0 license, public repositories, tài liệu đầy đủ, mở cho cộng đồng |

## Đặt vấn đề

### Thách thức với dữ liệu địa lý

**OpenStreetMap** cung cấp dữ liệu địa lý phong phú nhưng:

- Định dạng GeoJSON không tối ưu cho semantic search  
- Khó liên kết với knowledge graphs khác  
- Không hỗ trợ truy vấn SPARQL  
- Thiếu standardization cho POI schema  

### Nhu cầu Linked Open Data

Semantic Web cần:

- **Standardized schema** - Ontology rõ ràng  
- **Linked Data** - Liên kết với Wikidata, DBpedia  
- **SPARQL endpoint** - Query language mạnh mẽ  
- **RESTful API** - Dễ tích hợp với ứng dụng  

## Giải pháp

### Kiến trúc
 ![Architecture](../assets/images/architecture.png)

### Data Pipeline (Python)

- Thu thập dữ liệu từ các nguồn API và giả lập dữ liệu IoT
- Chuyển đổi GeoJSON → RDF/Turtle tuân thủ chuẩn NGSI-LD
- Lưu trữ dữ liệu IoT time-series vào InfluxDB
- Tải dữ liệu RDF lên Apache Jena Fuseki triplestore

### Backend API (NestJS)

- REST API endpoints cho tìm kiếm dịch vụ tiện ích công cộng
- Tích hợp SPARQL với Fuseki và InfluxDB cho dữ liệu IoT
- Hỗ trợ CORS cho frontend

### Frontend Web (React)

- Bản đồ tương tác với Leaflet
- Tìm kiếm địa điểm (OSM + Wikidata)
- Hiển thị dịch vụ lân cận
- Hỗ trợ chatbot AI

## Tech Stack

=== "Data Pipeline"
    | Technology | Version | Purpose |
    |------------|---------|---------|
    | Python | 3.9+ | Core language |
    | Jupyter | Latest | Interactive notebooks |
    | RDFLib | 7.1.1 | RDF processing |
    | Requests | 2.32.3 | HTTP requests |

=== "Backend"
    | Technology | Version | Purpose |
    |------------|---------|---------|
    | NestJS | 11.0.8 | Framework |
    | TypeScript | 5.7.2 | Language |
    | Node.js | 18+ | Runtime |
    | Axios | 1.7.9 | HTTP client |

=== "Frontend"
    | Technology | Version | Purpose |
    |------------|---------|---------|
    | React | 19.1.1 | UI framework |
    | TypeScript | 5.8.3 | Language |
    | Vite | 7.1.7 | Build tool |
    | Leaflet | 1.9.4 | Map library |
    | MUI | 6.3.0 | UI components |

=== "Infrastructure"
    | Technology | Version | Purpose |
    |------------|---------|---------|
    | Apache Jena Fuseki | 5.x | Triplestore |
    | Git | Latest | Version control |
    | GitHub Actions | Latest | CI/CD |
    | MkDocs Material | Latest | Documentation |


## License

### Giấy phép Mã nguồn

**GNU General Public License v3.0**

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Patent use
- ❗ Disclose source
- ❗ License and copyright notice
- ❗ State changes
- ❗ Same license

[:octicons-arrow-right-24: Chi tiết Giấy phép Mã nguồn](../policies/source-code-license.md)

### Giấy phép Dữ liệu

**Open Data License (ODbL, CC0, CC BY 4.0)**

- 📍 OpenStreetMap data - **ODbL v1.0**
- 🌐 Wikidata - **CC0 1.0 Universal**
- 🌍 OpenAQ - **CC BY 4.0**
- 🔄 RDF chuyển đổi - **ODbL v1.0**

[:octicons-arrow-right-24: Chi tiết Giấy phép Dữ liệu](../policies/open-data-license.md)

[:material-file-document-multiple: Xem tổng quan tất cả Giấy phép](../policies/index.md)

---

!!! success "Next Steps"
    Tiếp tục với [Tính năng chính](features.md) →
