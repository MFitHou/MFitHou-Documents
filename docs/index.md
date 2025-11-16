# Chào mừng đến với MFitHou Documentation

![MFitHou Banner](assets/images/banner.png)

## Giới thiệu

**MFitHou** là hệ sinh thái dữ liệu mở liên kết (Linked Open Data) phục vụ nghiên cứu và chuyển đổi số, được phát triển cho cuộc thi **Phần mềm Nguồn mở - Olympic Tin học sinh viên (OLP) 2025**.

Hệ thống bao gồm:

- 🐍 **Data Pipeline** - Thu thập và chuyển đổi dữ liệu từ OpenStreetMap sang RDF
- ⚡ **Backend API** - NestJS REST API với tích hợp Apache Jena Fuseki
- 🗺️ **Frontend Web** - React web application với Leaflet map
- 📚 **Documentation** - Tài liệu đầy đủ cho toàn bộ hệ thống

## Quick Links

<div class="grid cards" markdown>

-   :material-rocket-launch:{ .lg .middle } __Bắt đầu nhanh__

    ---

    Cài đặt và chạy hệ thống trong 10 phút

    [:octicons-arrow-right-24: Quick Start](getting-started/quick-start.md)

-   :material-chart-timeline-variant:{ .lg .middle } __Kiến trúc hệ thống__

    ---

    Tìm hiểu kiến trúc và luồng dữ liệu

    [:octicons-arrow-right-24: System Architecture](architecture/system-overview.md)

-   :material-api:{ .lg .middle } __API Reference__

    ---

    Tài liệu REST API và SPARQL endpoints

    [:octicons-arrow-right-24: API Docs](api-reference/index.md)

-   :material-code-braces:{ .lg .middle } __Developer Guide__

    ---

    Hướng dẫn phát triển và đóng góp code

    [:octicons-arrow-right-24: Dev Guide](developer-guide/index.md)

</div>

## Tính năng chính

- ✅ **Linked Open Data** - Dữ liệu RDF/Turtle tuân thủ chuẩn W3C
- ✅ **SPARQL Integration** - Query dữ liệu với Apache Jena Fuseki
- ✅ **RESTful API** - 7 endpoints cho nearby search
- ✅ **Interactive Map** - Leaflet-based map với POI markers
- ✅ **AI Chatbot** - Gemini-powered chatbot hỗ trợ người dùng
- ✅ **Data Export** - Xuất dữ liệu sang XML, RDF, JSON

## Tech Stack

=== "Data Pipeline"
    - Python 3.9+
    - Jupyter Notebook
    - RDFLib
    - Requests

=== "Backend"
    - NestJS 11
    - TypeScript 5.7
    - Node.js 18+
    - Apache Jena Fuseki

=== "Frontend"
    - React 19
    - TypeScript 5.8
    - Vite 7
    - Leaflet 1.9
    - Material-UI 6

## Repositories

| Repository | Mô tả | Tech Stack |
|------------|-------|------------|
| [OpenDataFitHou](https://github.com/MFitHou/OpenDataFitHou) | Data Pipeline - Thu thập & chuyển đổi dữ liệu | Python, Jupyter |
| [open_data_backend](https://github.com/MFitHou/open_data_backend) | Backend API - NestJS REST API | NestJS, TypeScript |
| [open_data_map](https://github.com/MFitHou/open_data_map) | Frontend Web - React Map App | React, Vite, Leaflet |
| [.github](https://github.com/MFitHou/.github) | Templates & Policies | Markdown |

## License

Toàn bộ hệ thống được phát hành dưới giấy phép **GNU General Public License v3.0**.

---

<div class="text-center" markdown>
**Developed with ❤️ by MFitHou Team for OLP PMNM 2025**
</div>
