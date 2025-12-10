# Hướng dẫn Sử dụng

Chào mừng bạn đến với **OpenDataMap** - Nền tảng bản đồ số tích hợp dữ liệu không gian, cảm biến IoT và Trợ lý ảo AI. Tài liệu này sẽ hướng dẫn bạn khai thác các tính năng từ cơ bản đến nâng cao của hệ thống.


## 1. Tổng Quan Giao Diện

Giao diện chính của OpenDataMap bao gồm:

- **Bản đồ nền tương tác** - Hiển thị trực quan các điểm dữ liệu
- **Thanh công cụ tìm kiếm** - Tìm địa điểm, địa chỉ hoặc POIs
- **Lớp dữ liệu (Layers)** - Chuyển đổi giữa các nguồn dữ liệu
- **Cửa sổ chat AI** - Trợ lý ảo thông minh

### Các thành phần chính:

- 🔍 **Thanh tìm kiếm**: Tìm địa điểm, địa chỉ hoặc POIs
- 🗺️ **Bản đồ**: Hiển thị trực quan các điểm dữ liệu, hỗ trợ Zoom in/Zoom out
- 🌤️ **Widget thời tiết**: Hiển thị thông tin thời tiết và chất lượng không khí (AQI) tại khu vực đang xem

---

## 2. Tính Năng Bản Đồ & Tìm Kiếm

### Tra cứu thông tin điểm (POI)

Khi bạn click vào một điểm bất kỳ trên bản đồ (ví dụ: Trạm ATM, Cửa hàng, Trường học) qua bảng điều khiển layer, một bảng thông tin chi tiết sẽ hiện ra:

**📋 Thông tin cơ bản:**

- Tên địa điểm
- Loại hình
- Địa chỉ đầy đủ

**🌡️ Dữ liệu môi trường thời gian thực:**

- Nhiệt độ
- Độ ồn
- AQI (Air Quality Index)
- *Lấy từ cảm biến IoT gần nhất*

**📍 Quan hệ không gian:**

- Các tiện ích "Cùng phạm vi"
- Điểm lân cận
- Ví dụ: Các ngân hàng khác gần trạm ATM này

![Tra cứu POI](../assets/images/1.png)

### Tìm kiếm tiện ích theo bán kính

Chức năng giúp bạn tìm các dịch vụ xung quanh một vị trí cụ thể.

**Các bước thực hiện:**

1. **Chọn địa điểm làm tâm**
   - Ví dụ: Hồ Hoàn Kiếm

2. **Mở công cụ tìm kiếm**
   - Nhấn nút "Tìm kiếm lân cận" hoặc biểu tượng 🔍 trên popup

3. **Thiết lập bộ lọc:**
   - **Loại dịch vụ**: ATMs, Hospitals, Bus stops, Cafe...
   - **Bán kính**: Chọn khoảng cách (0.5 km, 1 km, 2 km...)

4. **Xem kết quả**
   - Các điểm thỏa mãn điều kiện hiển thị trên bản đồ
   - Danh sách chi tiết ở panel bên cạnh

!!! example "Ví dụ"
    Tìm tất cả bệnh viện trong bán kính 2km từ Hồ Hoàn Kiếm:
    
    1. Click vào điểm Hồ Hoàn Kiếm
    2. Chọn "Tìm kiếm lân cận"
    3. Loại: Hospitals
    4. Bán kính: 2 km
    5. Nhấn "Tìm kiếm"

---

![Tra cứu POI theo bán kính](../assets/images/2.png)
![Tra cứu POI theo bán kính](../assets/images/3.png)

## 3. Trợ Lý Ảo AI (AI Assistant)

Biểu tượng 💬 **Chatbot** nằm ở góc dưới màn hình. Đây là tính năng mạnh mẽ nhất giúp bạn tương tác với dữ liệu mà không cần thao tác thủ công.

### Hỏi đáp thông tin địa điểm

Bạn có thể hỏi AI về lịch sử, mô tả của các danh lam thắng cảnh.

