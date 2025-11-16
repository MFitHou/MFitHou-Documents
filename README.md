# MFitHou Documentation

[![Deploy MkDocs](https://github.com/MFitHou/MFitHou-Documents/actions/workflows/ci.yml/badge.svg)](https://github.com/MFitHou/MFitHou-Documents/actions/workflows/ci.yml)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Tài liệu chính thức cho hệ sinh thái **MFitHou** - Nền tảng dữ liệu mở liên kết phục vụ nghiên cứu và chuyển đổi số.

🌐 **Live Documentation**: https://mfithou.github.io/MFitHou-Documents/

## Tổng quan

Tài liệu bao gồm:

- 📚 **Getting Started** - Hướng dẫn bắt đầu
- 🏗️ **Architecture** - Kiến trúc hệ thống
- 🧩 **Components** - Chi tiết từng component (Data Pipeline, Backend, Frontend)
- 💻 **Installation** - Hướng dẫn cài đặt đầy đủ
- 📖 **User Guide** - Hướng dẫn sử dụng
- 👨‍💻 **Developer Guide** - Hướng dẫn phát triển
- 🔌 **API Reference** - Tài liệu API
- 📊 **Data & RDF** - Cấu trúc dữ liệu RDF

## Repositories

| Repository | Mô tả | Link |
|------------|-------|------|
| **OpenDataFitHou** | Data Pipeline - Python + Jupyter | [GitHub](https://github.com/MFitHou/OpenDataFitHou) |
| **open_data_backend** | Backend API - NestJS | [GitHub](https://github.com/MFitHou/open_data_backend) |
| **open_data_map** | Frontend Web - React + Leaflet | [GitHub](https://github.com/MFitHou/open_data_map) |
| **MFitHou-Documents** | Documentation - MkDocs Material | [GitHub](https://github.com/MFitHou/MFitHou-Documents) |

## Development

### Prerequisites

- Python 3.9+
- pip

### Local Development

```bash
# Clone repository
git clone https://github.com/MFitHou/MFitHou-Documents.git
cd MFitHou-Documents

# Install dependencies
pip install -r requirements.txt

# Serve locally (with live reload)
mkdocs serve
# → http://127.0.0.1:8000

# Build static site
mkdocs build

# Deploy to GitHub Pages (only maintainers)
mkdocs gh-deploy
```

### Adding Content

1. Edit markdown files in `docs/`
2. Update `mkdocs.yml` navigation if needed
3. Test locally: `mkdocs serve`
4. Commit and push to `main` branch
5. GitHub Actions will auto-deploy to GitHub Pages

## Structure

```
MFitHou-Documents/
├── docs/                    # Documentation source
│   ├── index.md            # Home page
│   ├── getting-started/    # Getting started guides
│   ├── architecture/       # System architecture
│   ├── components/         # Component docs
│   ├── installation/       # Installation guides
│   ├── user-guide/         # User documentation
│   ├── developer-guide/    # Developer docs
│   ├── api-reference/      # API documentation
│   ├── data-rdf/          # RDF/SPARQL docs
│   ├── infrastructure/     # CI/CD docs
│   ├── policies/          # Policies & legal
│   └── releases/          # Changelog & releases
├── .github/
│   └── workflows/
│       └── ci.yml         # GitHub Actions workflow
├── mkdocs.yml             # MkDocs configuration
├── requirements.txt       # Python dependencies
└── README.md             # This file
```

## Contributing

Đóng góp vào documentation:

1. Fork repository
2. Create feature branch: `git checkout -b docs/improve-section`
3. Make changes and test locally
4. Commit: `git commit -m 'docs: improve X section'`
5. Push: `git push origin docs/improve-section`
6. Create Pull Request

Xem chi tiết: [Contributing Guide](https://mfithou.github.io/MFitHou-Documents/developer-guide/contributing/)

## Tech Stack

- **MkDocs Material** - Documentation framework
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD
- **Python** - Build tooling

## License

**GNU General Public License v3.0**

Copyright © 2025 MFitHou Team - OLP PMNM 2025

## Support

- 📖 Documentation: https://mfithou.github.io/MFitHou-Documents/
- 🐛 Issues: [GitHub Issues](https://github.com/MFitHou/MFitHou-Documents/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/MFitHou/MFitHou-Documents/discussions)

---

**Developed with ❤️ by MFitHou Team for OLP PMNM 2025**