# API Reference

Tài liệu đầy đủ về NGSI-LD API và SPARQL endpoints của OpenDataMap.

## Tổng quan

OpenDataMap cung cấp 3 loại API tuân thủ chuẩn NGSI-LD:

1. **NGSI-LD Context API** - Truy xuất thông tin thực thể hiện tại
2. **NGSI-LD Temporal API** - Truy vấn dữ liệu lịch sử theo thời gian
3. **SPARQL API** - Truy vấn trực tiếp RDF triplestore

**Base URL:** `http://localhost:3000` (development)

**Production URL:** `https://api.mfithou.com`

**NGSI-LD Version:** v1.6.1

**Context:** `https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld`

## NGSI-LD Context API

### Authentication

Hiện tại API **không yêu cầu authentication** (public access).

!!! warning "Planned Feature"
    API key authentication sẽ được thêm trong phiên bản tương lai để rate limiting.

### 1. Truy xuất thực thể đơn

**Lấy trạng thái hiện tại của một thực thể (Context Snapshot)**

#### Endpoint

```
GET /ngsi-ld/v1/entities/{entityId}
```

#### Mục đích

Truy xuất **ảnh chụp nhanh hiện tại** của một thực thể, kết hợp:
- **Metadata tĩnh** từ Jena Fuseki (tên, vị trí, mối quan hệ)
- **Giá trị IoT mới nhất** từ InfluxDB (nhiệt độ, AQI, mật độ giao thông)


#### Example Request

```bash
GET /ngsi-ld/v1/entities/urn:ngsi-ld:Device:Hanoi:station:Lang
Accept: application/ld+json
```

#### Example Response (Normalized Format)

```json
{
  "@context": [
    "https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld",
    {
      "sosa": "http://www.w3.org/ns/sosa/",
      "schema": "http://schema.org/",
      "property": "http://opendatafithou.org/property/"
    }
  ],
  "id": "urn:ngsi-ld:Device:Hanoi:station:Lang",
  "type": "Device",
  "name": {
    "type": "Property",
    "value": "Trạm Láng - Trạm quan trắc IoT"
  },
  "description": {
    "type": "Property",
    "value": "Trạm IoT đa cảm biến giám sát chất lượng không khí, thời tiết và giao thông"
  },
  "location": {
    "type": "GeoProperty",
    "value": {
      "type": "Point",
      "coordinates": [105.8084, 21.0245]
    }
  },
  "serialNumber": {
    "type": "Property",
    "value": "STATION-LANG-2025"
  },
  "temperature": {
    "type": "Property",
    "value": 28.5,
    "unitCode": "CEL",
    "observedAt": "2025-12-01T10:30:00Z"
  },
  "humidity": {
    "type": "Property",
    "value": 72,
    "unitCode": "P1",
    "observedAt": "2025-12-01T10:30:00Z"
  },
  "pm25": {
    "type": "Property",
    "value": 45.3,
    "unitCode": "GQ",
    "observedAt": "2025-12-01T10:30:00Z"
  },
  "aqi": {
    "type": "Property",
    "value": 89,
    "observedAt": "2025-12-01T10:30:00Z"
  },
  "hosts": {
    "type": "Relationship",
    "object": [
      "http://opendatafithou.org/sensor/Lang:Weather",
      "http://opendatafithou.org/sensor/Lang:AirQuality",
      "http://opendatafithou.org/sensor/Lang:Traffic"
    ]
  }
}
```

#### HTTP Status Codes

| Code | Status | Description |
|------|--------|-------------|
| 200 | Success | Entity found and returned |
| 404 | Not Found | Entity ID does not exist |
| 400 | Bad Request | Invalid entity ID format |
| 500 | Internal Server Error | Database connection error |

---

### 2. Truy vấn thực thể

**Khám phá và lọc thực thể (Discovery & Geo-fencing)**

#### Endpoint

```
GET /ngsi-ld/v1/entities
```

#### Mục đích

Tìm kiếm các thực thể khớp với tiêu chí cụ thể:
- Lọc theo **loại** (e.g., tất cả ATM, tất cả trạm IoT)
- Lọc theo **thuộc tính** (e.g., AQI > 100)
- Lọc theo **vị trí địa lý** (e.g., trong vòng 1km từ một điểm)

#### Query Parameters

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `type` | Query | ✅ Yes | Loại thực thể cần lọc | `PointOfInterest`, `Device` |
| `q` | Query | ❌ No | Query language filter (simple expressions) | `aqi>100`, `temperature>=30` |
| `georel` | Query | ❌ No | Spatial relationship | `near;maxDistance==1000` (1km) |
| `geometry` | Query | ❌ No | GeoJSON geometry type | `Point`, `Polygon` |
| `coordinates` | Query | ❌ No | Coordinates for spatial query | `[105.8245,21.0285]` |
| `limit` | Query | ❌ No | Maximum number of results (default: 20) | `50` |
| `offset` | Query | ❌ No | Pagination offset | `20` |
| `attrs` | Query | ❌ No | Attributes to include (comma-separated) | `name,location,aqi` |

