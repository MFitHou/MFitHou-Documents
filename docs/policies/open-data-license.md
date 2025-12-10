# Giấy phép Dữ liệu Mở (Open Data License)

## Tổng quan

Dữ liệu được cung cấp bởi **OpenDataMap** tuân thủ các nguyên tắc **Open Data** và **Linked Open Data (LOD)**. Chúng tôi kết hợp dữ liệu từ nhiều nguồn với các giấy phép mở khác nhau, đảm bảo tính minh bạch và khả năng tái sử dụng.

## Nguồn dữ liệu và Giấy phép

### 1. OpenStreetMap (OSM)

<div class="grid cards" markdown>

- :fontawesome-solid-map-location-dot: **OpenStreetMap**

    ---
    
    Dữ liệu địa lý chính (POI, roads, buildings)
    
    **Giấy phép:** [Open Database License (ODbL) v1.0](https://opendatacommons.org/licenses/odbl/)
    
    **Yêu cầu:**
    
    - ✅ Attribution: © OpenStreetMap contributors
    - ✅ Share-Alike: Dữ liệu phái sinh dùng ODbL
    - ✅ Công khai thay đổi
    
    **Trích dẫn:**
    ```
    © OpenStreetMap contributors
    Data available under the Open Database License
    https://www.openstreetmap.org/copyright
    ```

</div>

### 2. Wikidata

<div class="grid cards" markdown>

- :material-wikipedia: **Wikidata**

    ---
    
    Dữ liệu liên kết (entity linking, enrichment)
    
    **Giấy phép:** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
    
    **Yêu cầu:**
    
    - ❌ Không bắt buộc attribution
    - ❌ Không bắt buộc share-alike
    - ✅ Public Domain
    
    **Trích dẫn (khuyến nghị):**
    ```
    Data from Wikidata
    Licensed under CC0 1.0 Universal
    https://www.wikidata.org/
    ```

</div>

### 3. RDF/Turtle Chuyển đổi

<div class="grid cards" markdown>

- :material-file-code: **Dữ liệu RDF**

    ---
    
    Dữ liệu được chuyển đổi từ OSM sang RDF/Turtle
    
    **Giấy phép:** [ODbL v1.0](https://opendatacommons.org/licenses/odbl/)
    
    **Kế thừa từ:** OpenStreetMap
    
    **Định dạng:**
    
    - RDF/Turtle (.ttl)
    - JSON-LD (.jsonld)
    - N-Triples (.nt)
    - RDF/XML (.rdf)
    
    **Trích dẫn:**
    ```
    Data converted and provided by OpenDataMap
    Original data © OpenStreetMap contributors
    Licensed under ODbL v1.0
    https://github.com/MFitHou
    ```

</div>

### 4. OpenAQ (Tham khảo)

<div class="grid cards" markdown>

- :material-cloud-outline: **OpenAQ**

    ---
    
    Dữ liệu chất lượng không khí (nếu tích hợp)
    
    **Giấy phép:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
    
    **Yêu cầu:**
    
    - ✅ Attribution bắt buộc
    - ❌ Không yêu cầu share-alike
    - ✅ Thương mại được phép
    
    **Trích dẫn:**
    ```
    Air quality data from OpenAQ
    Licensed under CC BY 4.0
    https://openaq.org/
    ```

</div>


## Nguyên tắc Open Data


| Cấp độ | Yêu cầu | OpenDataMap |
|--------|---------|-------------|
|  **Open License** | Giấy phép mở | ✅ ODbL, CC0, CC BY |
|  **Machine-Readable** | Định dạng máy đọc | ✅ JSON, RDF, XML |
|  **Open Format** | Không độc quyền | ✅ RDF/Turtle, JSON-LD |
|  **Use URIs** | Định danh bằng URI | ✅ W3C URIs, NGSI-LD |
|  **Linked Data** | Liên kết dữ liệu | ✅ Wikidata, DBpedia |

### FAIR Data Principles

| Nguyên tắc | Mô tả | Thực hiện |
|------------|-------|-----------|
| **F**indable | Dễ tìm thấy | ✅ Metadata, SPARQL endpoint |
| **A**ccessible | Dễ truy cập | ✅ REST API, không cần auth |
| **I**nteroperable | Tương tác được | ✅ RDF, NGSI-LD, W3C standards |
| **R**eusable | Tái sử dụng | ✅ Clear license, documentation |

## Quyền của bạn với Dữ liệu

### ✅ Bạn có thể

=== "Sử dụng & Truy cập"
    
    ```markdown
    ✅ Truy cập API miễn phí, không giới hạn
    ✅ Download toàn bộ dữ liệu RDF
    ✅ Query qua SPARQL endpoint
    ✅ Sử dụng cho mục đích cá nhân/thương mại
    ```

=== "Phân tích & Xử lý"
    
    ```markdown
    ✅ Chạy analytics, machine learning
    ✅ Tạo visualization, charts
    ✅ Kết hợp với dữ liệu khác
    ✅ Training AI models
    ```

=== "Chỉnh sửa & Tạo phái sinh"
    
    ```markdown
    ✅ Làm sạch, chuẩn hóa dữ liệu
    ✅ Thêm trường mới, enrichment
    ✅ Chuyển đổi format
    ✅ Tạo subset/filtered datasets
    ```

=== "Phân phối & Chia sẻ"
    
    ```markdown
    ✅ Chia sẻ với đồng nghiệp
    ✅ Public repository
    ✅ Bán dữ liệu/dịch vụ
    ⚠️ Phải tuân thủ ODbL (share-alike)
    ⚠️ Phải ghi rõ nguồn OSM
    ```

## Nghĩa vụ khi sử dụng

### ❗ Attribution (Ghi rõ nguồn)

#### Trong Website/App:

```html
<!-- Footer hoặc Credits section -->
<div class="attribution">
  Data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>
  | Provided by <a href="https://github.com/MFitHou">OpenDataMap</a>
  | <a href="https://opendatacommons.org/licenses/odbl/">ODbL</a>
</div>
```

#### Trong API Response:

```json
{
  "data": [...],
  "attribution": "© OpenStreetMap contributors. Data provided by OpenDataMap under ODbL.",
  "license": "https://opendatacommons.org/licenses/odbl/"
}
```

#### Trong Research Paper:

```latex
\cite{openstreetmap2024}
Data used in this research was sourced from OpenStreetMap, 
accessed via OpenDataMap platform, licensed under the 
Open Database License (ODbL).

\bibitem{openstreetmap2024}
OpenStreetMap contributors.
\textit{Planet dump retrieved from https://planet.osm.org}.
Available under the Open Database License, 2024.
```

### ❗ Share-Alike (ODbL)

Nếu bạn:
- **Phân phối** dữ liệu đã chỉnh sửa
- **Tạo database** mới từ OSM data
- **Kết hợp** với dữ liệu khác trong một database

Thì bạn phải:
- ✅ Phân phối dưới **ODbL**
- ✅ Công khai dữ liệu source
- ✅ Ghi rõ thay đổi

⚠️ **Ngoại lệ:**
- Nếu chỉ sử dụng API → Không cần share-alike
- Nếu tạo produced work (app, map, analysis) → Không cần ODbL cho app

### ❗ Giữ nguyên Metadata

```turtle
# Ví dụ RDF data phải giữ metadata
@prefix dct: <http://purl.org/dc/terms/> .

<http://opendatamap.org/data/poi/123>
    dct:source "OpenStreetMap" ;
    dct:license <https://opendatacommons.org/licenses/odbl/> ;
    dct:creator "OpenDataMap" ;
    dct:modified "2025-12-10"^^xsd:date .
```

## Tình huống sử dụng cụ thể

### ✅ Được phép

#### Kịch bản 1: Startup xây dựng app bản đồ

```markdown
✅ Gọi OpenDataMap API
✅ Hiển thị POI trên map
✅ Thu phí từ users
✅ Không cần share source code của app
⚠️ Phải hiển thị attribution OSM
```

#### Kịch bản 2: Researcher phân tích dữ liệu

```markdown
✅ Download RDF dataset
✅ Chạy analysis trong R/Python
✅ Publish kết quả trong paper
✅ Chia sẻ insights
⚠️ Trích dẫn OSM trong paper
❌ Không phải share dữ liệu trung gian (nếu không phân phối)
```

#### Kịch bản 3: Company tạo service mới

```markdown
✅ Fork dữ liệu OSM từ OpenDataMap
✅ Thêm dữ liệu riêng (e.g., reviews, ratings)
✅ Tạo database kết hợp
✅ Bán quyền truy cập database
⚠️ Phần OSM data phải ODbL
⚠️ Phải tách riêng proprietary data
```

### ❌ Vi phạm

#### Kịch bản 1: Sử dụng không ghi nguồn

```markdown
❌ Download data và claim là của bạn
❌ Không hiển thị attribution OSM
❌ Giấu nguồn gốc dữ liệu
```

#### Kịch bản 2: Đóng dữ liệu

```markdown
❌ Phân phối OSM data dưới proprietary license
❌ Chỉ bán access mà không cho download
❌ Thêm DRM vào dữ liệu
```

#### Kịch bản 3: Kết hợp sai

```markdown
❌ Merge OSM với proprietary DB và đóng toàn bộ
❌ Claim toàn bộ DB là proprietary
```

## Best Practices

### 1. Luôn hiển thị Attribution

```html
<!-- Good: Clear attribution -->
<footer>
  © OpenStreetMap contributors | OpenDataMap | ODbL
</footer>

<!-- Bad: Hidden or unclear -->
<footer>Data from various sources</footer>
```

### 2. Tách riêng dữ liệu

```
my-database/
├── osm-data/          # ODbL
│   ├── LICENSE        # Copy of ODbL
│   └── pois.ttl
├── proprietary-data/  # Your license
│   ├── LICENSE        # Your license
│   └── reviews.json
└── README.md          # Explain licensing
```

### 3. Document rõ ràng

```markdown
# Data Sources

## OpenStreetMap Data (ODbL)
- Files: `data/osm-*.ttl`
- License: ODbL v1.0
- Attribution: © OpenStreetMap contributors

## Proprietary Data
- Files: `data/company-*.json`
- License: Proprietary
- Owner: MyCompany Inc.
```

### 4. API nên trả về license info

```json
{
  "data": {
    "type": "POI",
    "properties": {...}
  },
  "metadata": {
    "source": "OpenStreetMap",
    "license": "ODbL",
    "attribution": "© OpenStreetMap contributors",
    "provider": "OpenDataMap"
  }
}
```

## ODbL Deep Dive

### Produced Works vs Derivative Databases

| | Produced Work | Derivative Database |
|---|---------------|---------------------|
| **Ví dụ** | Map image, Analysis chart, Mobile app | Modified POI database, Merged dataset |
| **License** | Không bắt buộc ODbL | ✅ Phải ODbL |
| **Share-alike** | ❌ Không | ✅ Phải |
| **Source code** | Không liên quan | Database schema phải mở |

### Collective Database

Nếu bạn tạo database kết hợp:

```
Combined Database
├── OSM Data (ODbL)
├── Wikidata (CC0)
└── Your Data (Your license)
```

**Quy tắc:**
- Toàn bộ DB không nhất thiết phải ODbL
- Phần OSM phải rõ ràng là ODbL
- Phải có cách tách riêng được

### Substantial Extraction

ODbL áp dụng khi:
- ✅ Extract **substantial portion** của DB
- ✅ Repeated extraction tạo thành substantial
- ❌ Insubstantial queries qua API → OK

## Câu hỏi thường gặp

### Tôi có thể cache dữ liệu API không?

✅ Có, nhưng:
- Phải giữ attribution
- Nên cập nhật định kỳ
- Nếu redistribute cache → ODbL

### Dữ liệu AI training có cần ODbL không?

Nếu:
- Train model từ OSM data → ❌ Model không cần ODbL
- Model output không phải là database → ❌ Không cần ODbL
- Nhưng training data phải ghi rõ nguồn

### Tôi có thể bán dữ liệu không?

✅ Có, nhưng:
- Phải cung cấp dưới ODbL
- Buyer cũng có quyền redistribute
- Không thể độc quyền hóa OSM data

### Kết hợp OSM với Google Maps được không?

⚠️ Cẩn thận:
- Google Maps ToS cấm mixing với open data
- Nên tách riêng hoàn toàn
- Hoặc chỉ dùng OSM

## Tài nguyên

### Giấy phép chính thức

- 📄 [ODbL Full Text](https://opendatacommons.org/licenses/odbl/)
- 📚 [ODbL Summary](https://opendatacommons.org/licenses/odbl/summary/)
- 🔍 [OSM Copyright](https://www.openstreetmap.org/copyright)

### Hướng dẫn & FAQ

- 💡 [OSM License FAQ](https://wiki.openstreetmap.org/wiki/Legal_FAQ)
- 📖 [ODbL Human Readable](https://opendatacommons.org/licenses/odbl/1-0/)
- 🎓 [Understanding ODbL](https://blog.okfn.org/2011/06/29/understanding-the-odbl/)

### Công cụ

- ✅ [OSMF License Tool](https://wiki.osmfoundation.org/wiki/Licence)
- 📋 [Attribution Guidelines](https://wiki.openstreetmap.org/wiki/Attribution)

### Standards & Specifications

- 🌐 [RDF 1.1](https://www.w3.org/TR/rdf11-primer/)
- 🔗 [Linked Data Principles](https://www.w3.org/DesignIssues/LinkedData.html)
- 📊 [NGSI-LD Specification](https://www.etsi.org/deliver/etsi_gs/CIM/001_099/009/01.08.01_60/gs_CIM009v010801p.pdf)
- ⭐ [5 Star Open Data](https://5stardata.info/en/)
- 🎯 [FAIR Principles](https://www.go-fair.org/fair-principles/)

## Liên hệ

Câu hỏi về giấy phép dữ liệu?

- 💬 [GitHub Discussions](https://github.com/MFitHou/MFitHou-Documents/discussions)
- 🐛 [Report Issues](https://github.com/MFitHou/MFitHou-Documents/issues)

---

!!! warning "Lưu ý quan trọng"
    Tài liệu này là giải thích và hướng dẫn. Văn bản pháp lý chính thức là các giấy phép gốc (ODbL, CC0, CC BY). Khi có mâu thuẫn, văn bản chính thức được ưu tiên.

!!! tip "Không chắc chắn?"
    Khi nghi ngờ về việc tuân thủ, hãy hỏi cộng đồng OSM hoặc liên hệ chúng tôi qua GitHub!