**Ví dụ câu hỏi:**
- "Hồ Hoàn Kiếm là gì?"
- "Lịch sử chùa Một Cột?"
- "Bảo tàng Hồ Chí Minh có gì đặc biệt?"

**Kết quả:**
AI sẽ trả lời tóm tắt thông tin văn hóa/lịch sử của địa điểm đó ngay trong khung chat.
![Hỏi đáp thong tin địa điểm](../assets/images/4.png)

### Tìm kiếm bằng ngôn ngữ tự nhiên

Thay vì dùng bộ lọc, hãy ra lệnh cho AI tìm kiếm các địa điểm theo ngữ cảnh phức tạp.

**Cú pháp:**
```
[Đối tượng] + [Vị trí mốc] + [Khoảng cách/Điều kiện]
```

**Ví dụ câu lệnh:**

!!! example "Ví dụ 1"
    **Câu hỏi:** "Tìm các trường học quanh hồ định công cách 500m"
    
    **AI thực hiện:**
    
    1. Tự động xác định vị trí "Hồ Định Công"
    2. Khoanh vùng bán kính 500m
    3. Liệt kê danh sách các trường học kèm:
       - Khoảng cách
       - AQI
       - Độ ồn
    4. Hiển thị lên bản đồ với markers

!!! example "Ví dụ 2"
    **Câu hỏi:** "Tìm ATM Vietcombank gần nhất từ vị trí hiện tại"
    
    **AI thực hiện:**
    
    1. Xác định vị trí hiện tại của bạn
    2. Tìm tất cả ATM Vietcombank
    3. Sắp xếp theo khoảng cách
    4. Hiển thị top 5 ATM gần nhất

!!! example "Ví dụ 3"
    **Câu hỏi:** "Cho tôi biết chất lượng không khí ở khu vực Hồ Tây"
    
    **AI thực hiện:**
    
    1. Tìm các cảm biến IoT gần Hồ Tây
    2. Lấy dữ liệu AQI mới nhất
    3. Phân tích và đánh giá mức độ
    4. Đưa ra khuyến nghị (tốt/trung bình/kém)

---
![Hỏi đáp thong tin địa điểm](../assets/images/5.png)

## 4. Phân Tích & Truy Vấn Dữ Liệu

**Dành cho Chuyên gia & Nhà nghiên cứu**

Truy cập vào menu **Query Builder** để khai thác dữ liệu sâu từ:
- **InfluxDB** cho dữ liệu IoT time-series
- **Apache Jena Fuseki** cho Linked Data

### Sử dụng Query Builder (No-Code)

Giao diện kéo thả giúp bạn truy vấn dữ liệu mà không cần biết lập trình.


#### Tab IoT

**Các bước:**

1. **Chọn Phép đo** (Measurement)
   - `airQuality`, `weather`, `traffic`

2. **Chọn Khoảng thời gian** (Time Range)
   - 1 giờ qua
   - 24 giờ qua
   - 7 ngày qua
   - Tùy chỉnh

3. **Chọn Trạm** (Station)
   - Tất cả
   - Trạm cụ thể (Láng, Hoàn Kiếm, Đống Đa...)

4. **Chọn Trường dữ liệu** (Fields)
   - AQI
   - PM2.5
   - PM10
   - Temperature
   - Humidity
![Tab IoT](../assets/images/6.png)

#### Tab Map

Truy vấn các điểm POI theo quan hệ không gian.

**Ví dụ:**
- "Tìm tất cả Bus Stop nằm gần Park"
- "Tìm School trong vòng 500m từ Hospital"
![tab Map](../assets/images/7.png)

### Custom Script & Xuất dữ liệu

#### Xem Script

Nhấn nút **Code View** để xem đoạn mã truy vấn được hệ thống tự động sinh ra:

**Flux Script** (cho InfluxDB):
```flux
from(bucket: "opendata")
  |> range(start: -1h)
  |> filter(fn: (r) => r["_measurement"] == "airQuality")
  |> filter(fn: (r) => r["station"] == "Lang")
  |> filter(fn: (r) => r["_field"] == "aqi" or r["_field"] == "pm25")
```

