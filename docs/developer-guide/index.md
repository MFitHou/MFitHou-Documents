# Hướng dẫn Phát triển

Tài liệu dành cho developers muốn đóng góp hoặc mở rộng hệ thống OpenDataMap.

## Tổng quan

OpenDataMap là nền tảng Linked Open Data được xây dựng với kiến trúc 3 tầng:

- **Data Pipeline** (Python) - Thu thập và chuyển đổi dữ liệu
- **Backend API** (NestJS/TypeScript) - REST API và SPARQL endpoint
- **Frontend** (React/TypeScript) - Web interface

## Tech Stack

### Data Pipeline
- **Python 3.9+**
- **Jupyter Notebook** - Data exploration và ETL
- **SPARQLWrapper** - Truy vấn RDF
- **RDFLib** - Xử lý RDF/Turtle
- **Requests** - HTTP client

### Backend API
- **NestJS** - Node.js framework
- **TypeScript** - Type-safe JavaScript
- **Apache Jena Fuseki** - SPARQL endpoint
- **InfluxDB 2.x** - Time-series database

### Frontend
- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Leaflet** - Maps
- **Google Gemini API** - AI chatbot

## Cấu trúc Repository

```
MFitHou/
├── OpenDataFitHou/          # Data Pipeline
│   ├── OverpassApi.ipynb    # Thu thập OSM data
│   ├── ParseRDF.ipynb       # Chuyển đổi sang RDF
│   ├── iot_collector.py     # Thu thập IoT data
│   └── requirements.txt
│
├── open_data_backend/       # Backend API
│   ├── src/
│   │   ├── fuseki/         # SPARQL module
│   │   ├── influxdb/       # IoT data module
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
│
└── open_data_map/          # Frontend
    ├── src/
    │   ├── components/
    │   ├── services/
    │   └── App.tsx
    ├── package.json
    └── vite.config.ts
```

## Development Setup

### 1. Clone Repositories

```bash
# Data Pipeline
git clone https://github.com/MFitHou/OpenDataFitHou.git

# Backend
git clone https://github.com/MFitHou/open_data_backend.git

# Frontend
git clone https://github.com/MFitHou/open_data_map.git
```

### 2. Cài đặt Dependencies

**Data Pipeline:**
```bash
cd OpenDataFitHou
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**Backend:**
```bash
cd open_data_backend
npm install
```

**Frontend:**
```bash
cd open_data_map
npm install
```

### 3. Environment Variables

**Backend `.env`:**
```bash
FUSEKI_SERVER_URL=http://localhost:3030
FUSEKI_DATASET=mfithou
INFLUXDB_URL=http://localhost:8086
INFLUXDB_TOKEN=your_token
INFLUXDB_ORG=MFitHou
INFLUXDB_BUCKET=iot-data
PORT=3000
NODE_ENV=development
```

**Frontend `.env`:**
```bash
VITE_BACKEND_URL=http://localhost:3000
VITE_GEMINI_API_KEY=your_api_key
```

### 4. Chạy Development Server

**Backend:**
```bash
npm run start:dev
```

**Frontend:**
```bash
npm run dev
```

## Coding Standards

### TypeScript/JavaScript

- **ESLint** + **Prettier** cho code formatting
- **Naming conventions**:
  - `camelCase` cho biến và functions
  - `PascalCase` cho classes và components
  - `UPPER_SNAKE_CASE` cho constants
- **Type safety**: Luôn định nghĩa types/interfaces

```typescript
// ✅ Good
interface Hospital {
  id: string;
  name: string;
  location: GeoPoint;
}

async function getHospitalsNearby(lat: number, long: number): Promise<Hospital[]> {
  // ...
}

// ❌ Bad
function getData(x, y) {
  // No types, unclear naming
}
```

### Python

- **PEP 8** style guide
- **Type hints** cho functions
- **Docstrings** cho modules và functions

```python
# ✅ Good
from typing import List, Dict

def fetch_osm_data(bbox: str, poi_type: str) -> List[Dict]:
    """
    Fetch POI data from OpenStreetMap.
    
    Args:
        bbox: Bounding box string "south,west,north,east"
        poi_type: Type of POI (e.g., "hospital", "atm")
    
    Returns:
        List of POI dictionaries
    """
    # ...
```

### Commit Messages

Format: `<type>(<scope>): <subject>`

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

**Examples:**
```
feat(backend): add hospitals-nearby endpoint
fix(frontend): resolve map marker clustering issue
docs(api): update SPARQL query examples
```

## Git Workflow

### Branching Strategy

```
main
  ├── develop
  │   ├── feature/add-poi-filtering
  │   ├── feature/chatbot-integration
  │   └── bugfix/map-loading-issue
  └── hotfix/critical-security-patch
