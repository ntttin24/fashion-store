
import { Product, Category } from '@/types'

export const categories: Category[] = [
  { id: '1', name: 'Áo Nam', slug: 'ao-nam' },
  { id: '2', name: 'Áo Nữ', slug: 'ao-nu' },
  { id: '3', name: 'Quần Nam', slug: 'quan-nam' },
  { id: '4', name: 'Quần Nữ', slug: 'quan-nu' },
  { id: '5', name: 'Giày Dép', slug: 'giay-dep' },
  { id: '6', name: 'Phụ Kiện', slug: 'phu-kien' },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Áo Thun Nam Basic',
    price: 299000,
    originalPrice: 399000,
    description: 'Áo thun nam basic chất liệu cotton thoáng mát, form regular fit phù hợp mọi dáng người.',
    category: 'ao-nam',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Trắng', 'Đen', 'Xám', 'Navy'],
    images: ['https://images.unsplash.com/photo-1716541424893-734612ddcabb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    featured: true,
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: '2',
    name: 'Áo Sơ Mi Nam Công Sở',
    price: 599000,
    description: 'Áo sơ mi nam công sở chất liệu cotton cao cấp, thiết kế sang trọng phù hợp môi trường làm việc.',
    category: 'ao-nam',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Trắng', 'Xanh', 'Hồng nhạt'],
    images: ['https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: '3',
    name: 'Váy Maxi Nữ',
    price: 450000,
    originalPrice: 550000,
    description: 'Váy maxi nữ họa tiết hoa nhẹ nhàng, chất liệu voan mềm mại, thích hợp dạo phố và đi biển.',
    category: 'ao-nu',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Hoa đỏ', 'Hoa xanh', 'Hoa vàng'],
    images: ['https://images.unsplash.com/photo-1583333001978-8c57d752ce5b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '/images/placeholder.svg'],
    featured: true,
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: '4',
    name: 'Quần Jeans Nam Slim Fit',
    price: 699000,
    description: 'Quần jeans nam slim fit chất liệu denim cao cấp, thiết kế hiện đại, bền đẹp theo thời gian.',
    category: 'quan-nam',
    sizes: ['29', '30', '31', '32', '33', '34'],
    colors: ['Xanh đậm', 'Xanh nhạt', 'Đen'],
    images: ['https://plus.unsplash.com/premium_photo-1688497831535-120bd47d9f9c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '/images/placeholder.svg'],
    rating: 4.6,
    reviewCount: 203
  },
  {
    id: '5',
    name: 'Chân Váy Nữ A-Line',
    price: 359000,
    description: 'Chân váy nữ dáng A-line thanh lịch, chất liệu polyester mềm mại, dễ phối đồ.',
    category: 'quan-nu',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Đen', 'Navy', 'Kem', 'Đỏ burgundy'],
    images: ['https://plus.unsplash.com/premium_photo-1737471896317-2994eb4661c4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    rating: 4.4,
    reviewCount: 67
  },
  {
    id: '6',
    name: 'Giày Sneaker Unisex',
    price: 1299000,
    originalPrice: 1599000,
    description: 'Giày sneaker unisex thiết kế trendy, đế cao su chống trượt, phù hợp mọi hoạt động.',
    category: 'giay-dep',
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43'],
    colors: ['Trắng', 'Đen', 'Xám', 'Đỏ'],
    images: ['https://images.unsplash.com/photo-1739444929269-341792e2a4ea?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '/images/placeholder.svg'],
    featured: true,
    rating: 4.9,
    reviewCount: 312
  },
  {
    id: '7',
    name: 'Túi Xách Tay Nữ',
    price: 899000,
    description: 'Túi xách tay nữ chất liệu da PU cao cấp, thiết kế tinh tế với nhiều ngăn tiện lợi.',
    category: 'phu-kien',
    sizes: ['One Size'],
    colors: ['Đen', 'Nâu', 'Trắng kem'],
    images: ['https://plus.unsplash.com/premium_photo-1695603437447-21cc2e206536?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4ncyUyMGhhbmRiYWdzfGVufDB8fDB8fHww', '/images/placeholder.svg'],
    rating: 4.3,
    reviewCount: 94
  },
  {
    id: '8',
    name: 'Áo Hoodie Unisex',
    price: 549000,
    description: 'Áo hoodie unisex chất liệu nỉ cotton mềm mại, ấm áp, form oversized trendy.',
    category: 'ao-nam',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Đen', 'Xám', 'Navy', 'Đỏ đô'],
    images: ['https://images.unsplash.com/photo-1588932250351-36235af5c0f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    rating: 4.6,
    reviewCount: 178
  }
]

