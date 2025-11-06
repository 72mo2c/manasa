import { Inter } from 'next/font/google'
import Link from 'next/link'
import { 
  Heart,
  User,
  ShoppingCart,
  Search,
  Menu,
  ChevronDown,
  Star,
  Play,
  Users,
  Globe,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  Filter,
  MapPin,
  Clock,
  Video,
  BookOpen,
  ShoppingBag
} from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

// Sample data for demonstration
const featuredProducts = [
  {
    id: 1,
    name: 'إناء فخاري تقليدي',
    artisan: 'أحمد الخزف',
    price: 450,
    currency: 'جنيه',
    image: '/api/placeholder/300/400',
    rating: 4.8,
    reviews: 24,
    category: 'فخار',
    location: 'الفيوم، مصر',
    isNew: true,
  },
  {
    id: 2,
    name: 'قصدير مصقول يدوياً',
    artisan: 'فاطمة النحاس',
    price: 850,
    currency: 'جنيه',
    image: '/api/placeholder/300/400',
    rating: 4.9,
    reviews: 18,
    category: 'نحاس',
    location: 'القاهرة، مصر',
    isFeatured: true,
  },
  {
    id: 3,
    name: 'سجادة صوف تقليدية',
    artisan: 'محمد النسج',
    price: 2400,
    currency: 'جنيه',
    image: '/api/placeholder/300/400',
    rating: 4.7,
    reviews: 12,
    category: 'نسج',
    location: 'الأقصر، مصر',
  },
  {
    id: 4,
    name: 'حزام جلد طبيعي',
    artisan: 'علي الجلود',
    price: 320,
    currency: 'جنيه',
    image: '/api/placeholder/300/400',
    rating: 4.6,
    reviews: 31,
    category: 'جلود',
    location: 'أسوان، مصر',
  },
]

const craftCategories = [
  { name: 'فخار', count: 156, icon: '🏺' },
  { name: 'نحاس', count: 89, icon: '⚱️' },
  { name: 'سجاد', count: 67, icon: '🧶' },
  { name: 'جلود', count: 123, icon: '👜' },
  { name: 'خشب', count: 95, icon: '🪵' },
  { name: 'زجاج', count: 78, icon: '💎' },
  { name: 'فضة', count: 45, icon: '✨' },
  { name: 'صدف', count: 32, icon: '🐚' },
]

const liveArtisans = [
  {
    id: 1,
    name: 'أحمد الخزف',
    specialty: 'خزف تقليدي',
    viewers: 247,
    product: 'إناء زخرفي',
    image: '/api/placeholder/100/100',
    isLive: true,
  },
  {
    id: 2,
    name: 'فاطمة النحاس',
    specialty: 'نقش نحاس',
    viewers: 189,
    product: 'طبق تراثي',
    image: '/api/placeholder/100/100',
    isLive: false,
  },
]