```

### Pull Request Process

1. **Fork** repository
2. **Create branch** từ `develop`
3. **Implement changes** với tests
4. **Commit** theo convention
5. **Push** và tạo PR
6. **Code review** bởi maintainers
7. **Merge** sau khi approved

## Testing

### Backend Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:cov
```

### Frontend Tests

```bash
# Unit tests
npm run test

# Component tests
npm run test:components
```

### Python Tests

```bash
# Run pytest
pytest tests/

# With coverage
pytest --cov=src tests/
```

## API Development

### Thêm Endpoint Mới

**1. Tạo DTO (Data Transfer Object):**

```typescript
// src/fuseki/dto/query-nearby.dto.ts
export class QueryNearbyDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  long: number;

  @IsNumber()
  @Min(0.1)
  @Max(10)
  radius: number;
}
```

**2. Tạo Service:**

```typescript
// src/fuseki/fuseki.service.ts
async querySchoolsNearby(lat: number, long: number, radius: number) {
  const query = `
    PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
    PREFIX schema: <http://schema.org/>
    
    SELECT ?school ?name ?lat ?long WHERE {
      ?school a schema:School ;
              schema:name ?name ;
              geo:lat ?lat ;
              geo:long ?long .
      
      FILTER(
        ?lat >= ${lat - radius} && ?lat <= ${lat + radius} &&
        ?long >= ${long - radius} && ?long <= ${long + radius}
      )
    }
  `;
  
  return this.executeSparqlQuery(query);
}
```

**3. Tạo Controller:**

```typescript
// src/fuseki/fuseki.controller.ts
@Get('schools-nearby')
async getSchoolsNearby(@Query() query: QueryNearbyDto) {
  return this.fusekiService.querySchoolsNearby(
    query.lat,
    query.long,
    query.radius
  );
}
```

## RDF Data Development

### Thêm POI Type Mới

**1. Định nghĩa Ontology:**

```turtle
@prefix schema: <http://schema.org/> .
@prefix geo: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix mfh: <http://mfithou.com/ontology#> .

mfh:Restaurant a rdfs:Class ;
    rdfs:label "Restaurant"@en ;
    rdfs:comment "A place where meals are served"@en ;
    rdfs:subClassOf schema:FoodEstablishment .
```

**2. Thu thập Data:**

```python
# OverpassApi.ipynb
overpass_query = """
[out:json];
area["name"="Hanoi"]->.searchArea;
(
  node["amenity"="restaurant"](area.searchArea);
  way["amenity"="restaurant"](area.searchArea);
);
out body;
"""
```

**3. Parse sang RDF:**

```python
# ParseRDF.ipynb
from rdflib import Graph, Namespace, Literal, URIRef

g = Graph()
SCHEMA = Namespace("http://schema.org/")
GEO = Namespace("http://www.w3.org/2003/01/geo/wgs84_pos#")

for poi in data:
    restaurant_uri = URIRef(f"http://mfithou.com/resource/restaurant/{poi['id']}")
    
    g.add((restaurant_uri, RDF.type, SCHEMA.Restaurant))
    g.add((restaurant_uri, SCHEMA.name, Literal(poi['name'])))
    g.add((restaurant_uri, GEO.lat, Literal(poi['lat'])))
    g.add((restaurant_uri, GEO.long, Literal(poi['lon'])))
```

## Deployment

### Backend (Production)

```bash
# Build
npm run build

# Run
npm run start:prod
```

### Frontend (Production)

```bash
# Build
npm run build

# Deploy dist/ folder to web server
```

### Docker (Optional)

```bash
# Backend
docker build -t mfithou-backend .
docker run -p 3000:3000 mfithou-backend

# Frontend
docker build -t mfithou-frontend .
docker run -p 80:80 mfithou-frontend
```

## Contributing

### Quy trình đóng góp

1. **Fork** repository
2. **Tạo issue** mô tả feature/bug
3. **Implement** với tests
4. **Submit PR** với mô tả chi tiết
5. **Respond** to review comments
6. **Merge** sau khi approved

### Code Review Checklist

- [ ] Code follows style guide
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No breaking changes (hoặc đã document)
- [ ] Performance impact đã xem xét

## Resources

- 📖 [API Reference](../api-reference/index.md)
- 📊 [Data & RDF](../data-rdf/index.md)
- 🏗️ [Architecture](../getting-started/architecture-overview.md)
- 📋 [License](../policies/index.md)

## Support

- 💬 [GitHub Discussions](https://github.com/MFitHou/MFitHou-Documents/discussions)
- 🐛 [Report Issues](https://github.com/MFitHou/MFitHou-Documents/issues)
- 📧 Email: dev@mfithou.com

---

**Happy Coding! 🚀**
