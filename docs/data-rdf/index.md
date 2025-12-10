# Data & RDF Documentation - OpenDataFitHou


## 1. Tổng quan hệ thống dữ liệu

### 🎯 Mục đích
Dự án OpenDataFitHou xây dựng một hệ thống **Linked Open Data** phục vụ chuyển đổi số thành phố thông minh, tập trung vào:
- Thu thập và chuẩn hóa dữ liệu địa điểm công cộng tại Hà Nội
- Chuyển đổi sang định dạng RDF/Turtle để tích hợp với Web of Data
- Xây dựng mối quan hệ không gian (topology) giữa các địa điểm
- Tích hợp dữ liệu IoT thời gian thực (thời tiết, chất lượng không khí)

### 📊 Thống kê tổng quan

| Chỉ số                      | Giá trị                 |
| --------------------------- | ----------------------- |
| **Tổng số loại địa điểm**   | 28 amenity types        |
| **Tổng số file RDF/Turtle** | 28 files (.ttl)         |
| **Tổng số file GeoJSON**    | 7 files (data cũ)       |
| **Địa điểm được liên kết**  | 11,170 locations        |
| **Mối quan hệ topology**    | 84,397 relationships    |
| **Nguồn dữ liệu chính**     | OpenStreetMap, Wikidata |
| **Nguồn dữ liệu IoT**       | OpenWeather, OpenAQ     |

---

## 2. Nguồn dữ liệu

### 🌍 Static Data Sources

#### **OpenStreetMap (OSM) - Overpass API**
- **URL:** https://overpass-api.de/api/interpreter
- **Loại dữ liệu:** Địa điểm công cộng, cơ sở hạ tầng
- **Format:** GeoJSON → RDF/Turtle
- **Cập nhật:** On-demand (theo yêu cầu)

**Ví dụ truy vấn:**
```overpass
[out:json][timeout:60];
node["amenity"="atm"](around:20000,21.0285,105.8542);
out;
```

#### **Wikidata - SPARQL Endpoint**
- **URL:** https://query.wikidata.org/sparql
- **Loại dữ liệu:** Thông tin bổ sung về địa điểm, dịch thuật
- **Format:** RDF/JSON
- **Sử dụng:** Làm giàu metadata, tra cứu thông tin

### 🌤️ Real-time Data Sources

#### **OpenWeather API**
- **Loại dữ liệu:** Nhiệt độ, độ ẩm, áp suất, tốc độ gió
- **Tần suất:** Real-time (mỗi 60s)
- **Format:** JSON → InfluxDB

#### **OpenAQ API**
- **Loại dữ liệu:** Chất lượng không khí (PM2.5, PM10, CO2)
- **Tần suất:** Real-time (mỗi 60s)
- **Format:** JSON → InfluxDB

#### **IoT Simulation**
- **Loại dữ liệu:** Dữ liệu cảm biến giả lập
- **Mục đích:** Testing và demo
- **Tool:** `src/iot_collector.py`

---

## 3. Cấu trúc thư mục

```
OpenDataFitHou/
│
├── 📁 data/                          # Dữ liệu GeoJSON (legacy)
│   ├── atm.geojson
│   ├── bus_stop.geojson
│   ├── drinking_water.geojson
│   ├── hospital.geojson
│   ├── playground.geojson
│   ├── school.geojson
│   ├── toilets.geojson
│   ├── ontology.owl                  # OWL Ontology definition
│   ├── ontology.text                 # Human-readable ontology
│   ├── translation_cache.json        # Cache dịch thuật
│   ├── raw/                          # Dữ liệu thô từ API
│   └── opendata_hanoi/               # Dữ liệu bổ sung
│
├── 📁 datav2/                        # Dữ liệu RDF/Turtle (hiện tại)
│   ├── 🗂️ cleaned/                   # RDF files đã xử lý
│   │   ├── data_hanoi_atm.ttl
│   │   ├── data_hanoi_bank.ttl
│   │   ├── data_hanoi_bus_stop.ttl
│   │   ├── data_hanoi_cafe.ttl
│   │   ├── ... (28 files total)
│   │   └── data_hanoi_waste_basket.ttl
│   │
│   ├── data_hanoi_topology.ttl      # 84,397 mối quan hệ không gian
│   ├── iot_infrastructure.ttl       # Metadata IoT sensors
│   └── README_TOPOLOGY.md            # Tài liệu topology
│
└── 📁 config/
    └── config_amenity_types.py       # Cấu hình 28 loại địa điểm
```

