import React from 'react'
import { CATEGORY_IMAGES, BACKGROUND_IMAGES } from '@/constants'

interface GalleryProps {
  className?: string
}

export function HeritageGallery({ className = '' }: GalleryProps) {
  const galleryImages = [
    {
      src: CATEGORY_IMAGES.pottery,
      title: 'الفخار التقليدي',
      subtitle: 'Tradition & Craftsmanship'
    },
    {
      src: CATEGORY_IMAGES.metalwork,
      title: 'النحاس والأدوات المعدنية',
      subtitle: 'Metalwork Heritage'
    },
    {
      src: CATEGORY_IMAGES.textiles,
      title: 'المنسوجات الشعبية',
      subtitle: 'Traditional Textiles'
    },
    {
      src: CATEGORY_IMAGES.woodwork,
      title: 'النجارة التراثية',
      subtitle: 'Wood Carving Art'
    },
    {
      src: CATEGORY_IMAGES.leather,
      title: 'الحرف الجلدية',
      subtitle: 'Leather Crafts'
    },
    {
      src: BACKGROUND_IMAGES.ARTISAN_WORKING,
      title: 'الحرفي في عمله',
      subtitle: 'Master Craftsmen'
    }
  ]

  return (
    <section className={`py-16 bg-gradient-to-b from-white to-[#F8F6F3] ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-cairo text-[#6A7C55] mb-4">
            تراثنا المجسد في الحرف
          </h2>
          <p className="text-lg font-almarai text-[#8C6E4A] max-w-2xl mx-auto">
            اكتشف جمال الحرف اليدوية التقليدية التي تحمل تراث مصر العريق
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold font-cairo mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm font-almarai opacity-90">
                    {image.subtitle}
                  </p>
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-[#C8A97E] text-white px-3 py-1 rounded-full text-xs font-almarai font-semibold">
                  Handmade
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div 
            className="inline-block p-8 rounded-2xl text-white relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(140, 110, 74, 0.9), rgba(106, 124, 85, 0.9)), url(${BACKGROUND_IMAGES.MARKETPLACE})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold font-cairo mb-4">
              انضم إلى مجتمعنا من الحرفيين
            </h3>
            <p className="font-almarai mb-6 opacity-90 max-w-md mx-auto">
              هل أنت حرفي ماهر؟ شارك منتجاتك واحصل على دعم لتمكين حرفتك
            </p>
            <button className="bg-white text-[#6A7C55] px-8 py-3 rounded-lg font-almarai font-semibold hover:bg-[#F8F6F3] transition-colors">
              انضم كحرفي
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}