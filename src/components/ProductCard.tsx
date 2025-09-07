'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { Product } from '@/types'
import { useState } from 'react'
import { useCartStore } from '@/store/cart'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const { addItem } = useCartStore()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Badge giảm giá */}
      {discountPercent > 0 && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
          -{discountPercent}%
        </div>
      )}

      {/* Nút yêu thích */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-10 p-1.5 sm:p-2 rounded-full transition-colors ${
          isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white'
        }`}
      >
        <Heart size={14} className={`sm:w-4 sm:h-4 ${isLiked ? 'fill-current' : ''}`} />
      </button>

      {/* Hình ảnh sản phẩm */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Thông tin sản phẩm */}
      <div className="p-3 sm:p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2 text-sm sm:text-base">
            {product.name}
          </h3>
        </Link>

        {/* Đánh giá */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={`sm:w-3 sm:h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Giá */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-bold text-base sm:text-lg text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs sm:text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Màu sắc có sẵn */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-xs text-gray-500">Màu:</span>
          {product.colors.slice(0, 3).map((color, index) => (
            <div
              key={index}
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-200"
              style={{ 
                backgroundColor: color === 'Trắng' ? '#ffffff' : 
                               color === 'Đen' ? '#000000' : 
                               color === 'Xám' ? '#6b7280' : 
                               color === 'Navy' ? '#1e3a8a' : '#3b82f6' 
              }}
              title={color}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="text-xs text-gray-400">+{product.colors.length - 3}</span>
          )}
        </div>

        {/* Nút thêm vào giỏ */}
        <button 
          onClick={() => {
            addItem({
              productId: product.id,
              name: product.name,
              price: product.price,
              image: product.images[0],
              size: product.sizes[0],
              color: product.colors[0],
              quantity: 1
            })
            alert('Đã thêm vào giỏ hàng!')
          }}
          className="w-full bg-black text-white py-2 px-3 sm:px-4 rounded hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group text-xs sm:text-sm"
        >
          <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
          <span>Thêm vào giỏ</span>
        </button>
      </div>
    </div>
  )
}

