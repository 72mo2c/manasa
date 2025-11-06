'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Heart,
  Star,
  MapPin,
  ShoppingCart,
  Eye,
  HeartHandshake,
  Award,
  Clock
} from 'lucide-react'
import { motion } from 'framer-motion'

interface Product {
  id: string
  name: string
  nameEn?: string
  artisan: {
    name: string
    id: string
    rating: number
    verified: boolean
  }
  price: number
  currency: string
  originalPrice?: number
  images: string[]
  category: string
  location: string
  rating: number
  reviewsCount: number
  isNew?: boolean
  isFeatured?: boolean
  isBestseller?: boolean
  isLimited?: boolean
  isHandmade?: boolean
  inStock: boolean
  stockCount?: number
  tags: string[]
  createdAt: string
  locale: string
}

interface ProductCardProps {
  product: Product
  className?: string
  showQuickView?: boolean
  showCompare?: boolean
  layout?: 'grid' | 'list'
}

const ProductCard = ({ 
  product, 
  className = '', 
  showQuickView = true, 
  showCompare = false,
  layout = 'grid'
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleImageHover = (index: number) => {
    if (product.images.length > 1) {
      setCurrentImageIndex(index)
    }
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Add to cart logic here
    console.log('Add to cart:', product.id)
  }

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(product.locale === 'ar' ? 'ar-EG' : 'en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  if (layout === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        className={`card ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/${product.locale}/products/${product.id}`} className="block">
          <div className="flex gap-6">
            {/* Image */}
            <div className="relative w-48 h-48 flex-shrink-0">
              <div className="aspect-square bg-neutral-200 rounded-soft overflow-hidden">
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onLoad={() => setIsLoading(false)}
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-primary-400 text-white px-2 py-1 rounded-full text-xs font-medium">
                      جديد
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="bg-secondary-400 text-white px-2 py-1 rounded-full text-xs font-medium">
                      مميز
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      الأكثر مبيعاً
                    </span>
                  )}
                  {discountPercentage > 0 && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      -{discountPercentage}%
                    </span>
                  )}
                </div>

                {/* Image Thumbnails */}
                {product.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                    {product.images.slice(0, 3).map((_, index) => (
                      <button
                        key={index}
                        onMouseEnter={() => handleImageHover(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Quick Actions */}
                <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <button
                    onClick={handleLike}
                    className={`p-2 rounded-full transition-all ${
                      isLiked 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/90 text-neutral-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  {showQuickView && (
                    <button className="p-2 bg-white/90 text-neutral-600 hover:bg-primary-400 hover:text-white rounded-full transition-all">
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-heading font-semibold text-neutral-800 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex flex-col items-end">
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary-800">
                        {formatPrice(product.price)} {product.currency}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-neutral-400 line-through mr-2">
                          {formatPrice(product.originalPrice)} {product.currency}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-neutral-600 mb-2">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 ml-1" />
                    {product.location}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current ml-1" />
                    {product.rating} ({product.reviewsCount})
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Link 
                    href={`/${product.locale}/artisans/${product.artisan.id}`}
                    className="text-sm text-primary-400 hover:text-primary-600 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {product.artisan.name}
                  </Link>
                  {product.artisan.verified && (
                    <Award className="w-4 h-4 text-blue-500" />
                  )}
                </div>

                <p className="text-neutral-600 line-clamp-2 text-sm">
                  {product.category} • مصنوع يدوياً • {product.tags.join(' • ')}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {product.isHandmade && (
                    <span className="flex items-center text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      <HeartHandshake className="w-3 h-3 ml-1" />
                      مصنوع يدوياً
                    </span>
                  )}
                  {product.isLimited && (
                    <span className="flex items-center text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 ml-1" />
                      متاح عدد محدود
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`px-4 py-2 rounded-sharp text-sm font-medium transition-all ${
                      product.inStock
                        ? 'btn-primary'
                        : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 ml-1" />
                    {product.inStock ? 'أضف للسلة' : 'غير متاح'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className={`card-product group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/${product.locale}/products/${product.id}`} className="block">
        {/* Image Section */}
        <div className="relative aspect-[4/5] bg-neutral-200 rounded-soft mb-4 overflow-hidden">
          <Image
            src={product.images[currentImageIndex]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setIsLoading(false)}
          />
          
          {/* Loading Skeleton */}
          {isLoading && (
            <div className="absolute inset-0 bg-neutral-200 animate-pulse rounded-soft" />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-primary-400 text-white px-2 py-1 rounded-full text-xs font-medium"
              >
                جديد
              </motion.span>
            )}
            {product.isFeatured && (
              <span className="bg-secondary-400 text-white px-2 py-1 rounded-full text-xs font-medium">
                مميز
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                الأكثر مبيعاً
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                -{discountPercentage}%
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <button
              onClick={handleLike}
              className={`p-2 rounded-full transition-all ${
                isLiked 
                  ? 'bg-red-500 text-white scale-110' 
                  : 'bg-white/90 text-neutral-600 hover:bg-red-500 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            {showQuickView && (
              <button className="p-2 bg-white/90 text-neutral-600 hover:bg-primary-400 hover:text-white rounded-full transition-all">
                <Eye className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Image Navigation Dots */}
          {product.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onMouseEnter={() => handleImageHover(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Stock Warning */}
          {product.inStock && product.stockCount && product.stockCount <= 5 && (
            <div className="absolute bottom-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              متبقي {product.stockCount}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          {/* Category */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full font-medium">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              {product.artisan.verified && (
                <Award className="w-4 h-4 text-blue-500" title="حرفي معتمد" />
              )}
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-heading font-semibold text-lg text-neutral-800 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>

          {/* Artisan Info */}
          <div className="flex items-center gap-2">
            <Link 
              href={`/${product.locale}/artisans/${product.artisan.id}`}
              className="text-sm text-primary-400 hover:text-primary-600 font-medium transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {product.artisan.name}
            </Link>
            <div className="flex items-center">
              <Star className="w-3 h-3 text-yellow-400 fill-current ml-1" />
              <span className="text-xs text-neutral-500">{product.artisan.rating}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center text-xs text-neutral-500">
            <MapPin className="w-3 h-3 ml-1" />
            {product.location}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-neutral-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-neutral-600">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-xl font-bold text-primary-800">
                {formatPrice(product.price)} {product.currency}
              </div>
              {product.originalPrice && (
                <div className="text-sm text-neutral-400 line-through">
                  {formatPrice(product.originalPrice)} {product.currency}
                </div>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-sharp font-medium transition-all ${
              product.inStock
                ? 'bg-primary-400 text-white hover:bg-primary-500 active:scale-95'
                : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            {product.inStock ? 'أضف للسلة' : 'غير متاح'}
          </button>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard