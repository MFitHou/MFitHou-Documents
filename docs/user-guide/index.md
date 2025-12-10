# Hướng dẫn Sử dụng

Hướng dẫn chi tiết cách sử dụng nền tảng OpenDataMap để tra cứu thông tin địa điểm và dữ liệu mở.

## Giới thiệu

OpenDataMap là nền tảng dữ liệu mở liên kết giúp bạn tìm kiếm và khám phá các điểm quan tâm (POI) xung quanh vị trí của bạn. Hệ thống cung cấp thông tin về:

- 🏥 **Bệnh viện & Cơ sở y tế**
- 🏧 **ATM & Ngân hàng**
- 🚏 **Trạm xe buýt**
- 🚻 **Nhà vệ sinh công cộng**
- 🎮 **Sân chơi trẻ em**
- 🏫 **Trường học**
- Và nhiều loại POI khác...

## Bắt đầu sử dụng

### Truy cập hệ thống

**URL:** [https://mfithou-map.example.com](https://mfithou-map.example.com)

!!! tip "Trình duyệt được hỗ trợ"
    - Google Chrome 90+
    - Mozilla Firefox 88+
    - Microsoft Edge 90+
    - Safari 14+

### Giao diện chính

Khi mở trang, bạn sẽ thấy:

1. **Bản đồ** - Hiển thị vị trí hiện tại và các POI xung quanh
2. **Thanh tìm kiếm** - Tìm kiếm địa điểm hoặc POI
3. **Bộ lọc** - Chọn loại POI muốn hiển thị
4. **Bảng thông tin** - Chi tiết về POI được chọn
5. **Menu chatbot** - Trợ lý AI hỗ trợ tìm kiếm

## Các tính năng chính

### 1. Xem vị trí hiện tại

**Bước 1:** Khi lần đầu truy cập, trình duyệt sẽ yêu cầu quyền truy cập vị trí.

**Bước 2:** Nhấn **"Cho phép"** để hệ thống xác định vị trí của bạn.

**Bước 3:** Bản đồ sẽ tự động zoom vào vị trí của bạn với marker màu xanh.

!!! warning "Lưu ý"
    Nếu không cho phép truy cập vị trí, bản đồ sẽ hiển thị vị trí mặc định (Hà Nội).

### 2. Tìm kiếm POI theo loại

#### Sử dụng bộ lọc

**Bước 1:** Nhấn vào nút **"Bộ lọc"** ở góc trên bên phải.

**Bước 2:** Chọn loại POI muốn xem:

- ☑️ Bệnh viện
- ☑️ ATM
- ☑️ Trạm xe buýt
- ☑️ Nhà vệ sinh
- ☑️ Sân chơi
- ☑️ Trường học

**Bước 3:** Điều chỉnh **"Bán kính tìm kiếm"** (từ 1-10 km).

**Bước 4:** Nhấn **"Áp dụng"**.

!!! example "Ví dụ"
    Muốn tìm bệnh viện trong bán kính 3km:
    
    1. Mở bộ lọc
    2. Chỉ tick ☑️ Bệnh viện
    3. Kéo slider bán kính về 3km
    4. Nhấn Áp dụng
    
    → Bản đồ sẽ hiển thị tất cả bệnh viện trong vòng 3km.

#### Kết quả hiển thị

- **Markers trên bản đồ**: Mỗi loại POI có icon riêng
  - 🏥 Màu đỏ: Bệnh viện
  - 🏧 Màu xanh dương: ATM
  - 🚏 Màu vàng: Trạm xe buýt
  - 🚻 Màu xám: Nhà vệ sinh
  - 🎮 Màu xanh lá: Sân chơi

- **Danh sách bên trái**: Liệt kê tất cả POI tìm được với:
  - Tên địa điểm
  - Khoảng cách từ vị trí hiện tại
  - Địa chỉ

### 3. Xem thông tin chi tiết POI

**Bước 1:** Nhấn vào marker trên bản đồ HOẶC chọn POI trong danh sách.

**Bước 2:** Popup/Panel hiển thị thông tin:

- **Tên**: Tên đầy đủ của địa điểm
- **Loại**: Phân loại (Hospital, ATM, Bus Stop,...)
- **Địa chỉ**: Địa chỉ đầy đủ
- **Tọa độ**: Vị trí GPS (latitude, longitude)
- **Khoảng cách**: Khoảng cách từ vị trí bạn
- **Liên kết**: Links đến OpenStreetMap, Wikidata (nếu có)
- **Thuộc tính bổ sung**: Số điện thoại, giờ mở cửa, website (nếu có)

**Bước 3:** Sử dụng các nút hành động:

- 🗺️ **"Chỉ đường"** - Mở Google Maps với đường đi
- 📋 **"Sao chép tọa độ"** - Copy GPS coordinates
- 🔗 **"Chia sẻ"** - Chia sẻ link địa điểm

### 4. Tìm kiếm bằng văn bản

**Bước 1:** Nhập từ khóa vào thanh tìm kiếm. Ví dụ:

- "Bệnh viện Bạch Mai"
- "ATM Vietcombank"
- "Trường tiểu học"

**Bước 2:** Nhấn **Enter** hoặc nút tìm kiếm 🔍.

**Bước 3:** Hệ thống sẽ:

- Tìm các POI khớp với từ khóa
- Hiển thị kết quả trên bản đồ
- Liệt kê trong danh sách với điểm tương đồng

### 5. Sử dụng Chatbot AI

OpenDataMap tích hợp chatbot AI (Google Gemini) để hỗ trợ tìm kiếm thông minh.

#### Mở Chatbot

**Cách 1:** Nhấn vào icon **💬** ở góc dưới bên phải.

**Cách 2:** Nhấn phím tắt **Ctrl + K** (Windows/Linux) hoặc **Cmd + K** (macOS).

#### Đặt câu hỏi

Bạn có thể hỏi bằng ngôn ngữ tự nhiên:

!!! example "Ví dụ câu hỏi"
    - "Tìm bệnh viện gần nhất"
    - "Có ATM nào trong bán kính 500m không?"
    - "Trạm xe buýt số 7 ở đâu?"
    - "Chỉ cho tôi sân chơi cho trẻ em quanh đây"
    - "Nhà vệ sinh công cộng gần Hồ Hoàn Kiếm"

#### Nhận kết quả

Chatbot sẽ:

1. **Phân tích câu hỏi** của bạn
2. **Truy vấn dữ liệu** từ hệ thống
3. **Trả lời** bằng ngôn ngữ tự nhiên
4. **Hiển thị** kết quả trên bản đồ (nếu có)
5. **Đề xuất** các POI liên quan

### 6. Điều hướng bản đồ

#### Phóng to/Thu nhỏ

- **Nút +/-** trên bản đồ
- **Scroll chuột**
- **Pinch gesture** trên màn hình cảm ứng

#### Di chuyển

- **Kéo thả** bằng chuột/ngón tay
- **Nhấp đúp** để zoom vào vị trí

#### Chuyển lớp bản đồ

Nhấn vào nút **"Layers"** để chọn:

- 🗺️ **Streets** - Bản đồ đường phố (mặc định)
- 🛰️ **Satellite** - Hình ảnh vệ tinh
- 🚴 **Cycling** - Dành cho xe đạp
- 🚶 **Pedestrian** - Dành cho người đi bộ

### 7. Lưu và chia sẻ

#### Lưu vị trí yêu thích

**Bước 1:** Mở thông tin chi tiết của POI.

**Bước 2:** Nhấn nút **⭐ "Lưu"**.

**Bước 3:** POI sẽ được thêm vào danh sách **"Yêu thích"** trong menu.

#### Chia sẻ địa điểm

**Cách 1: Share URL**

1. Nhấn nút **🔗 "Chia sẻ"** trong thông tin POI
2. Copy URL tự động (URL chứa tọa độ và loại POI)
3. Gửi link cho người khác

**Cách 2: Export dữ liệu**

1. Nhấn menu **"Xuất dữ liệu"**
2. Chọn định dạng:
   - **JSON** - Dữ liệu thô
   - **CSV** - Bảng tính
   - **KML** - Cho Google Earth
3. Download file

## Tính năng nâng cao

### Tìm kiếm theo tuyến đường

**Bước 1:** Nhấn nút **"Tuyến đường"** trên bản đồ.

**Bước 2:** Nhập:

- **Điểm A**: Địa điểm bắt đầu
- **Điểm B**: Địa điểm kết thúc

**Bước 3:** Chọn **"Tìm POI dọc đường"**.

**Bước 4:** Chọn loại POI và bán kính lệch (ví dụ: 500m).

→ Hệ thống sẽ hiển thị tất cả POI dọc theo tuyến đường trong bán kính cho phép.

### So sánh POI

**Bước 1:** Tick chọn nhiều POI trong danh sách (giữ Ctrl/Cmd).

**Bước 2:** Nhấn nút **"So sánh"**.

**Bước 3:** Bảng so sánh hiển thị:

| Tiêu chí | POI 1 | POI 2 | POI 3 |
|----------|-------|-------|-------|
| Khoảng cách | 1.2 km | 0.8 km | 2.5 km |
| Giờ mở cửa | 24/7 | 8:00-20:00 | 7:00-22:00 |
| Đánh giá | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

### Xem dữ liệu lịch sử (IoT)

Đối với POI có sensors (ví dụ: Trạm quan trắc môi trường):

**Bước 1:** Mở thông tin POI.

**Bước 2:** Tab **"Dữ liệu IoT"** hiển thị:

- **Biểu đồ thời gian thực** (nhiệt độ, độ ẩm, PM2.5,...)
- **Lịch sử 7 ngày**
- **Xuất dữ liệu CSV**

**Bước 3:** Chọn khoảng thời gian và tải về.

### Báo cáo sai sót

Nếu phát hiện thông tin sai:

**Bước 1:** Mở POI có vấn đề.

**Bước 2:** Nhấn **"⚠️ Báo cáo sai sót"**.

**Bước 3:** Điền form:

- Loại lỗi (Địa chỉ sai, Đã đóng cửa, Thông tin sai,...)
- Mô tả chi tiết
- Hình ảnh (tùy chọn)

**Bước 4:** Gửi báo cáo.

→ Team sẽ xem xét và cập nhật trong vòng 48 giờ.

## Phím tắt

| Phím | Chức năng |
|------|-----------|
| `Ctrl/Cmd + K` | Mở Chatbot |
| `Ctrl/Cmd + F` | Focus thanh tìm kiếm |
| `Ctrl/Cmd + L` | Mở bộ lọc |
| `Ctrl/Cmd + M` | Chuyển đổi lớp bản đồ |
| `Esc` | Đóng popup/panel |
| `+` / `-` | Zoom in/out |
| `←` `→` `↑` `↓` | Di chuyển bản đồ |
| `Space` | Reset về vị trí hiện tại |

## Câu hỏi thường gặp

### 1. Tại sao không thấy vị trí của tôi?

**Nguyên nhân:**

- Trình duyệt chưa được cấp quyền truy cập vị trí
- GPS bị tắt trên thiết bị
- Ở trong nhà, tín hiệu GPS yếu

**Giải pháp:**

1. Kiểm tra cài đặt quyền của trình duyệt
2. Bật GPS/Location Services
3. Ra ngoài trời hoặc gần cửa sổ
4. Refresh trang

### 2. Kết quả tìm kiếm không chính xác?

**Giải pháp:**

- Kiểm tra bán kính tìm kiếm (có thể quá nhỏ)
- Thử từ khóa khác
- Sử dụng Chatbot AI để tìm kiếm tự nhiên
- Báo cáo nếu dữ liệu sai

### 3. Làm sao để tìm địa điểm ở thành phố khác?

**Cách 1:** Nhập địa chỉ vào thanh tìm kiếm và nhấn Enter.

**Cách 2:** Click chuột phải trên bản đồ → **"Tìm POI tại đây"**.

**Cách 3:** Nhập tọa độ (latitude, longitude) vào thanh tìm kiếm.

### 4. Chatbot AI không hoạt động?

**Nguyên nhân:** API key hết hạn hoặc quota vượt mức.

**Giải pháp:** Sử dụng tìm kiếm thông thường hoặc thử lại sau.

### 5. Dữ liệu cập nhật bao lâu một lần?

- **Dữ liệu POI**: Cập nhật hàng tuần từ OpenStreetMap
- **Dữ liệu IoT**: Real-time (cứ 5 phút/lần)
- **Metadata**: Cập nhật từ Wikidata hàng tháng

### 6. Có thể sử dụng offline không?

Hiện tại **chưa hỗ trợ** chế độ offline. Bạn cần kết nối Internet để:

- Tải bản đồ
- Truy vấn dữ liệu POI
- Sử dụng Chatbot AI

### 7. Làm sao để đóng góp dữ liệu?

Bạn có thể đóng góp bằng cách:

1. **Cập nhật trên OpenStreetMap** - Dữ liệu sẽ tự động đồng bộ
2. **Báo cáo sai sót** - Qua nút "Báo cáo" trong app
3. **Gửi pull request** - Nếu có kỹ năng kỹ thuật (xem [Developer Guide](../developer-guide/index.md))

## Hỗ trợ kỹ thuật

Nếu gặp vấn đề, vui lòng:

- 📧 Email: support@mfithou.com
- 💬 [GitHub Issues](https://github.com/MFitHou/MFitHou-Documents/issues)
- 📖 [FAQ](../faq.md)
- 📘 [Developer Guide](../developer-guide/index.md) (cho lỗi kỹ thuật)

---

!!! success "Bắt đầu khám phá!"
    Bây giờ bạn đã sẵn sàng sử dụng OpenDataMap! 🎉
    
    **Bước tiếp theo:**
    
    - [Xem kiến trúc hệ thống](../getting-started/architecture-overview.md)
    - [API Documentation](../api-reference/index.md) (cho developers)
    - [Chính sách & Giấy phép](../policies/index.md)
