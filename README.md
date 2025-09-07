# FashionStore - E-commerce Demo

Dự án demo e-commerce thời trang được xây dựng với Next.js 15, TypeScript và Tailwind CSS.

## 🚀 Tính năng chính

- **Trang chủ** - Hero section, sản phẩm nổi bật, features
- **Danh sách sản phẩm** - Search, filter, sort theo giá/đánh giá
- **Chi tiết sản phẩm** - Gallery ảnh, chọn size/màu, thêm giỏ hàng
- **Giỏ hàng** - Add/remove/update quantity, tính tổng tiền
- **Danh mục** - Filter theo category
- **Responsive design** - Mobile-first approach
- **State management** - Zustand cho cart

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Icons:** Lucide React
- **Font:** Inter

## 📦 Cài đặt

```bash
# Clone project
git clone <repository-url>
cd fashion-store

# Install dependencies
npm install

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📁 Cấu trúc project

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Trang chủ
│   ├── about/             # Trang giới thiệu
│   ├── products/          # Danh sách sản phẩm
│   │   └── [id]/         # Chi tiết sản phẩm
│   └── category/          # Danh mục sản phẩm
│       └── [slug]/       # Chi tiết danh mục
├── components/            # React components
│   ├── Header.tsx        # Header với navigation
│   ├── ProductCard.tsx   # Card sản phẩm
│   └── Cart.tsx          # Giỏ hàng sidebar
├── lib/                  # Utilities
│   └── data.ts           # Mock data sản phẩm
├── store/                # State management
│   └── cart.ts           # Zustand cart store
└── types/                # TypeScript types
    └── index.ts          # Type definitions
```

## 🎨 Thêm ảnh sản phẩm

1. Tải ảnh thời trang từ Unsplash/Pinterest
2. Đặt vào `public/images/` với tên theo convention:
   - `ao-thun-nam-1.jpg`
   - `vay-maxi-1.jpg`
   - `quan-jeans-nam-1.jpg`
   - etc.

3. Cập nhật đường dẫn trong `src/lib/data.ts` nếu cần

## 🔧 Customization

### Thêm sản phẩm mới
Chỉnh sửa `src/lib/data.ts`:

```typescript
export const products: Product[] = [
  {
    id: '9',
    name: 'Tên sản phẩm',
    price: 299000,
    // ... các thuộc tính khác
  }
]
```

### Thêm danh mục mới
Chỉnh sửa `src/lib/data.ts`:

```typescript
export const categories: Category[] = [
  { id: '7', name: 'Tên danh mục', slug: 'ten-danh-muc' }
]
```

### Thay đổi theme
Chỉnh sửa `tailwind.config.js` để customize colors, fonts, etc.

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🚀 Deploy

### Vercel (Khuyến nghị)
```bash
npm run build
# Deploy lên Vercel
```

### Netlify
```bash
npm run build
npm run export
# Upload thư mục out/ lên Netlify
```

## 📝 Notes

- Project này chỉ demo frontend, không có backend
- Dữ liệu sản phẩm được lưu trong file JSON
- Cart state được persist trong localStorage
- Ảnh sản phẩm cần được thêm thủ công

## 🤝 Contributing

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

- Email: info@fashionstore.vn
- Website: [fashionstore.vn](https://fashionstore.vn)