---

## 4. Định dạng dữ liệu

### 📍 GeoJSON Format (Legacy - `data/`)

**Ví dụ: `data/atm.geojson`**
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [105.8342, 21.0278]
      },
      "properties": {
        "id": "node/12345",
        "name": "ATM Vietcombank",
        "operator": "Vietcombank",
        "amenity": "atm"
      }
    }
  ]
}
```

**Đặc điểm:**
- ✅ Dễ hiển thị trên bản đồ
- ✅ Tương thích với Leaflet, Mapbox
- ❌ Không có khả năng liên kết (linking)
- ❌ Khó truy vấn phức tạp

### 🔗 RDF/Turtle Format (Current - `datav2/cleaned/`)

**Ví dụ: `datav2/cleaned/data_hanoi_atm.ttl`**
```turtle
@prefix ext: <http://opendatafithou.org/def/extension/> .
@prefix fiware: <https://smartdatamodels.org/dataModel.PointOfInterest/> .
@prefix geo: <http://www.opengis.net/ont/geosparql#> .
@prefix schema: <http://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<http://opendatafithou.org/poi/atm/12345>
    a schema:FinancialService ;
    schema:name "ATM Vietcombank"@vi ;
    schema:latitude "21.0278"^^xsd:float ;
    schema:longitude "105.8342"^^xsd:float ;
    ext:operator "Vietcombank" ;
    geo:asWKT "POINT(105.8342 21.0278)"^^geo:wktLiteral ;
    fiware:category "finance" .
```

**Đặc điểm:**
- ✅ Chuẩn W3C, tương thích Web Semantic
- ✅ Hỗ trợ SPARQL queries phức tạp
- ✅ Liên kết với Wikidata, DBpedia
- ✅ Mở rộng dễ dàng với custom properties

---

## 5. RDF/Linked Data

### 📚 Prefixes được sử dụng

#### **Cho dữ liệu địa điểm (cleaned/*.ttl):**

| Prefix    | URI                                                      | Mục đích                                            |
| --------- | -------------------------------------------------------- | --------------------------------------------------- |
| `ext:`    | `http://opendatafithou.org/def/extension/`               | Custom properties (operator, address_details, etc.) |
| `fiware:` | `https://smartdatamodels.org/dataModel.PointOfInterest/` | FIWARE Smart City data model                        |
| `geo:`    | `http://www.opengis.net/ont/geosparql#`                  | GeoSPARQL cho dữ liệu không gian                    |
| `schema:` | `http://schema.org/`                                     | Schema.org vocabulary                               |
| `xsd:`    | `http://www.w3.org/2001/XMLSchema#`                      | XML Schema datatypes                                |

#### **Cho topology (topology.ttl):**

| Prefix    | URI                                        | Mục đích                                           |
| --------- | ------------------------------------------ | -------------------------------------------------- |
| `schema:` | `http://schema.org/`                       | Spatial relationships (containedInPlace, isNextTo) |
| `ext:`    | `http://opendatafithou.org/def/extension/` | Custom predicates (servesEmergency, etc.)          |

#### **Cho IoT infrastructure:**

| Prefix      | URI                                      | Mục đích                                           |
| ----------- | ---------------------------------------- | -------------------------------------------------- |
| `fiware:`   | `https://uri.fiware.org/ns/data-models#` | FIWARE IoT models                                  |
| `property:` | `http://opendatafithou.org/property/`    | IoT properties (temperature, humidity, airQuality) |
| `sf:`       | `http://www.opengis.net/ont/sf#`         | Simple Features geometry                           |

### 🔍 SPARQL Query Examples

