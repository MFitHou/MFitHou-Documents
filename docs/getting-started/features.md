# Tính năng chính

MFitHou cung cấp đầy đủ tính năng cho hệ sinh thái Linked Open Data.

## 🗺️ Interactive Map

### Leaflet-based Mapping
- **OpenStreetMap tiles** - Bản đồ mở miễn phí
- **Custom markers** - Icon riêng cho từng loại POI
- **Popup info** - Thông tin chi tiết khi click
- **Clustering** - Nhóm markers khi zoom out

### Location Search
- **Wikidata integration** - Tìm địa điểm qua Wikidata
- **OSM Nominatim** - Geocoding & reverse geocoding
- **Auto-complete** - Gợi ý khi gõ
- **Coordinates** - Hỗ trợ lat/long trực tiếp

## 🔍 Nearby Services

### 7 loại dịch vụ lân cận

| Icon | Service | SPARQL Query |
|------|---------|--------------|
| 🏧 | **ATMs** | `GET /fuseki/atms-nearby` |
| 🏥 | **Hospitals** | `GET /fuseki/hospitals-nearby` |
| 🚻 | **Toilets** | `GET /fuseki/toilets-nearby` |
| 🚌 | **Bus Stops** | `GET /fuseki/bus-stops-nearby` |
| 🎪 | **Playgrounds** | `GET /fuseki/playgrounds-nearby` |
| 🏫 | **Schools** | Sắp tới |
| 🍴 | **Restaurants** | Sắp tới |

### Nearby Search
- **Radius-based** - Tìm trong bán kính N km
- **Distance calculation** - Haversine formula
- **Sort by distance** - Gần nhất → xa nhất
- **Limit results** - Giới hạn số lượng kết quả

## 🤖 AI Chatbot

### Google Gemini Integration
- **Natural language** - Hỏi đáp bằng tiếng Việt
- **Context-aware** - Hiểu ngữ cảnh bản đồ
- **POI recommendations** - Gợi ý địa điểm
- **SPARQL generation** - Tự động tạo query

### Chatbot Features
```typescript
// Example: Ask chatbot
"Tìm bệnh viện gần đây trong bán kính 2km"
→ Gemini generates SPARQL query
→ Execute on Fuseki
→ Display results on map
```

## 📊 Data Export

### Export Formats

=== "XML"
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <pois>
      <poi>
        <name>Bệnh viện Bạch Mai</name>
        <lat>21.0025</lat>
        <long>105.8428</long>
      </poi>
    </pois>
    ```

=== "RDF/Turtle"
    ```turtle
    @prefix schema: <http://schema.org/> .
    @prefix geo: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
    
    <http://example.org/poi/1>
      schema:name "Bệnh viện Bạch Mai" ;
      geo:lat 21.0025 ;
      geo:long 105.8428 .
    ```

=== "JSON"
    ```json
    {
      "pois": [
        {
          "name": "Bệnh viện Bạch Mai",
          "lat": 21.0025,
          "long": 105.8428
        }
      ]
    }
    ```

## 🔌 REST API

### 7 Public Endpoints

```bash
# Health check
GET http://localhost:3000/fuseki/hello

# Nearby searches
GET http://localhost:3000/fuseki/atms-nearby?lat=21.0285&long=105.8542&radiusKm=2&limit=10
GET http://localhost:3000/fuseki/hospitals-nearby?lat=21.0285&long=105.8542&radiusKm=5&limit=20
GET http://localhost:3000/fuseki/toilets-nearby?lat=21.0285&long=105.8542&radiusKm=1&limit=5
GET http://localhost:3000/fuseki/bus-stops-nearby?lat=21.0285&long=105.8542&radiusKm=0.5&limit=15
GET http://localhost:3000/fuseki/playgrounds-nearby?lat=21.0285&long=105.8542&radiusKm=3&limit=10

# Custom SPARQL
POST http://localhost:3000/fuseki/query
Content-Type: application/json
{
  "query": "SELECT * WHERE { ?s ?p ?o } LIMIT 10"
}
```

## 📚 Linked Open Data

### RDF/Turtle Format
- **W3C compliant** - Tuân thủ chuẩn W3C
- **Schema.org** - Sử dụng Schema.org vocabulary
- **GeoSPARQL** - Hỗ trợ WGS84 geo vocabulary
- **Linkable** - Liên kết với Wikidata, DBpedia

### SPARQL Queries
```sparql
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX schema: <http://schema.org/>

SELECT ?name ?lat ?long
WHERE {
  ?poi schema:name ?name ;
       geo:lat ?lat ;
       geo:long ?long .
  FILTER(CONTAINS(LCASE(?name), "hospital"))
}
LIMIT 10
```

## 🛠️ Developer Features

### Backend (NestJS)
- ✅ **TypeScript** - Type-safe code
- ✅ **Modular architecture** - FusekiModule
- ✅ **Error handling** - Centralized exceptions
- ✅ **CORS enabled** - Cross-origin support
- ✅ **Environment config** - .env support

### Frontend (React)
- ✅ **React 19** - Latest features
- ✅ **TypeScript** - Type safety
- ✅ **Vite** - Fast build tool
- ✅ **Material-UI** - Beautiful components
- ✅ **Custom hooks** - Reusable logic

### Data Pipeline (Python)
- ✅ **Jupyter Notebooks** - Interactive development
- ✅ **RDFLib** - RDF manipulation
- ✅ **Overpass API** - OSM data collection
- ✅ **Batch processing** - Multiple POI types

## 🚀 Performance

### Optimizations
- **Haversine distance** - Fast geo calculations
- **SPARQL optimization** - Efficient queries
- **Lazy loading** - Load markers on demand
- **Debounced search** - Reduce API calls
- **Caching** - Client-side cache

### Metrics
| Metric | Value |
|--------|-------|
| **API Response Time** | < 200ms |
| **Map Load Time** | < 1s |
| **SPARQL Query Time** | < 100ms |
| **Frontend Bundle** | ~ 500KB gzipped |

## 🔒 Security

- ✅ **CORS configured** - Whitelist origins
- ✅ **Input validation** - Prevent injection
- ✅ **Rate limiting** - API throttling (planned)
- ✅ **HTTPS ready** - SSL/TLS support

## 📱 Responsive Design

- ✅ **Mobile-friendly** - Touch events
- ✅ **Desktop optimized** - Large screens
- ✅ **Tablet support** - Medium screens
- ✅ **PWA ready** - Service worker (planned)

---

!!! tip "Explore More"
    - [API Reference](../api-reference/index.md) - Chi tiết API
    - [User Guide](../user-guide/index.md) - Hướng dẫn sử dụng