**SPARQL** (cho Fuseki):
```sparql
PREFIX schema: <http://schema.org/>
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>

SELECT ?poi ?name ?lat ?long WHERE {
  ?poi a schema:Hospital ;
       schema:name ?name ;
       geo:lat ?lat ;
       geo:long ?long .
}
LIMIT 100
```

Bạn có thể **chỉnh sửa trực tiếp** tại đây để tùy biến nâng cao.
![tab Map](../assets/images/8.png)

#### Thực thi & Tải xuống

1. **Thực thi Truy vấn**
   - Nhấn nút ▶️ để xem kết quả dạng bảng

2. **Tải Xuống**
   - Nhấn nút 📥 để xuất dữ liệu
   - Định dạng: JSON, CSV, Excel

!!! info "Lưu ý"
    Kết quả truy vấn được giới hạn tối đa 10,000 records để đảm bảo hiệu năng.

---
![tab Map](../assets/images/9.png)

## 5. Quản Trị & Giám Sát IoT

**Khu vực dành cho Quản trị viên hệ thống (Admin Dashboard)**

### Dashboard tổng quan

Cung cấp cái nhìn toàn cảnh về dữ liệu đô thị:

**📊 Thống kê chính:**
- Tổng số điểm POI đang quản lý
- Biểu đồ phân bố POI theo loại (Top 10 loại phổ biến)
- Thống kê mức độ bao phủ dữ liệu theo khu vực
- Số lượng trạm IoT hoạt động
- Tổng số truy vấn API trong 24h

**📈 Biểu đồ:**
- Pie Chart: Phân bố POI theo loại
- Bar Chart: Top 10 POI types
- Line Chart: Xu hướng tăng trưởng dữ liệu

![Dashboard](../assets/images/10.png)

### Giám sát môi trường thời gian thực

Theo dõi sức khỏe thành phố thông qua mạng lưới cảm biến.

**Các bước:**

1. **Chọn Trạm đo**
   - Láng
   - Hoàn Kiếm
   - Đống Đa
   - Hai Bà Trưng

2. **Chọn Chỉ số**
   - AQI (Air Quality Index)
   - PM2.5
   - PM10
   - Temperature
   - Humidity
   - Noise Level

3. **Xem Biểu đồ**
   - **Line Chart**: Biến động các chỉ số theo thời gian thực
   - **Gauge Chart**: Giá trị hiện tại
   - **Alert**: Cảnh báo khi vượt ngưỡng

**📱 Real-time Updates:**
- Thẻ hiển thị giá trị mới nhất cập nhật **từng giây**
- Màu sắc thay đổi theo mức độ (xanh/vàng/đỏ)

!!! warning "Cảnh báo"
    Khi AQI vượt quá 100, hệ thống sẽ tự động gửi thông báo cảnh báo.
![Dashboard](../assets/images/11.png)

### Quản lý điểm (POI Management)

**Chức năng:**

- ➕ **Thêm mới** điểm dữ liệu
- ✏️ **Chỉnh sửa** thông tin POI
- 🗑️ **Xóa** điểm không còn tồn tại
- 📍 **Cập nhật** vị trí GPS

**Công cụ trực quan:**
- **Heatmap**: Bản đồ phân bố mật độ điểm
- **Cluster**: Nhóm các điểm gần nhau
- **Grid View**: Xem dạng bảng
- **Map View**: Xem trên bản đồ

!!! tip "Pro Tip"
    Sử dụng Heatmap để nhận diện các vùng thiếu dữ liệu và lên kế hoạch thu thập.

---
![Dashboard](../assets/images/12.png)

## Hỗ trợ kỹ thuật

Nếu gặp vấn đề trong quá trình sử dụng:

- 📧 Email: support@opendatamap.com
- 💬 Chat: Nhấn nút "Feedback" trong ứng dụng
- 📖 [FAQ](../faq.md)
- 🐛 [Report Issues](https://github.com/MFitHou/MFitHou-Documents/issues)

---

**Copyright © 2025 OpenDataMap Team**