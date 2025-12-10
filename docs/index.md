![MFitHou Banner](assets/images/banner.jpg)

---

## MFitHou - Smart Search. Natural Interaction.


MFitHou là hệ sinh thái dữ liệu mở liên kết (Linked Open Data) phục vụ nghiên cứu và chuyển đổi số, được phát triển cho cuộc thi **Phần mềm Nguồn mở - Olympic Tin học sinh viên (OLP) 2025**.

---

## :material-star-four-points: Tính năng chính

<div class="grid cards" markdown>

-   :material-map-search:{ .lg .middle } **Tìm kiếm địa điểm thông minh**

    ---

    Tìm kiếm ATM, bệnh viện, trạm xe buýt, nhà vệ sinh công cộng, sân chơi và nhiều dịch vụ tiện ích công cộng khác.

-   :material-robot:{ .lg .middle } **AI Chatbot**

    ---

    Trợ lý ảo hỗ trợ tìm kiếm và trả lời câu hỏi bằng ngôn ngữ tự nhiên, được hỗ trợ bởi Google Gemini

-   :material-map-marker-radius:{ .lg .middle } **Bản đồ tương tác**

    ---

    Hiển thị địa điểm trên bản đồ Leaflet với markers, popup thông tin chi tiết và tính năng định vị

-   :material-database-search:{ .lg .middle } **SPARQL Query**

    ---

    Truy vấn dữ liệu RDF với Apache Jena Fuseki, hỗ trợ custom queries linh hoạt

-   :material-download:{ .lg .middle } **Xuất dữ liệu**

    ---

    Xuất kết quả tìm kiếm sang nhiều định dạng: XML, RDF/Turtle, JSON. Có cung cấp các API theo chuẩn NGSI-LD

-   :material-weather-cloudy:{ .lg .middle } **Thông tin thời tiết & môi trường**

    ---

    Hiển thị dữ liệu thời tiết và chất lượng không khí, môi trường theo thời gian thực

</div>

---


=== "Bản đồ tiện ích"
    
    <div class="demo-grid" markdown>
    
    ![Search Demo 1](assets/images/1.png)
    
    ![Search Demo 2](assets/images/2.png)
    
    ![Search Demo 3](assets/images/3.png)
    
    </div>

=== "AI Chatbot"
    
    <div class="demo-grid" markdown>
    
    ![Chatbot Demo 1](assets/images/4.png)
    
    ![Chatbot Demo 2](assets/images/5.png)
    
    
    </div>

=== "Truy vấn dữ liệu"
    
    <div class="demo-grid" markdown>
    
    ![Chatbot Demo 1](assets/images/6.png)
    
    ![Chatbot Demo 2](assets/images/8.png)
    
    </div>

=== "Quản trị"
    
    <div class="demo-grid" markdown>
    
    ![Chatbot Demo 1](assets/images/10.png)
    
    ![Chatbot Demo 2](assets/images/11.png)
    ![Chatbot Demo 2](assets/images/12.png)
    
    </div>

| Nguồn dữ liệu | Mô tả | Độ tin cậy |
|---------------|-------|------------|
| **[OpenStreetMap](https://www.openstreetmap.org/)** | Dữ liệu bản đồ nền, vị trí các tiện ích (bãi đỗ xe, đường, POI) qua Overpass API | Cao (cộng đồng cập nhật) |
| **[OpenWeather](https://openweathermap.org/)** | Dữ liệu thời tiết thực tế | Cao (phụ thuộc vào coverage từng khu vực) |
| **[OpenAQ](https://openaq.org/)** | Dữ liệu chất lượng không khí toàn cầu | Trung bình (phụ thuộc coverage, fallback mô phỏng nếu thiếu) |
| **Dữ liệu IoT giả lập** | Dữ liệu mô phỏng: giao thông, tiếng ồn, ngập lụt dựa trên logic, thời gian, thời tiết thực tế | [:octicons-arrow-right-24: Xem kịch bản](data-rdf/data-sources/iot-simulation.md) |

!!! info "Tần suất cập nhật"
    - **OpenStreetMap**: Cập nhật từ community
    - **OpenWeather**: Real-time API (cập nhật mỗi 5 phút)
    - **OpenAQ**: Cập nhật mỗi 5 phút
    - **IoT**: Giả lập real-time (mỗi 5 phút)

---

## :material-tools: Công nghệ sử dụng

=== "Backend"
    - **NestJS 11** - Framework Node.js
    - **TypeScript 5.7** - Type-safe JavaScript
    - **Apache Jena Fuseki** - SPARQL server
    - **Swagger/OpenAPI** - API documentation

=== "Frontend"
    - **React 19** - UI library
    - **Vite 7** - Build tool & dev server
    - **Leaflet 1.9** - Interactive maps
    - **Material-UI 6** - Component library

=== "Data Pipeline"
    - **Python 3.9+** - Data processing
    - **Jupyter Notebook** - Interactive development
    - **RDFLib** - RDF/Turtle generation
    - **Requests** - HTTP client

---


## :material-account-group: Đội ngũ phát triển

<div class="grid cards" markdown>

-   :material-github: **[@honganhss](https://github.com/honganhss)**
    
    ---
    
-   :material-github: **[@VuHoangAnh2110](https://github.com/VuHoangAnh2110)**
    
    ---
    

-   :material-github: **[@VNgKhanh04](https://github.com/VNgKhanh04)**
    
    ---
    

</div>

---

## :material-link-variant: Quick Links

<div class="grid cards" markdown>

-   :material-book-open-variant:{ .lg .middle } **Tài liệu**

    ---

    Hướng dẫn sử dụng và phát triển đầy đủ

    [:octicons-arrow-right-24: Xem tài liệu](getting-started/index.md)

-   :material-github:{ .lg .middle } **Repositories**

    ---

    Source code trên GitHub

    [:octicons-arrow-right-24: GitHub Organization](https://github.com/MFitHou)

-   :material-api:{ .lg .middle } **API Reference**

    ---

    REST API và SPARQL endpoints

    [:octicons-arrow-right-24: API Docs](api-reference/index.md)

-   :material-license:{ .lg .middle } **License**

    ---

    GNU General Public License v3.0

    [:octicons-arrow-right-24: Xem license](policies/license.md)

</div>

---

<div class="text-center" markdown>

**Developed with :material-heart: by MFitHou Team for OLP PMNM 2025**

[![GitHub stars](https://img.shields.io/github/stars/MFitHou?style=social)](https://github.com/MFitHou)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

</div>