const testimonials = [
  {
    id: 1,
    name: 'سارة أحمد',
    comment: 'منتج رائع وجودة ممتازة، الحرفي أصر على التأكد من رضائي الكامل',
    rating: 5,
    product: 'طقم كؤوس فخارية',
    avatar: '/api/placeholder/60/60',
  },
  {
    id: 2,
    name: 'محمود علي',
    comment: 'أول مرة أشتري من هنا، التجربة كانت مذهلة والتوصيل سريع',
    rating: 5,
    product: 'مبخرة نحاس',
    avatar: '/api/placeholder/60/60',
  },
  {
    id: 3,
    name: 'نورهان محمد',
    comment: 'أحببت فكرة البث المباشر، أشاهد الحرفي أثناء العمل وهو شيء جميل',
    rating: 5,
    product: 'جلبان حرير',
    avatar: '/api/placeholder/60/60',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-neutral-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-heading font-bold text-primary-800">
                حِرَفْنا
              </Link>
              <span className="mr-2 text-sm text-neutral-600">تراثنا هويتك</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link href="/products" className="nav-link">
                المنتجات
              </Link>
              <Link href="/artisans" className="nav-link">
                الحرفيين
              </Link>
              <Link href="/live" className="nav-link flex items-center">
                ورّي الحرفة
                <div className="live-indicator mr-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </Link>
              <Link href="/content" className="nav-link">
                المحتوى
              </Link>
              <Link href="/about" className="nav-link">
                من نحن
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="ابحث عن المنتجات أو الحرفيين..."
                  className="w-full pl-4 pr-12 py-3 border border-neutral-300 rounded-sharp focus:border-primary-400 focus:ring-2 focus:ring-primary-400 focus:ring-opacity-20 focus:outline-none"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <button className="nav-link p-2">
                <Heart className="w-6 h-6" />
              </button>
              <Link href="/cart" className="nav-link p-2 relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-400 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link href="/login" className="btn-ghost flex items-center">
                <User className="w-5 h-5 mr-2" />
                تسجيل الدخول
              </Link>
              <button className="md:hidden p-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-100 via-neutral-100 to-secondary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-neutral-800 mb-6">
              اكتشف <span className="text-gradient">تراثنا</span> في كل قطعة
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              منصة حِرَفْنا تربط أفضل الحرفيين التقليديين بعملاء يقدرون الجودة والأصالة. 
              كل قطعة تحكي قصة فريدة من تراثنا العريق.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary">
                <ShoppingBag className="w-5 h-5 mr-2" />
                تسوق الآن
              </Link>
              <Link href="/artisans" className="btn-secondary">
                <Users className="w-5 h-5 mr-2" />
                تصفح الحرفيين
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Streaming Section */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-4 flex items-center justify-center">
              <Video className="w-8 h-8 mr-3 text-red-500" />
              ورّي الحرفة - بث مباشر
            </h2>
            <p className="text-lg text-neutral-600">
              شاهد الحرفيين وهم ينجزون أعمالهم الجميلة في الوقت الفعلي
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Main Live Stream */}
            <div className="card-highlight relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="live-indicator">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                    مباشر الآن
                  </div>
                  <span className="mr-4 text-secondary-100">247 مشاهد</span>
                </div>
                <button className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                  <Play className="w-6 h-6" />
                </button>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">أحمد الخزف</h3>
              <p className="text-secondary-100 mb-4">يشتغل على إناء زخرفي تقليدي</p>
              <div className="aspect-video bg-black bg-opacity-30 rounded-soft flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-white">شاهد البث المباشر</p>
                </div>
              </div>
            </div>

            {/* Live Artisans List */}
            <div className="card">
              <h3 className="text-xl font-heading font-bold mb-6">الحرفيين المتواجدين الآن</h3>
              <div className="space-y-4">
                {liveArtisans.map((artisan) => (
                  <div key={artisan.id} className="flex items-center p-4 bg-neutral-50 rounded-soft">
                    <img 
                      src={artisan.image} 
                      alt={artisan.name}
                      className="w-12 h-12 rounded-full ml-4"
                    />
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-neutral-800">{artisan.name}</h4>
                      <p className="text-sm text-neutral-600">{artisan.specialty}</p>
                      <p className="text-sm text-primary-400">{artisan.product}</p>
                    </div>
                    <div className="text-left">
                      {artisan.isLive ? (
                        <div className="live-indicator">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-1"></div>
                          {artisan.viewers}
                        </div>
                      ) : (
                        <span className="text-sm text-neutral-400">غير متاح</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-4">
              تصفح الحرف
            </h2>
            <p className="text-lg text-neutral-600">
              اختر من بين مجموعة واسعة من الحرف اليدوية التقليدية
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {craftCategories.map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.name}`}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-heading font-semibold text-neutral-800 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-neutral-600">
                  {category.count} منتج
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-4">
                المنتجات المميزة
              </h2>
              <p className="text-lg text-neutral-600">
                أفضل ما لدينا من منتجات حرفية أصيلة
              </p>
            </div>
            <Link href="/products" className="btn-ghost flex items-center">
              عرض الكل
              <ArrowRight className="w-5 h-5 mr-2" />
            </Link>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card-product group cursor-pointer">
                <div className="aspect-[4/5] bg-neutral-200 rounded-soft mb-4 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <div className="absolute top-3 right-3 bg-primary-400 text-white px-3 py-1 rounded-full text-sm">
                      جديد
                    </div>
                  )}
                  {product.isFeatured && (
                    <div className="absolute top-3 left-3 bg-secondary-400 text-white px-3 py-1 rounded-full text-sm">
                      مميز
                    </div>
                  )}
                  <button className="absolute bottom-3 right-3 p-2 bg-white bg-opacity-90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-5 h-5 text-neutral-600 hover:text-primary-400" />
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-neutral-800 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-neutral-600">{product.artisan}</p>
                    <div className="flex items-center mt-1">
                      <MapPin className="w-4 h-4 text-neutral-400 ml-1" />
                      <span className="text-sm text-neutral-500">{product.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-neutral-600 mr-1">{product.rating}</span>
                      <span className="text-sm text-neutral-400">({product.reviews})</span>
                    </div>
                    <span className="text-lg font-bold text-primary-800">
                      {product.price} {product.currency}
                    </span>
                  </div>
                  
                  <button className="w-full btn-primary mt-4">
                    إضافة للسلة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-heading font-bold mb-2">850+</div>
              <p className="text-primary-100">حرفي مسجل</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold mb-2">12,000+</div>
              <p className="text-primary-100">منتج متاح</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold mb-2">95%</div>
              <p className="text-primary-100">رضا العملاء</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold mb-2">24/7</div>
              <p className="text-primary-100">دعم فني</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-4">
              آراء عملائنا
            </h2>
            <p className="text-lg text-neutral-600">
              تجارب حقيقية من عملاء راضين عن منتجاتنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full ml-4"
                  />
                  <div>
                    <h4 className="font-heading font-semibold text-neutral-800">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <p className="text-sm text-primary-400 font-medium">
                  منتج: {testimonial.product}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-secondary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-4">
            اشترك في نشرتنا الإخبارية
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            احصل على آخر المنتجات الجديدة والعروض الحصرية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="input-field flex-1"
            />
            <button className="btn-primary whitespace-nowrap">
              اشتراك
            </button>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            نحترم خصوصيتك ولن نرسل لك أي محتوى غير مرغوب فيه
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">حِرَفْنا</h3>
              <p className="text-neutral-300 mb-4">
                منصة حِرَفْنا تربط الحرفيين التقليديين بالعملاء حول العالم، 
                مع الحفاظ على التراث الحرفي وتقديم منتجات أصلية عالية الجودة.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="text-neutral-400 hover:text-white">
                  <Globe className="w-6 h-6" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-white">
                  <Users className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-neutral-400 hover:text-white">المنتجات</Link></li>
                <li><Link href="/artisans" className="text-neutral-400 hover:text-white">الحرفيين</Link></li>
                <li><Link href="/live" className="text-neutral-400 hover:text-white">ورّي الحرفة</Link></li>
                <li><Link href="/content" className="text-neutral-400 hover:text-white">المحتوى</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">الدعم</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-neutral-400 hover:text-white">مركز المساعدة</Link></li>
                <li><Link href="/contact" className="text-neutral-400 hover:text-white">تواصل معنا</Link></li>
                <li><Link href="/shipping" className="text-neutral-400 hover:text-white">الشحن والتوصيل</Link></li>
                <li><Link href="/returns" className="text-neutral-400 hover:text-white">الإرجاع والاستبدال</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">معلومات</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-neutral-400 hover:text-white">من نحن</Link></li>
                <li><Link href="/privacy" className="text-neutral-400 hover:text-white">سياسة الخصوصية</Link></li>
                <li><Link href="/terms" className="text-neutral-400 hover:text-white">شروط الاستخدام</Link></li>
                <li><Link href="/careers" className="text-neutral-400 hover:text-white">الوظائف</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-700 mt-12 pt-8 text-center">
            <p className="text-neutral-400">
              © 2025 حِرَفْنا. جميع الحقوق محفوظة. تم التطوير بواسطة{' '}
              <a href="https://minimax.com" className="text-primary-400 hover:text-primary-300">
                MiniMax Agent
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}// Use the new page with all updates
export { default } from './page-new'