import React from 'react'
import { HeroSection } from '@/components/HeroSection'
import { HeritageGallery } from '@/components/HeritageGallery'
import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/Button'
import { CATEGORY_IMAGES, CRAFT_CATEGORIES } from '@/constants'
import { 
  Play, 
  Sparkles, 
  Users, 
  Award, 
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function HomePage() {
  // Mock featured products with real images
  const featuredProducts = [
    {
      id: 1,
      name: 'إناء فخاري تقليدي من الفيوم',
      artisan: 'أحمد الخزف',
      artisanId: 'ahmad-pottery',
      price: 450,
      currency: 'EGP',
      image: CATEGORY_IMAGES.pottery,
      images: [CATEGORY_IMAGES.pottery],
      rating: 4.8,
      reviews: 24,
      category: 'pottery',
      categoryName: 'فخار',
      location: 'الفيوم، مصر',
      isNew: true,
      isHandmade: true,
      isAuthentic: true,
      stock: 5,
      description: 'إناء فخاري تقليدي مصنوع يدوياً من طين الفيوم الأصيل'
    },
    {
      id: 2,
      name: 'أدوات نحاسية مصقولة',
      artisan: 'فاطمة النحاس',
      artisanId: 'fatma-copper',
      price: 850,
      currency: 'EGP',
      image: CATEGORY_IMAGES.metalwork,
      images: [CATEGORY_IMAGES.metalwork],
      rating: 4.9,
      reviews: 18,
      category: 'metalwork',
      categoryName: 'معدني',
      location: 'القاهرة، مصر',
      isNew: false,
      isHandmade: true,
      isAuthentic: true,
      stock: 3,
      description: 'مجموعة من الأدوات النحاسية المصقولة يدوياً'
    },
    {
      id: 3,
      name: 'حجاب منسوج يدوياً',
      artisan: 'مريم النساج',
      artisanId: 'mariam-textile',
      price: 320,
      currency: 'EGP',
      image: CATEGORY_IMAGES.textiles,
      images: [CATEGORY_IMAGES.textiles],
      rating: 4.7,
      reviews: 31,
      category: 'textiles',
      categoryName: 'منسوجات',
      location: 'سوهاج، مصر',
      isNew: true,
      isHandmade: true,
      isAuthentic: true,
      stock: 8,
      description: 'حجاب جميل منسوج يدوياً من القطن الطبيعي'
    },
    {
      id: 4,
      name: 'لوح خشبي منحوت',
      artisan: 'علي النجار',
      artisanId: 'ali-carpenter',
      price: 1250,
      currency: 'EGP',
      image: CATEGORY_IMAGES.woodwork,
      images: [CATEGORY_IMAGES.woodwork],
      rating: 4.9,
      reviews: 12,
      category: 'woodwork',
      categoryName: 'خشب',
      location: 'أسوان، مصر',
      isNew: false,
      isHandmade: true,
      isAuthentic: true,
      stock: 2,
      description: 'لوح خشبي منحوت بأنماط تراثية أصيلة'
    }
  ]

  // Live streaming data
  const liveStream = {
    id: 'live-1',
    artisan: {
      name: 'مختار النحاس',
      specialty: 'نحاس وأدوات تقليدية',
      avatar: CATEGORY_IMAGES.metalwork
    },
    title: 'ورّي الحرفة: صنع الإبريق النحاسي',
    viewers: 156,
    isLive: true,
    thumbnail: CATEGORY_IMAGES.metalwork
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Live Streaming Section */}
      <section className="py-16 bg-gradient-to-r from-[#6A7C55] to-[#8C6E4A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-500 animate-pulse rounded-full w-3 h-3 mr-2"></div>
              <h2 className="text-3xl md:text-4xl font-bold font-cairo text-white">
                بث مباشر الآن
              </h2>
            </div>
            <p className="text-white/90 font-almarai text-lg">
              شاهد الحرفيين وهم يصنعون التحف بأيديهم
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <img
                  src={liveStream.thumbnail}
                  alt={liveStream.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all group">
                    <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform" fill="white" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-almarai flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  مباشر
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {liveStream.viewers} مشاهد
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-cairo text-[#6A7C55] mb-2">
                      {liveStream.title}
                    </h3>
                    <p className="text-[#8C6E4A] font-almarai">
                      مع {liveStream.artisan.name} - {liveStream.artisan.specialty}
                    </p>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-[#C8A97E] hover:bg-[#B8956B] text-white"
                  >
                    انضم للبث
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-cairo text-[#6A7C55] mb-4">
              تصفح حسب الفئة
            </h2>
            <p className="text-lg font-almarai text-[#8C6E4A] max-w-2xl mx-auto">
              اكتشف مجموعة متنوعة من الحرف اليدوية التقليدية
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CRAFT_CATEGORIES.slice(0, 10).map((category) => (
              <div 
                key={category.id}
                className="group cursor-pointer text-center p-6 rounded-2xl border-2 border-[#F0F0F0] hover:border-[#C8A97E] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-cairo font-bold text-[#6A7C55] mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-[#8C6E4A] font-almarai opacity-80">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-[#F8F6F3]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-cairo text-[#6A7C55] mb-4">
                المنتجات المميزة
              </h2>
              <p className="text-lg font-almarai text-[#8C6E4A]">
                اكتشف أفضل ما لدينا من الحرف اليدوية الأصيلة
              </p>
            </div>
            <Button 
              variant="outline" 
              className="border-[#C8A97E] text-[#6A7C55] hover:bg-[#C8A97E] hover:text-white"
              asChild
            >
              <a href="/products">
                عرض الكل
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                className="transform hover:scale-105 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Gallery */}
      <HeritageGallery />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-cairo text-[#6A7C55] mb-4">
              لماذا حِرَفْنا؟
            </h2>
            <p className="text-lg font-almarai text-[#8C6E4A] max-w-2xl mx-auto">
              منصتك الموثوقة للحصول على أفضل الحرف اليدوية التقليدية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#C8A97E] rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-cairo text-[#6A7C55] mb-3">
                جودة أصيلة
              </h3>
              <p className="text-[#8C6E4A] font-almarai">
                جميع المنتجات مصنوعة يدوياً من أفضل المواد الطبيعية
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#6A7C55] rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-cairo text-[#6A7C55] mb-3">
                حرفيين معتمدين
              </h3>
              <p className="text-[#8C6E4A] font-almarai">
                أكثر من 850 حرفي محترف معتمد من جميع أنحاء مصر
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#8C6E4A] rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-cairo text-[#6A7C55] mb-3">
                دعم التراث
              </h3>
              <p className="text-[#8C6E4A] font-almarai">
                نساهم في الحفاظ على الحرف التراثية من الاندثار
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#C8A97E] rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-cairo text-[#6A7C55] mb-3">
                نمو الحرفيين
              </h3>
              <p className="text-[#8C6E4A] font-almarai">
                نوفر منصة لزيادة دخل الحرفيين وتحقيق أحلامهم
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F8F6F3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-cairo text-[#6A7C55] mb-4">
              آراء عملائنا
            </h2>
            <p className="text-lg font-almarai text-[#8C6E4A]">
              تجارب حقيقية من عملاء راضين عن منتجاتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#C8A97E] fill-current" />
                ))}
              </div>
              <p className="text-[#6A7C55] font-almarai mb-4">
                "منتج رائع وجودة ممتازة! أحببت فكرة دعم الحرفيين المحليين"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#C8A97E] rounded-full flex items-center justify-center text-white font-bold">
                  م
                </div>
                <div className="mr-3">
                  <p className="font-bold text-[#6A7C55]">مريم أحمد</p>
                  <p className="text-sm text-[#8C6E4A]">عميلة من القاهرة</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#C8A97E] fill-current" />
                ))}
              </div>
              <p className="text-[#6A7C55] font-almarai mb-4">
                "التوصيل سريع والتغليف ممتاز. سأطلب مرة أخرى بالتأكيد"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#6A7C55] rounded-full flex items-center justify-center text-white font-bold">
                  أ
                </div>
                <div className="mr-3">
                  <p className="font-bold text-[#6A7C55]">أحمد علي</p>
                  <p className="text-sm text-[#8C6E4A]">عميل من الإسكندرية</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#C8A97E] fill-current" />
                ))}
              </div>
              <p className="text-[#6A7C55] font-almarai mb-4">
                "موقع رائع وأحببت فكرة البث المباشر لعرض الحرف"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#8C6E4A] rounded-full flex items-center justify-center text-white font-bold">
                  ف
                </div>
                <div className="mr-3">
                  <p className="font-bold text-[#6A7C55]">فاطمة حسن</p>
                  <p className="text-sm text-[#8C6E4A]">عميلة من أسوان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-[#6A7C55] to-[#8C6E4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-cairo text-white mb-4">
            اشترك في نشرتنا البريدية
          </h2>
          <p className="text-white/90 font-almarai text-lg mb-8 max-w-2xl mx-auto">
            احصل على آخر المنتجات الجديدة والعروض الحصرية مباشرة في بريدك الإلكتروني
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#C8A97E] text-right font-almarai"
            />
            <Button className="bg-[#C8A97E] hover:bg-[#B8956B] text-white px-8">
              اشتراك
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-cairo text-[#6A7C55] mb-4">
              تواصل معنا
            </h2>
            <p className="text-lg font-almarai text-[#8C6E4A]">
              نحن هنا لمساعدتك في كل ما تحتاجه
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold font-cairo text-[#6A7C55] mb-2">
                هاتف الدعم
              </h3>
              <p className="text-[#8C6E4A] font-almarai">+20 2 1234 5678</p>
            </div>
            <div>
              <h3 className="text-xl font-bold font-cairo text-[#6A7C55] mb-2">
                البريد الإلكتروني
              </h3>
              <p className="text-[#8C6E4A] font-almarai">info@hirafna.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold font-cairo text-[#6A7C55] mb-2">
                العنوان
              </h3>
              <p className="text-[#8C6E4A] font-almarai">123 شارع التجارة، الدقي، الجيزة</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}