import Link from 'next/link'
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react'
import { products } from '@/lib/data'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  const featuredProducts = products.filter(product => product.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Thời trang hiện đại
              <span className="block text-yellow-400">cho mọi phong cách</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 leading-relaxed">
              Khám phá bộ sưu tập thời trang mới nhất với chất lượng cao và giá cả hợp lý. 
              Từ trang phục công sở đến street style, chúng tôi có tất cả.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/products">
                <button className="w-full sm:w-auto bg-white text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                  Khám phá ngay
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </Link>
              <Link href="/category/ao-nu">
                <button className="w-full sm:w-auto border border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-base">
                  Bộ sưu tập nữ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Truck className="text-blue-600" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Miễn phí vận chuyển</h3>
              <p className="text-sm sm:text-base text-gray-600">Giao hàng miễn phí cho đơn từ 500.000đ</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="text-green-600" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Đảm bảo chất lượng</h3>
              <p className="text-sm sm:text-base text-gray-600">Cam kết 100% chất lượng sản phẩm</p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Headphones className="text-purple-600" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Hỗ trợ 24/7</h3>
              <p className="text-sm sm:text-base text-gray-600">Tư vấn và hỗ trợ mọi lúc mọi nơi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Sản phẩm nổi bật</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Những sản phẩm được yêu thích nhất với chất lượng cao và thiết kế thời thượng
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/products">
              <button className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                Xem tất cả sản phẩm
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Đăng ký nhận tin mới</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nhận thông tin về sản phẩm mới, ưu đãi đặc biệt và xu hướng thời trang mới nhất
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FashionStore</h3>
              <p className="text-gray-400 mb-4">
                Thời trang hiện đại cho mọi phong cách sống
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-400">4.8/5 (1,234 đánh giá)</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Danh mục</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/category/ao-nam" className="hover:text-white transition-colors">Áo Nam</Link></li>
                <li><Link href="/category/ao-nu" className="hover:text-white transition-colors">Áo Nữ</Link></li>
                <li><Link href="/category/quan-nam" className="hover:text-white transition-colors">Quần Nam</Link></li>
                <li><Link href="/category/giay-dep" className="hover:text-white transition-colors">Giày Dép</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Hướng dẫn mua hàng</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Chính sách đổi trả</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Bảo mật thanh toán</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Liên hệ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 1900 1234</li>
                <li>📧 info@fashionstore.vn</li>
                <li>📍 123 Nguyễn Văn A, Q1, TP.HCM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FashionStore. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}