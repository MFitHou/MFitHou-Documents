# Tổng quan Kiến trúc Hệ thống

## System Architecture

MFitHou sử dụng kiến trúc **3-tier** với Linked Open Data principles.

```mermaid
graph TB
    subgraph "External Data Sources"
        OSM[OpenStreetMap<br/>Overpass API]
        WD[Wikidata<br/>SPARQL Endpoint]
    end
    
    subgraph "Data Layer"
        DP[Data Pipeline<br/>Python + Jupyter]
        FUSEKI[(Apache Jena Fuseki<br/>RDF Triplestore)]
    end
    
    subgraph "Application Layer"
        BE[Backend API<br/>NestJS + TypeScript]
        FE[Frontend Web<br/>React + Leaflet]
    end
    
    subgraph "End Users"
        USER[Web Browser]
    end
    
    OSM -->|GeoJSON| DP
    WD -->|RDF/JSON| DP
    DP -->|RDF/Turtle| FUSEKI
    FUSEKI <-->|SPARQL| BE
    BE <-->|REST API| FE
    FE -->|HTML/CSS/JS| USER
    
    style FUSEKI fill:#4CAF50,color:#fff
    style BE fill:#2196F3,color:#fff
    style FE fill:#FF9800,color:#fff
    style DP fill:#9C27B0,color:#fff
```

## Component Overview

### 1. Data Pipeline (OpenDataFitHou)
**Repository:** [OpenDataFitHou](https://github.com/MFitHou/OpenDataFitHou)

```mermaid
graph LR
    A[Overpass API] -->|GeoJSON| B[OverpassApi.ipynb]
    B -->|Raw Data| C[ParseRDF.ipynb]
    C -->|RDF/Turtle| D[Fuseki Upload]
```

**Tech Stack:**
- Python 3.9+
- Jupyter Notebook
- RDFLib 7.1.1
- Requests 2.32.3

### 2. RDF Triplestore (Fuseki)
**Server:** Apache Jena Fuseki 5.x

```mermaid
graph TB
    A[HTTP Requests] -->|SPARQL Query| B[Query Engine]
    B --> C[TDB2 Storage]
    C --> D[RDF Triples]
```

**Features:**
- SPARQL 1.1 endpoint
- TDB2 persistent storage
- RDFS inference
- Web UI admin

### 3. Backend API (open_data_backend)
**Repository:** [open_data_backend](https://github.com/MFitHou/open_data_backend)

```mermaid
graph LR
    A[REST API] -->|HTTP| B[Controllers]
    B --> C[Services]
    C -->|SPARQL| D[Fuseki Client]
    D --> E[Apache Fuseki]
```

**Tech Stack:**
- NestJS 11
- TypeScript 5.7
- Axios HTTP client
- Node.js 18+

### 4. Frontend Web (open_data_map)
**Repository:** [open_data_map](https://github.com/MFitHou/open_data_map)

```mermaid
graph LR
    A[React App] --> B[Pages/Routes]
    B --> C[Components]
    C --> D[Hooks/Services]
    D -->|API Calls| E[Backend REST API]
```

**Tech Stack:**
- React 19.1.1
- TypeScript 5.8.3
- Vite 7.1.7
- Leaflet 1.9.4
- Material-UI 6

## Data Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Fuseki
    participant OSM

    User->>Frontend: Tìm "bệnh viện gần đây"
    Frontend->>Backend: GET /fuseki/hospitals-nearby?lat=21&long=105&radius=2
    Backend->>Backend: Build SPARQL query
    Backend->>Fuseki: SPARQL SELECT query
    Fuseki->>Fuseki: Query RDF triples
    Fuseki-->>Backend: Results (JSON)
    Backend->>Backend: Calculate distances (Haversine)
    Backend->>Backend: Sort by distance
    Backend-->>Frontend: JSON response
    Frontend->>Frontend: Render markers on map
    Frontend-->>User: Display results
```

## Deployment Architecture

```mermaid
graph TB
    subgraph "Production Environment"
        subgraph "Frontend Server"
            NGINX[Nginx<br/>Static Files]
        end
        
        subgraph "Backend Server"
            PM2[PM2<br/>Process Manager]
            NODE[Node.js<br/>NestJS App]
        end
        
        subgraph "Data Server"
            FUSEKI_PROD[Fuseki Server<br/>Port 3030]
            TDB[(TDB2 Storage)]
        end
    end
    
    USER[End Users] -->|HTTPS| NGINX
    NGINX -->|Proxy| NODE
    PM2 --> NODE
    NODE -->|SPARQL| FUSEKI_PROD
    FUSEKI_PROD --> TDB
```

---

Xem chi tiết:
- [Component Diagram](component-diagram.md)
- [Data Flow](data-flow.md)
- [Technology Stack](technology-stack.md)
