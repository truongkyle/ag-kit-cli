# @xaviele/ag-kit (Antigravity Agent Kit)

🚀 **Antigravity Agent Kit** is a powerful CLI utility that injects an advanced AI Agent workspace into any of your projects. Packed with **45 specialized skills**, **12 automated workflows**, and smart project configurations.

## 📦 Installation & Usage

You don't need to install it globally. Simply use `npx` in the root directory of your target project:

```bash
npx @xaviele/ag-kit init
```

### Options

If your project already contains an `.agent` folder and you want to clean it up and fetch the latest version from this kit, use the `--force` (or `-f`) flag:

```bash
npx @xaviele/ag-kit init --force
```

## ✨ Features

- **Instant AI Brain Setup:** Automatically spawns an `.agent` directory with all curated prompts, context references, and metadata to guide AI coding assistants (like Claude, Gemini, Cursor).
- **Rich Skillset:** Pre-packaged with 45 specialized skills across Backend, API design, Frontend, SEO, AI Prompting, Security, and more.
- **Automated Workflows:** 12 ready-to-use workflows (`/deploy`, `/ui-ux-pro-max`, `/brainstorm` etc.) to standardize your development lifecycle.
- **Universal Agnostic:** Framework-independent. Works flawlessly for NestJS, Next.js, React Native, Zalo Mini Apps, and more.

## 🎯 Specialized Commands

- `npx @xaviele/ag-kit add <skill>`: Inject a single skill into an already initialized project quickly without resetting the entire workspace.

## 🛣️ Roadmap (Coming Soon)
- `ag-kit update`: Selectively sync and update missing skills without overwriting project-specific local rules.

---

# Tiếng Việt

🚀 **Antigravity Agent Kit** là một bộ công cụ dòng lệnh (CLI) cực mạnh giúp bơm "bộ não AI" vào bất kỳ dự án nào của bạn. Gói này được trang bị sẵn **45 kỹ năng chuyên sâu (skills)**, **12 luồng làm việc tự động (workflows)** và các quy tắc dự án thông minh.

## 📦 Cài đặt và Sử dụng

Bạn không cần phải tải rác về máy tính bằng cách cài đặt toàn cầu (global). Chỉ cần chạy trực tiếp bằng lệnh `npx` ở thư mục gốc của dự án bạn muốn cài đặt:

```bash
npx @xaviele/ag-kit init
```

### Các Tùy chọn (Options)

Trong trường hợp dự án của bạn đã có sẵn thư mục `.agent` và bạn muốn ghi đè/làm sạch bản cũ để lấy bản mới nhất từ bộ Kit này, hãy sử dụng thêm cờ `--force` (hoặc `-f`):

```bash
npx @xaviele/ag-kit init --force
```

## ✨ Tính năng nổi bật

- **Khởi tạo bộ não AI tức thì:** Tự động sinh ra cấu trúc thư mục `.agent` chứa toàn bộ system prompts chuẩn chỉ để định hướng cho các trợ lý ảo (hỗ trợ Claude, Gemini, Cursor...).
- **Kho Kỹ năng Khổng lồ:** Tích hợp 45 kỹ năng chuyên môn từ Backend, API, Frontend, thiết kế UI/UX, Bảo mật, viết Prompt đến tối ưu SEO.
- **Hệ thống Workflow tự động:** 12 lệnh luồng công việc như `/deploy`, `/ui-ux-pro-max`, `/brainstorm` v.v. để nhanh chóng chuẩn hóa vòng đời phát triển dự án.
- **Thích ứng mọi hệ thống:** Hoạt động trơn tru bất kể bạn dùng Framework nào (NestJS, React, Mobile app hay Zalo Mini App).

## 🎯 Các lệnh Chuyên biệt

- Cú pháp `npx @xaviele/ag-kit add <tên-kỹ-năng>`: Bổ sung siêu tốc bất kỳ kỹ năng (skill) đơn lẻ nào vào thư viện dự án của bạn (Dự án bắt buộc phải từng chạy lệnh `init` trước đó).

## 🛣️ Lộ trình Phát triển (Sắp ra mắt)
- Cú pháp `ag-kit update`: Cập nhật đồng bộ các Kỹ năng gốc từ hệ thống mà không làm mất cấu trúc cài đặt hiện tại.

## Khoá Bản quyền (License)
MIT © Xavie Le