#### **Tìm tất cả ATM trong bán kính 1km:**
```sparql
PREFIX schema: <http://schema.org/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>

SELECT ?atm ?name ?lat ?lon
WHERE {
  ?atm a schema:FinancialService ;
       schema:name ?name ;
       schema:latitude ?lat ;
       schema:longitude ?lon .
  
  FILTER(?lat > 21.02 && ?lat < 21.04)
  FILTER(?lon > 105.83 && ?lon < 105.85)
}
```

#### **Tìm trường học có bệnh viện gần nhất:**
```sparql
PREFIX schema: <http://schema.org/>

SELECT ?school ?hospital
WHERE {
  ?school a schema:School .
  ?hospital a schema:Hospital .
  ?school schema:isNextTo ?hospital .
}
LIMIT 10
```

---

## 6. Ontology & Schema

### 📜 Ontology Definition

**File:** `data/ontology.owl`

Định nghĩa các class, properties và relationships cho dự án.

### 🏷️ Schema.org Types Mapping

| OSM Amenity  | Schema.org Type     | RDF Class                  |
| ------------ | ------------------- | -------------------------- |
| `atm`        | `FinancialService`  | `schema:FinancialService`  |
| `bank`       | `BankOrCreditUnion` | `schema:BankOrCreditUnion` |
| `hospital`   | `Hospital`          | `schema:Hospital`          |
| `school`     | `School`            | `schema:School`            |
| `restaurant` | `Restaurant`        | `schema:Restaurant`        |
| `cafe`       | `CafeOrCoffeeShop`  | `schema:CafeOrCoffeeShop`  |
| `bus_stop`   | `BusStop`           | `schema:BusStop`           |
| `park`       | `Park`              | `schema:Park`              |
| `pharmacy`   | `Pharmacy`          | `schema:Pharmacy`          |
| `police`     | `PoliceStation`     | `schema:PoliceStation`     |
| ...          | ...                 | ...                        |

**Full mapping:** Xem `config/config_amenity_types.py`

### 🔧 Custom Extensions

**Namespace:** `http://opendatafithou.org/def/extension/`

Các thuộc tính mở rộng:
- `ext:operator` - Đơn vị vận hành
- `ext:addressDetails` - Chi tiết địa chỉ
- `ext:servesEmergency` - Phục vụ khẩn cấp
- `ext:withinWalkingDistance` - Trong phạm vi đi bộ
- `ext:hasNearbyService` - Có dịch vụ gần đó

---

## 7. Topology Relationships

### 📐 Khái niệm

**Topology** là mối quan hệ không gian giữa các địa điểm, giúp trả lời các câu hỏi:
- ❓ Trạm xe buýt nào phục vụ trường học này?
- ❓ Có nhà thuốc nào gần bệnh viện không?
- ❓ Những quán cà phê nào tạo thành cụm thương mại?

### 📊 Thống kê

```
📍 Tổng số mối quan hệ: 84,397
📍 Số địa điểm được liên kết: 11,170

Phân bố theo khoảng cách:
├─ ≤ 50m (containedInPlace):     7,388 mối quan hệ (8.8%)
├─ 50-200m (isNextTo):          55,884 mối quan hệ (66.2%)
└─ >200m (domain-specific):     21,125 mối quan hệ (25.0%)
```

### 🔗 Ba loại Predicates

#### 1. **`schema:containedInPlace`** (≤50m)
**Ý nghĩa:** Nằm BÊN TRONG hoặc SÁT CẠNH

**Ví dụ:**
```turtle
<atm:12895021294> schema:containedInPlace <fuel_station:729787543> .
# ATM nằm trong trạm xăng
```

#### 2. **`schema:isNextTo`** (50-200m)
**Ý nghĩa:** Ở GẦN nhau, trong phạm vi đi bộ ngắn

**Ví dụ:**
```turtle
<school:456> schema:isNextTo <bus_stop:789> .
# Trường học gần trạm xe buýt
```

#### 3. **Domain-specific predicates** (>200m)
**Các predicate tùy chỉnh:**
- `ext:servesEmergency` - Phục vụ khẩn cấp (hospital ↔ police)
- `ext:servesEducation` - Phục vụ giáo dục (bus_stop → school)
- `ext:withinCommercialZone` - Trong khu thương mại (cafe ↔ restaurant)

