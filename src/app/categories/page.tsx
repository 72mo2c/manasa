import React from 'react'
import { Link } from 'next/link'
import { CRAFT_CATEGORIES, CATEGORY_IMAGES } from '@/constants'
import { ArrowRight, MapPin, Star, TrendingUp, Users } from 'lucide-react'

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-gradient-to-r from-[#6A7C55] to-[#8C6E4A] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(140, 110, 74, 0.8), rgba(106, 124, 85, 0.9)), url(/imgs/heritage_background_7.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-cairo mb-6">
            فئات الحرف اليدوية
          </h1>
          <p className="text-xl font-almarai opacity-90 max-w-2xl mx-auto mb-8">
            استكشف مجموعة متنوعة من الحرف اليدوية التقليدية العربية الأصيلة
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold font-cairo">50+</div>
              <div className="text-sm font-almarai">نوع حرفية</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold font-cairo">850+</div>
              <div className="text-sm font-almarai">حرفي محترف</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold font-cairo">12K+</div>
              <div className="text-sm font-almarai">منتج أصلي</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold font-cairo">4.8★</div>
              <div className="text-sm font-almarai">تقييم العملاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CRAFT_CATEGORIES.map((category, index) => {
              const categoryImage = CATEGORY_IMAGES[category.id as keyof typeof CATEGORY_IMAGES]
              const isEven = index % 2 === 0
              
              return (
                <Link 
                  key={category.id}
                  href={`/products?category=${category.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={categoryImage || '/api/placeholder/400/300'}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Icon */}
                      <div className="absolute top-4 left-4 bg-[#C8A97E] text-white rounded-full p-3 text-2xl">
                        {category.icon}
                      </div>
                      
                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-almarai">
                        <TrendingUp className="inline h-4 w-4 mr-1" />
                        مشهور
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-2xl font-bold font-cairo mb-2">
                          {category.name}
                        </h3>
                        <p className="text-sm font-almarai opacity-90">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-[#6A7C55]">
                          <Star className="h-4 w-4 text-[#C8A97E] fill-current mr-1" />
                          <span className="text-sm font-semibold">4.{Math.floor(Math.random() * 3) + 7}</span>
                        </div>
                        <div className="text-[#8C6E4A] text-sm font-almarai">
                          {Math.floor(Math.random() * 50) + 10} منتج
                        </div>
                      </div>
                      
                      <p className="text-[#8C6E4A] font-almarai text-sm mb-4 line-clamp-2">
                        اكتشف جمال وعراقة {category.name} المصنوع بأيدي الحرفيين المهرة
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#6A7C55] text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{Math.floor(Math.random() * 10) + 5} مدن</span>
                        </div>
                        <div className="flex items-center text-[#C8A97E] group-hover:text-[#B8956B] transition-colors">
                          <span className="text-sm font-almarai mr-2">تسوق الآن</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Categories Banner */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div 
            className="relative rounded-2xl overflow-hidden text-center text-white p-16"
            style={{
              backgroundImage: `linear-gradient(rgba(140, 110, 74, 0.8), rgba(106, 124, 85, 0.9)), url(/imgs/marketplace_scene_7.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-cairo mb-6">
              ابدأ رحلتك في عالم التراث
            </h2>
            <p className="text-xl font-almarai opacity-90 mb-8 max-w-2xl mx-auto">
              اختر فئتك المفضلة واكتشف كنوز الحرف اليدوية التقليدية من كل أنحاء مصر
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products"
                className="bg-[#C8A97E] hover:bg-[#B8956B] text-white px-8 py-4 rounded-lg font-almarai font-semibold transition-colors inline-flex items-center justify-center"
              >
                تصفح جميع المنتجات
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/artisans"
                className="border-2 border-white text-white hover:bg-white hover:text-[#6A7C55] px-8 py-4 rounded-lg font-almarai font-semibold transition-colors inline-flex items-center justify-center"
              >
                تعرف على الحرفيين
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}