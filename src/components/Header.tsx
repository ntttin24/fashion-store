'use client'

import Link from 'next/link'
import { Search, ShoppingBag, Menu, User, Heart } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { categories } from '@/lib/data'
import { useState, useEffect } from 'react'

export default function Header() {
  const { getTotalItems, toggleCart } = useCartStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mounted, setMounted] = useState(false)

  const totalItems = getTotalItems()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-black text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          Miễn phí vận chuyển cho đơn hàng từ 500.000đ
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900 flex-shrink-0 mr-4">
            FashionStore
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-shrink-0">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors whitespace-nowrap">
              Trang chủ
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-black transition-colors whitespace-nowrap">
              Sản phẩm
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-black transition-colors whitespace-nowrap">
                Danh mục
              </button>
              {/* Dropdown menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors whitespace-nowrap">
              Về chúng tôi
            </Link>
          </nav>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md lg:max-w-lg mx-4 lg:mx-8 min-w-0">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-black transition-colors"
            >
              <Menu size={20} />
            </button>

            {/* Desktop icons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <button className="p-2 text-gray-700 hover:text-black transition-colors">
                <User size={20} />
              </button>
              <button className="p-2 text-gray-700 hover:text-black transition-colors">
                <Heart size={20} />
              </button>
              <button
                onClick={toggleCart}
                className="relative p-2 text-gray-700 hover:text-black transition-colors"
              >
                <ShoppingBag size={20} />
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile/Tablet cart icon */}
            <button
              onClick={toggleCart}
              className="lg:hidden relative p-2 text-gray-700 hover:text-black transition-colors"
            >
              <ShoppingBag size={20} />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="lg:hidden pb-3 md:pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-black py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link 
              href="/products" 
              className="block text-gray-700 hover:text-black py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sản phẩm
            </Link>
            <div className="space-y-2">
              <p className="font-medium text-gray-900 py-2">Danh mục</p>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="block pl-4 text-gray-600 hover:text-black py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <Link 
              href="/about" 
              className="block text-gray-700 hover:text-black py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Về chúng tôi
            </Link>
            <div className="flex items-center space-x-6 pt-4 border-t">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-black py-2">
                <User size={18} />
                <span>Tài khoản</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-black py-2">
                <Heart size={18} />
                <span>Yêu thích</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

