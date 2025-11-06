import React from 'react'
import { Button } from './ui/Button'
import { MapPin, Star, Award, Users, ArrowRight } from 'lucide-react'

interface ArtisansShowcaseProps {
  className?: string
}

export function ArtisansShowcase({ className = '' }: ArtisansShowcaseProps) {
  const featuredArtisans = [
    {
      id: 1,
      name: 'أحمد الخزف',
      specialty: 'خزف تقليدي',
      location: 'الفيوم، مصر',
      image: '/imgs/artisan_working_0.jpg',
      rating: 4.9,
      productsCount: 24,
      experience: '15 سنة',
      badge: 'معلم حرفي',
      description: 'متخصص في صنع الأواني الفخارية التراثية من طين الفيوم الأصيل'
    },
    {
      id: 2,
      name: 'فاطمة النحاس',
      specialty: 'نحاس ومصنوعات معدنية',
      location: 'القاهرة، مصر',
      image: '/imgs/artisan_working_3.jpg',
      rating: 4.8,
      productsCount: 18,
      experience: '12 سنة',
      badge: 'حرفية متميزة',
      description: 'خبيرة في صناعة الأدوات النحاسية المزخرفة بالطراز التراثي'
    },
    {
      id: 3,
      name: 'علي النجار',
      specialty: 'نجارة وتراث خشبي',
      location: 'أسوان، مصر',
      image: '/imgs/artisan_working_4.webp',
      rating: 4.9,
      productsCount: 31,
      experience: '20 سنة',
      badge: 'حرفي عريق',
      description: 'فنان في النحت على الخشب بطرق تراثية متوارثة من الأجداد'
    }
  ]

  return (
    <section className={`py-16 bg-[#F8F6F3] ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-cairo text-[#6A7C55] mb-4">
            الحرفيون المميزون
          </h2>
          <p className="text-lg font-almarai text-[#8C6E4A] max-w-2xl mx-auto">
            تعرف على الحرفيين المهرة الذين يبدعون بأيديهم لينقلوا تراثنا للأجيال القادمة
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArtisans.map((artisan) => (
            <div 
              key={artisan.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Artisan Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#C8A97E] text-white px-3 py-1 rounded-full text-sm font-almarai font-semibold">
                    {artisan.badge}
                  </span>
                </div>
                <div className="absolute top-4 left-4 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 text-[#C8A97E] fill-current mr-1" />
                  <span className="text-sm font-semibold text-[#6A7C55]">
                    {artisan.rating}
                  </span>
                </div>
              </div>

              {/* Artisan Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-cairo text-[#6A7C55] mb-2">
                  {artisan.name}
                </h3>
                
                <p className="text-[#8C6E4A] font-almarai mb-1">
                  {artisan.specialty}
                </p>
                
                <div className="flex items-center text-[#8C6E4A] text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{artisan.location}</span>
                </div>

                <p className="text-[#6A7C55] font-almarai text-sm mb-4 line-clamp-2">
                  {artisan.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-[#F8F6F3] rounded-lg">
                    <div className="text-lg font-bold text-[#6A7C55]">
                      {artisan.productsCount}
                    </div>
                    <div className="text-xs text-[#8C6E4A] font-almarai">
                      منتج
                    </div>
                  </div>
                  <div className="text-center p-3 bg-[#F8F6F3] rounded-lg">
                    <div className="text-lg font-bold text-[#6A7C55]">
                      {artisan.experience}
                    </div>
                    <div className="text-xs text-[#8C6E4A] font-almarai">
                      خبرة
                    </div>
                  </div>
                </div>

                {/* View Profile Button */}
                <Button 
                  className="w-full bg-[#6A7C55] hover:bg-[#5A6C45] text-white"
                  asChild
                >
                  <a href={`/artisans/${artisan.id}`}>
                    عرض الملف الشخصي
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div 
            className="inline-block p-8 rounded-2xl text-white relative overflow-hidden max-w-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(140, 110, 74, 0.9), rgba(106, 124, 85, 0.9)), url(/imgs/marketplace_scene_0.webp)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold font-cairo mb-4">
              كن حرفياً معنا
            </h3>
            <p className="font-almarai mb-6 opacity-90">
              انضم إلى أكثر من 850 حرفي محترف واحصل على منصة لعرض وبيع منتجاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#C8A97E] hover:bg-[#B8956B] text-white"
                asChild
              >
                <a href="/artisan/register">
                  انضم كحرفي
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#6A7C55]"
                asChild
              >
                <a href="/artisans">
                  تصفح الحرفيين
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-[#C8A97E] rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-[#6A7C55] font-cairo">850+</div>
            <div className="text-sm text-[#8C6E4A] font-almarai">حرفي معتمد</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-[#6A7C55] rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-[#6A7C55] font-cairo">50+</div>
            <div className="text-sm text-[#8C6E4A] font-almarai">حرف تقليدية</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-[#8C6E4A] rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-[#6A7C55] font-cairo">25+</div>
            <div className="text-sm text-[#8C6E4A] font-almarai">مدينة مصرية</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="bg-[#C8A97E] rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-[#6A7C55] font-cairo">4.8★</div>
            <div className="text-sm text-[#8C6E4A] font-almarai">متوسط التقييم</div>
          </div>
        </div>
      </div>
    </section>
  )
}