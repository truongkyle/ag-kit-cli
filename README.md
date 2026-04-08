# @xaviele/ag-kit (Antigravity Agent Kit)

🚀 **Antigravity Agent Kit** is a powerful CLI utility that injects an advanced AI Agent workspace into any of your projects. Packed with **45 specialized skills**, **12 automated workflows**, and smart project configurations.

## 📦 Cài đặt thao tác nhanh (Quick Install)

Chỉ cần chạy trực tiếp bằng lệnh `npx` ở thư mục gốc của dự án bạn muốn cài đặt hệ thống AI (Run directly via `npx` in your target project root):

```bash
npx @xaviele/ag-kit init
```

## 🎯 Các lệnh Chuyên biệt (Specialized Commands)

| Lệnh / Command | Tính năng / Functionality | Mô tả / Description |
|----------------|--------------------------|----------------------|
| `init` | Khởi tạo toàn bộ lõi / Core setup | Tự động sinh mục `.agent/` với toàn bộ hệ thống gốc. Dùng cờ `--force` để cài đè (Reset). |
| `add <skill>` | Thêm 1 kỹ năng lẻ / Add single | Bổ sung siêu tốc bất kỳ kỹ năng nào bị thiếu vào dự án đã cài đặt (VD: `add clean-code`). |
| `update` | Cập nhật đồng bộ / Safe Sync | Tải các Kỹ năng gốc mới nhất từ Master Repo nhưng **BẢO TOÀN TUYỆT ĐỐI** các cài đặt (Rules, Cấu hình) của bạn hiện tại. |

---

## 🛠️ Cấu trúc "Bộ não AI" có gì? (What's inside the AI Brain?)

Sau khi cài đặt xong, thư mục `.agent` của bạn sẽ đóng vai trò điều hướng mọi hành vi của Trợ lý lập trình AI (Claude, Cursor, Gemini)... với 3 khối kiến trúc chính:

### 1. 🧠 Kỹ năng (45 Skills)
Bộ Kit chứa sẵn vô số kỹ năng chuyên môn sâu, biến file text thành sổ tay để hướng dẫn AI làm việc như một kỹ sư chuyên nghiệp (Senior Engineer).
*   **Frontend & Web:** Kỹ năng viết React, Tailwind v4, Mobile Design, Web Testing (Playwright), Tối ưu hoá Waterfall fetching.
*   **Hệ thống & Backend:** Thiết kế kiến trúc Database logic, REST & GraphQL API, Quản lý Server, Mẹo Deploy an toàn.
*   **Bảo mật & Tối ưu:** Clean Code quy chuẩn quốc tế, Rà quét lỗ hổng rủi ro (Vulnerability scanner), Chiến thuật Red-team, Đo tốc độ web 2025.
*   **Xây dựng Super Apps:** Kỹ năng code Zalo Mini App thần tốc, giao diện ZaUI cao cấp, UI/UX Pro Max.

### 2. 🔄 Luồng làm việc tự động (12 Workflows)
Các phím tắt quy trình (kiểu `/slash-commands`) chuẩn hóa vòng đời phát triển dự án. Chẳng hạn:
*   `/brainstorm`: Ép AI động não, rào trước đón sau giải quyết triệt để edge-cases trước khi hùng hục lao vào code.
*   `/plan`: Yêu cầu AI viết Kế hoạch triển khai (Implementation Plan File) rất kĩ từng Component để bạn Phê duyệt trước khi làm.
*   `/ui-ux-pro-max`: Quy trình chuyên biệt ép AI không được dùng Bootstrap cũ rích mà phải thiết kế giao diện Glassmorphism, Gradient bóng mượt.
*   `/test`: Tự động lùng sục Source Code và đính kèm Unit test chuẩn mô hình AAA.

### 3. 🛡️ Quy tắc (Rules) & Cấu hình (Architecture)
Khu vực thiết lập giới hạn cho Trợ lý:
*   `rules/`: Chứa các quy định riêng của bạn hoặc tổ chức. Ví dụ: "Luôn luôn giải thích bằng Tiếng Việt", "Nghiêm cấm dùng thư viện Moment.js", v.v.
*   `ARCHITECTURE.md` / `mcp_config.json`: Tài liệu ghi chú kiến trúc hệ thống riêng biệt của bạn (Hệ sinh thái AI sẽ scan các file này đầu tiên để nắm ngữ cảnh Codebase hiện hành).

## 🚀 Các Trường hợp sử dụng tiêu biểu (Use Cases)

1. **Khởi tạo Siêu ứng dụng (VD: Zalo Mini App Taisun):** Bạn thiết lập dự án trống, cài Gói Kit, sau đó chat với AI: *"Hãy dùng lệnh `/ui-ux-pro-max` và thiết kế màn hình Index"* -> AI lập tức tuân thủ quy chuẩn thiết kế Mobile phẳng, áp dụng Style chuẩn xác.
2. **Review Code & Kiến trúc Hệ thống:** Dùng quy trình `/orchestrate` (Điều phối), AI sẽ tự gọi ra rất nhiều Kỹ sư ảo (Frontend Specialist, Backend Architect, Security Auditor) cùng hội đồng rà soát bảo mật trang Repo giúp bạn.
3. **Tái sinh mã nguồn cũ:** Thả bộ Kit vào đống code đã bám bụi, gõ vào luồng chat: *"Hãy dọn dẹp các biến rác theo chuẩn skill `clean-code` và `react-best-practices`"* -> AI tự thực thi cải tạo từng File.

## Khoá Bản quyền (License)
MIT © Xavie Le