#### Example 1: Find all ATMs

```bash
GET /ngsi-ld/v1/entities?type=PointOfInterest&q=amenity=="atm"
Accept: application/ld+json
```

#### Example 2: Find sensors with high AQI

```bash
GET /ngsi-ld/v1/entities?type=Device&q=aqi>100
Accept: application/ld+json
```

#### Example 3: Geo-fencing - Find POIs within 1km

**Scenario:** Tìm tất cả POI trong vòng 1km từ Hồ Hoàn Kiếm (21.0285°N, 105.8542°E).

```bash
GET /ngsi-ld/v1/entities?type=PointOfInterest&georel=near;maxDistance==1000&geometry=Point&coordinates=[105.8542,21.0285]
Accept: application/ld+json
```

#### Backend Implementation Notes

Đối với geo-spatial queries, backend phải:

1. **Extract coordinates** từ query parameters
2. **Convert to SPARQL Geo query** sử dụng GeoSPARQL functions:

```sparql
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX geof: <http://www.opengis.net/def/function/geosparql/>

SELECT ?entity ?name ?location
WHERE {
  ?entity a schema:PointOfInterest ;
          schema:name ?name ;
          geo:hasGeometry ?geom .
  
  ?geom geo:asWKT ?location .
  
  FILTER(geof:distance(?location, "POINT(105.8542 21.0285)"^^geo:wktLiteral, 
         <http://www.opengis.net/def/uom/OGC/1.0/metre>) < 1000)
}
```

3. **Transform SPARQL results** to NGSI-LD format
4. **Sort by distance** (optional)

---

## NGSI-LD Temporal API

### 3. Temporal Evolution

**Lấy dữ liệu time-series lịch sử (Historical Data)**

#### Endpoint

```
GET /ngsi-ld/v1/temporal/entities/{entityId}
```

#### Mục đích

Truy xuất **giá trị lịch sử** của các thuộc tính thực thể trong một khoảng thời gian. Endpoint này truy vấn InfluxDB cho time-series data.

#### Parameters

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `entityId` | Path | ✅ Yes | URN của thực thể | `urn:ngsi-ld:Device:Hanoi:station:Lang` |
| `timeAt` | Query | ✅ Yes | Start time (ISO 8601) | `2025-11-01T00:00:00Z` |
| `endTimeAt` | Query | ✅ Yes | End time (ISO 8601) | `2025-12-01T00:00:00Z` |
| `attrs` | Query | ❌ No | Attributes (comma-separated) | `temperature,humidity,aqi` |
| `lastN` | Query | ❌ No | Only return last N values | `100` |

#### Example Request

```bash
GET /ngsi-ld/v1/temporal/entities/urn:ngsi-ld:Device:Hanoi:station:Lang?timeAt=2025-11-01T00:00:00Z&endTimeAt=2025-12-01T00:00:00Z&attrs=temperature,aqi
Accept: application/ld+json
```

#### Example Response (Temporal Representation)

```json
{
  "@context": [
    "https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld",
    {
      "property": "http://opendatafithou.org/property/"
    }
  ],
  "id": "urn:ngsi-ld:Device:Hanoi:station:Lang",
  "type": "Device",
  "temperature": [
    {
      "type": "Property",
      "value": 25.3,
      "unitCode": "CEL",
      "observedAt": "2025-11-01T00:00:00Z"
    },
    {
      "type": "Property",
      "value": 26.1,
      "unitCode": "CEL",
      "observedAt": "2025-11-01T01:00:00Z"
    },
    {
      "type": "Property",
      "value": 27.5,
      "unitCode": "CEL",
      "observedAt": "2025-11-01T02:00:00Z"
    }
  ],
  "aqi": [
    {
      "type": "Property",
      "value": 78,
      "observedAt": "2025-11-01T00:00:00Z"
    },
    {
      "type": "Property",
      "value": 82,
      "observedAt": "2025-11-01T01:00:00Z"
    },
    {
      "type": "Property",
      "value": 95,
      "observedAt": "2025-11-01T02:00:00Z"
    }
  ]
}
```

#### Backend Implementation Notes

Temporal endpoint requires:

1. **Query InfluxDB** using Flux query language:

```flux
from(bucket: "opendatafithou")
  |> range(start: 2025-11-01T00:00:00Z, stop: 2025-12-01T00:00:00Z)
  |> filter(fn: (r) => r["station"] == "Lang")
  |> filter(fn: (r) => r["_field"] == "temperature" or r["_field"] == "aqi")
  |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")
```