**Tài liệu chi tiết:** `datav2/README_TOPOLOGY.md`

---

## 8. Danh sách đầy đủ amenity types

### 📋 28 Loại địa điểm (theo nhóm)

#### 💰 **Tài chính & Dịch vụ cơ bản** (3 types)
1. `atm` → `schema:FinancialService`
2. `bank` → `schema:BankOrCreditUnion`
3. `post_office` → `schema:PostOffice`

#### 🚗 **Giao thông & Vận tải** (4 types)
4. `bus_stop` → `schema:BusStop`
5. `parking` → `schema:ParkingFacility`
6. `fuel_station` → `schema:GasStation`
7. `charging_station` → `schema:AutomotiveBusiness`

#### 🏥 **Y tế & Khẩn cấp** (5 types)
8. `hospital` → `schema:Hospital`
9. `clinic` → `schema:MedicalClinic`
10. `pharmacy` → `schema:Pharmacy`
11. `police` → `schema:PoliceStation`
12. `fire_station` → `schema:FireStation`

#### 🚰 **Tiện ích công cộng & Vệ sinh** (3 types)
13. `drinking_water` → `schema:DrinkingWaterDispenser`
14. `public_toilet` → `schema:PublicToilet`
15. `waste_basket` → `schema:WasteContainer`

#### 🎓 **Giáo dục** (4 types)
16. `school` → `schema:School`
17. `kindergarten` → `schema:Preschool`
18. `university` → `schema:CollegeOrUniversity`
19. `library` → `schema:Library`

#### 🎡 **Giải trí & Công viên** (3 types)
20. `park` → `schema:Park`
21. `playground` → `schema:Playground`
22. `community_centre` → `schema:CommunityCenter`

#### 🛒 **Mua sắm & Thực phẩm** (5 types)
23. `marketplace` → `schema:Market`
24. `supermarket` → `schema:GroceryStore`
25. `convenience_store` → `schema:ConvenienceStore`
26. `cafe` → `schema:CafeOrCoffeeShop`
27. `restaurant` → `schema:Restaurant`

#### 🏗️ **Hạ tầng khác** (1 type)
28. `warehouse` → `schema:Warehouse`

**Source:** `config/config_amenity_types.py`

---

## 9. Sử dụng dữ liệu

### Python Examples

#### **Đọc GeoJSON:**
```python
import geopandas as gpd

# Đọc file GeoJSON
gdf = gpd.read_file("data/atm.geojson")
print(gdf.head())

# Lọc theo địa điểm
hanoi_atms = gdf[gdf['name'].str.contains('Hanoi', na=False)]
```

#### **Đọc RDF/Turtle:**
```python
from rdflib import Graph

# Load RDF graph
g = Graph()
g.parse("datav2/cleaned/data_hanoi_atm.ttl", format="turtle")

# Query SPARQL
query = """
PREFIX schema: <http://schema.org/>
SELECT ?name ?lat ?lon
WHERE {
  ?atm schema:name ?name ;
       schema:latitude ?lat ;
       schema:longitude ?lon .
}
LIMIT 10
"""

results = g.query(query)
for row in results:
    print(f"{row.name}: ({row.lat}, {row.lon})")
```

### 🔌 REST API Examples

#### **NestJS Backend Endpoints:**

```bash
# Get all ATMs
GET http://localhost:3000/fuseki/atms

# Nearby search
GET http://localhost:3000/fuseki/atms/nearby?lon=105.8342&lat=21.0278&radiusKm=1

# Custom SPARQL query
POST http://localhost:3000/fuseki/query
Content-Type: application/json

{
  "query": "SELECT ?atm WHERE { ?atm a schema:FinancialService } LIMIT 10"
}
```

### 🗺️ Frontend (React) Integration

```typescript
// src/utils/nearbyApi.ts
export const fetchNearbyPlaces = async (
  lon: number,
  lat: number,
  radiusKm: number,
  amenity: string
) => {
  const response = await fetch(
    `http://localhost:3000/fuseki/${amenity}/nearby?lon=${lon}&lat=${lat}&radiusKm=${radiusKm}`
  );
  return await response.json();
};
```

---
