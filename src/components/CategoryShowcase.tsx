import React from 'react'
import { ProductCard } from './ProductCard'
import { Button } from './ui/Button'
import { ArrowRight } from 'lucide-react'
import { CATEGORY_IMAGES, CRAFT_CATEGORIES } from '@/constants'

interface CategoryShowcaseProps {
  categoryId?: string
  className?: string
}

export function CategoryShowcase({ categoryId, className = '' }: CategoryShowcaseProps) {
  // Get category data
  const category = categoryId 
    ? CRAFT_CATEGORIES.find(c => c.id === categoryId)
    : CRAFT_CATEGORIES[0]
    
  if (!category) return null

  // Mock products for this category
  const products = [
    {
      id: 1,
      name: 'منتج تراثي أصيل',
      artisan: 'حرفي ماهر',
      artisanId: 'artisan-1',
      price: 250,
      currency: 'EGP',
      image: CATEGORY_IMAGES[categoryId as keyof typeof CATEGORY_IMAGES] || '/api/placeholder/300/400',
      images: [CATEGORY_IMAGES[categoryId as keyof typeof CATEGORY_IMAGES] || '/api/placeholder/300/400'],
      rating: 4.8,
      reviews: 15,
      category: categoryId || 'pottery',
      categoryName: category.name,
      location: 'مصر',
      isNew: true,
      isHandmade: true,
      isAuthentic: true,
      stock: 5,
      description: `منتج تراثي من فئة ${category.name}`
    },
    {
      id: 2,
      name: 'تحفة فنية تقليدية',
      artisan: 'أستاذ大师',
      artisanId: 'artisan-2',
      price: 450,
      currency: 'EGP',
      image: CATEGORY_IMAGES[categoryId as keyof typeof CATEGORY_IMAGES] || '/api/placeholder/300/400',
      images: [CATEGORY_IMAGES[categoryId as keyof typeof CATEGORY_IMAGES] || '/api/placeholder/300/400'],
      rating: 4.9,
      reviews: 8,
      category: categoryId || 'pottery',
      categoryName: category.name,
      location: 'مصر',
      isNew: false,
      isHandmade: true,
      isAuthentic: true,
      stock: 3,
      description: `تحفة فنية من فئة ${category.name}`
    },
    {
      id: 3,
      name: 'قطعة أثرية مقلدة',
      artisan: 'حفيد التراث',
      artisanId: 'artisan-3',
      price: 180,
      currency: 'EGP',
      image: CATEGORY_IMAGES[categoryId as keyof typeof CATEGORY_IMAGES] || '/api/placeholder/300/400',
      images: [CATEGORY_IMAGES[categoryId as keyof typeof CATEGORY_IMAGES] || '/api/placeholder/300/400'],
      rating: 4.7,
      reviews: 22,
      category: categoryId || 'pottery',
      categoryName: category.name,
      location: 'مصر',
      isNew: true,
      isHandmade: true,
      isAuthentic: true,
      stock: 7,
      description: `قطعة أثرية من فئة ${category.name}`
    }
  ]

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">{category.icon}</span>
            <h2 className="text-4xl md:text-5xl font-bold font-cairo text-[#6A7C55]">
              {category.name}
            </h2>
          </div>
          <p className="text-lg font-almarai text-[#8C6E4A] max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* Category Image Banner */}
        <div 
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg"
          style={{
            backgroundImage: `linear-gradient(rgba(140, 110, 74, 0.3), rgba(106, 124, 85, 0.5)), url(${CATEGORY_IMAGES[categoryId as keyof typeof CATEGORY_IMAGES]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold font-cairo mb-4">
                استكشف {category.name}
              </h3>
              <p className="text-lg font-almarai opacity-90 mb-6">
                منتجات أصيلة من أفضل الحرفيين
              </p>
              <Button 
                size="lg" 
                className="bg-[#C8A97E] hover:bg-[#B8956B] text-white"
                asChild
              >
                <a href={`/products?category=${categoryId}`}>
                  تسوق الآن
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              className="transform hover:scale-105 transition-all duration-300"
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#C8A97E] text-[#6A7C55] hover:bg-[#C8A97E] hover:text-white"
            asChild
          >
            <a href={`/products?category=${categoryId}`}>
              عرض جميع منتجات {category.name}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}