2. **Transform results** to NGSI-LD temporal format
3. **Group by attribute name** (temperature, aqi, etc.)
4. **Sort by timestamp** (ascending)

---

## Response Formats

### Success Response

```json
{
  "@context": "https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld",
  "id": "urn:ngsi-ld:Entity:123",
  "type": "EntityType",
  ...
}
```

### Error Response

```json
{
  "type": "https://uri.etsi.org/ngsi-ld/errors/ResourceNotFound",
  "title": "Resource Not Found",
  "detail": "Entity urn:ngsi-ld:Entity:123 does not exist"
}
```

### Error Types

| Type | HTTP Status | Description |
|------|-------------|-------------|
| `ResourceNotFound` | 404 | Entity không tồn tại |
| `BadRequestData` | 400 | Parameters không hợp lệ |
| `InternalError` | 500 | Lỗi server nội bộ |
| `TooManyResults` | 403 | Quá nhiều kết quả (vượt limit) |
| `InvalidRequest` | 400 | Format request không đúng |

## SPARQL API

### Direct SPARQL Endpoint

**Endpoint:** `http://localhost:3030/mfithou/query`

**Method:** GET hoặc POST

### Prefixes

```sparql
PREFIX schema: <http://schema.org/>
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
```

### Common Queries

#### Query 1: Tất cả bệnh viện

```sparql
PREFIX schema: <http://schema.org/>

SELECT ?hospital ?name ?lat ?long WHERE {
  ?hospital a schema:Hospital ;
            schema:name ?name ;
            geo:lat ?lat ;
            geo:long ?long .
}
LIMIT 100
```

#### Query 2: ATM của một ngân hàng cụ thể

```sparql
PREFIX schema: <http://schema.org/>

SELECT ?atm ?name ?address WHERE {
  ?atm a schema:AutomatedTeller ;
       schema:name ?name ;
       schema:address ?address .
  
  FILTER(CONTAINS(LCASE(?name), "vietcombank"))
}
```

#### Query 3: POI có khoảng cách

```sparql
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX schema: <http://schema.org/>

SELECT ?poi ?name ?lat ?long 
       (ABS(?lat - 21.0285) + ABS(?long - 105.8542) as ?distance)
WHERE {
  ?poi a schema:Hospital ;
       schema:name ?name ;
       geo:lat ?lat ;
       geo:long ?long .
  
  FILTER(
    ?lat >= 21.0185 && ?lat <= 21.0385 &&
    ?long >= 105.8442 && ?long <= 105.8642
  )
}
ORDER BY ?distance
LIMIT 10
```

#### Query 4: Đếm POI theo loại

```sparql
PREFIX schema: <http://schema.org/>

SELECT ?type (COUNT(?poi) as ?count) WHERE {
  ?poi a ?type .
  
  FILTER(?type IN (
    schema:Hospital,
    schema:AutomatedTeller,
    schema:BusStop,
    schema:PublicToilet,
    schema:Playground
  ))
}
GROUP BY ?type
ORDER BY DESC(?count)
```

#### Query 5: POI với Wikidata links

```sparql
PREFIX schema: <http://schema.org/>
PREFIX owl: <http://www.w3.org/2002/07/owl#>

SELECT ?poi ?name ?wikidataId WHERE {
  ?poi a schema:Hospital ;
       schema:name ?name ;
       owl:sameAs ?wikidataUri .
  
  BIND(STRAFTER(STR(?wikidataUri), "http://www.wikidata.org/entity/") as ?wikidataId)
}
```

### Query via cURL

**GET Request:**

```bash
curl -G "http://localhost:3030/mfithou/query" \
  --data-urlencode "query=SELECT * WHERE { ?s ?p ?o } LIMIT 10"
```

**POST Request:**

```bash
curl -X POST "http://localhost:3030/mfithou/query" \
  -H "Content-Type: application/sparql-query" \
  -d "SELECT * WHERE { ?s ?p ?o } LIMIT 10"
```

### Query với Python

```python
from SPARQLWrapper import SPARQLWrapper, JSON

sparql = SPARQLWrapper("http://localhost:3030/mfithou/query")
sparql.setQuery("""
    PREFIX schema: <http://schema.org/>
    SELECT ?hospital ?name WHERE {
        ?hospital a schema:Hospital ;
                  schema:name ?name .
    }
    LIMIT 10
""")
sparql.setReturnFormat(JSON)

results = sparql.query().convert()
for result in results["results"]["bindings"]:
    print(result["name"]["value"])
```

### Query với JavaScript

