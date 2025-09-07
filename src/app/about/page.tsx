import { Truck, Shield, Headphones, Award, Users, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Về FashionStore
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chúng tôi cam kết mang đến những sản phẩm thời trang chất lượng cao, 
            phù hợp với mọi phong cách và ngân sách của bạn.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Câu chuyện của chúng tôi</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  FashionStore được thành lập với tầm nhìn tạo ra một không gian mua sắm thời trang 
                  trực tuyến đáng tin cậy và tiện lợi cho người Việt Nam. Chúng tôi hiểu rằng thời trang 
                  không chỉ là quần áo mà còn là cách thể hiện cá tính và phong cách sống.
                </p>
                <p>
                  Với hơn 5 năm kinh nghiệm trong ngành thời trang, chúng tôi đã xây dựng được mối quan hệ 
                  bền vững với các nhà cung cấp uy tín, đảm bảo mọi sản phẩm đều đạt tiêu chuẩn chất lượng cao.
                </p>
                <p>
                  Chúng tôi tin rằng mọi người đều xứng đáng có được những sản phẩm thời trang đẹp, 
                  chất lượng với giá cả hợp lý.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award size={48} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chất lượng đảm bảo</h3>
              <p className="text-gray-600">
                Tất cả sản phẩm đều được kiểm tra kỹ lưỡng trước khi giao đến tay khách hàng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những nguyên tắc và giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tận tâm</h3>
              <p className="text-gray-600">
                Chúng tôi luôn đặt khách hàng làm trung tâm, cung cấp dịch vụ tận tình và chu đáo
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chất lượng</h3>
              <p className="text-gray-600">
                Cam kết mang đến sản phẩm chất lượng cao, bền đẹp và an toàn cho người dùng
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cộng đồng</h3>
              <p className="text-gray-600">
                Xây dựng cộng đồng yêu thích thời trang, chia sẻ kinh nghiệm và phong cách
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Khách hàng hài lòng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5K+</div>
              <div className="text-gray-600">Sản phẩm đa dạng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
              <div className="text-gray-600">Tỷ lệ hài lòng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Hỗ trợ khách hàng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội ngũ của chúng tôi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những con người tài năng và đam mê thời trang đang làm việc mỗi ngày để phục vụ bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-1">Nguyễn Văn A</h3>
              <p className="text-gray-600 mb-2">CEO & Founder</p>
              <p className="text-sm text-gray-500">
                Với 10 năm kinh nghiệm trong ngành thời trang, anh A dẫn dắt team phát triển 
                những sản phẩm chất lượng nhất.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-1">Trần Thị B</h3>
              <p className="text-gray-600 mb-2">Head of Design</p>
              <p className="text-sm text-gray-500">
                Chuyên gia về xu hướng thời trang, chị B đảm bảo mọi sản phẩm đều theo kịp 
                xu hướng mới nhất.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-1">Lê Văn C</h3>
              <p className="text-gray-600 mb-2">Customer Success</p>
              <p className="text-sm text-gray-500">
                Với tinh thần phục vụ tận tình, anh C đảm bảo mọi khách hàng đều có trải nghiệm 
                mua sắm tuyệt vời.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn mọi lúc mọi nơi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Hotline</h3>
              <p className="text-gray-600">1900 1234</p>
              <p className="text-sm text-gray-500">24/7 hỗ trợ</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@fashionstore.vn</p>
              <p className="text-sm text-gray-500">Phản hồi trong 24h</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Địa chỉ</h3>
              <p className="text-gray-600">123 Nguyễn Văn A, Q1</p>
              <p className="text-sm text-gray-500">TP. Hồ Chí Minh</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