```javascript
async function querySparql(query) {
  const response = await fetch('http://localhost:3030/mfithou/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/sparql-query',
      'Accept': 'application/sparql-results+json'
    },
    body: query
  });
  
  return response.json();
}

// Usage
const query = `
  PREFIX schema: <http://schema.org/>
  SELECT ?hospital ?name WHERE {
    ?hospital a schema:Hospital ;
              schema:name ?name .
  }
  LIMIT 10
`;

const results = await querySparql(query);
console.log(results);
```

## InfluxDB API (IoT Data)

### Query Time-Series Data

**Endpoint:** `GET /influxdb/sensor-data`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sensorId` | string | Yes | Sensor identifier |
| `start` | string | No | Start time (ISO 8601), mặc định: -1h |
| `stop` | string | No | Stop time (ISO 8601), mặc định: now |

**Example:**

```bash
curl "http://localhost:3000/influxdb/sensor-data?sensorId=temp_sensor_01&start=-24h"
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "time": "2025-12-10T10:00:00Z",
      "value": 25.3,
      "unit": "celsius"
    },
    {
      "time": "2025-12-10T10:05:00Z",
      "value": 25.5,
      "unit": "celsius"
    }
  ]
}
```

## Rate Limiting

!!! info "Current Status"
    Rate limiting chưa được implement. Sẽ có trong phiên bản production.

**Planned limits:**
- **Unauthenticated**: 100 requests/hour
- **With API key**: 1000 requests/hour

## CORS Policy

CORS được enable cho tất cả origins trong development:

```typescript
app.enableCors({
  origin: '*',
  methods: 'GET,POST',
  credentials: false
});
```

Production sẽ restrict origins.

## Best Practices

### 1. Caching

Cache kết quả ở client side để giảm requests:

```javascript
const cache = new Map();

async function fetchHospitals(lat, long) {
  const key = `${lat},${long}`;
  
  if (cache.has(key)) {
    return cache.get(key);
  }
  
  const data = await fetch(`/fuseki/hospitals-nearby?lat=${lat}&long=${long}`);
  cache.set(key, data);
  
  return data;
}
```

### 2. Batching

Gộp nhiều POI types vào 1 request với custom SPARQL:

```sparql
SELECT ?poi ?type ?name ?lat ?long WHERE {
  ?poi a ?type ;
       schema:name ?name ;
       geo:lat ?lat ;
       geo:long ?long .
  
  FILTER(?type IN (schema:Hospital, schema:AutomatedTeller, schema:BusStop))
  FILTER(?lat >= 21.0 && ?lat <= 21.1)
}
```

### 3. Error Handling

Luôn handle errors gracefully:

```typescript
try {
  const response = await fetch('/fuseki/hospitals-nearby?lat=21&long=105');
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  const data = await response.json();
  
  if (!data.success) {
    console.error('API Error:', data.error);
    return [];
  }
  
  return data.data;
} catch (error) {
  console.error('Network Error:', error);
  return [];
}
```

### 4. Pagination

Đối với large result sets, sử dụng LIMIT và OFFSET:

```sparql
SELECT ?poi ?name WHERE {
  ?poi a schema:Hospital ;
       schema:name ?name .
}
ORDER BY ?name
LIMIT 50
OFFSET 0
```

## Testing APIs

### Postman Collection

Import collection từ: [postman_collection.json](https://github.com/MFitHou/open_data_backend/blob/main/postman_collection.json)

### cURL Examples

**Tất cả endpoints:**

```bash
# Hospitals
curl "http://localhost:3000/fuseki/hospitals-nearby?lat=21.0285&long=105.8542"

# ATMs
curl "http://localhost:3000/fuseki/atms-nearby?lat=21.0285&long=105.8542"

# Bus Stops
curl "http://localhost:3000/fuseki/bus-stops-nearby?lat=21.0285&long=105.8542"

# Toilets
curl "http://localhost:3000/fuseki/toilets-nearby?lat=21.0285&long=105.8542"

# Playgrounds
curl "http://localhost:3000/fuseki/playgrounds-nearby?lat=21.0285&long=105.8542"

# Custom Query
curl -X POST http://localhost:3000/fuseki/query \
  -H "Content-Type: application/json" \
  -d '{"query":"SELECT * WHERE { ?s ?p ?o } LIMIT 5"}'
```

## Resources

- 🏗️ [Architecture](../getting-started/architecture-overview.md)
- 💻 [Developer Guide](../developer-guide/index.md)
- 📊 [Data & RDF](../data-rdf/index.md)
- 📖 [User Guide](../user-guide/index.md)

## Support

- 💬 [GitHub Discussions](https://github.com/MFitHou/MFitHou-Documents/discussions)
- 🐛 [Report API Issues](https://github.com/MFitHou/open_data_backend/issues)
- 📧 Email: api@mfithou.com

---

**API Version:** 1.0.0  
**Last Updated:** December 10, 2025
