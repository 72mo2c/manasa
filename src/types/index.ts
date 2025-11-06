// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  role: 'customer' | 'artisan' | 'admin'
  verified: boolean
  createdAt: string
  updatedAt: string
}

export interface ArtisanProfile extends User {
  role: 'artisan'
  businessName: string
  businessDescription: string
  location: string
  specialties: string[]
  experience: number
  rating: number
  totalSales: number
  socialLinks?: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
  }
  portfolio?: string[]
  certifications?: string[]
  bankAccount?: {
    bankName: string
    accountNumber: string
    accountHolder: string
  }
}

// Product Types
export interface Product {
  id: string
  name: string
  nameEn?: string
  description: string
  descriptionEn?: string
  price: number
  currency: string
  originalPrice?: number
  discount?: number
  images: string[]
  videos?: string[]
  category: string
  subcategory?: string
  tags: string[]
  materials: string[]
  dimensions?: {
    length: number
    width: number
    height: number
    weight: number
    unit: 'cm' | 'inch'
    weightUnit: 'g' | 'kg' | 'lb'
  }
  artisanId: string
  artisan: ArtisanProfile
  stock: number
  minOrderQuantity?: number
  maxOrderQuantity?: number
  inStock: boolean
  isFeatured: boolean
  isBestseller: boolean
  isNew: boolean
  isLimited: boolean
  isHandmade: boolean
  isDigital: boolean
  customizable: boolean
  customizationOptions?: {
    colors: string[]
    sizes?: string[]
    text?: boolean
    engraving?: boolean
  }
  shippingInfo: {
    weight: number
    dimensions: string
    shippingCost: number
    freeShippingThreshold?: number
    estimatedDays: number
  }
  seo: {
    metaTitle?: string
    metaDescription?: string
    keywords: string[]
  }
  createdAt: string
  updatedAt: string
  locale: string
}

// Order Types
export interface Order {
  id: string
  orderNumber: string
  customerId: string
  customer: User
  items: OrderItem[]
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded'
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded' | 'partially_refunded'
  paymentMethod: 'card' | 'mobile_wallet' | 'bank_transfer' | 'cash_on_delivery'
  paymentDetails: {
    transactionId?: string
    gateway: 'paymob' | 'payfort' | 'fawry' | 'paypal'
    paidAt?: string
    fees: number
  }
  shippingAddress: Address
  billingAddress: Address
  subtotal: number
  shippingCost: number
  tax: number
  discount: number
  total: number
  currency: string
  notes?: string
  trackingNumber?: string
  estimatedDelivery?: string
  actualDelivery?: string
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: string
  productId: string
  product: Product
  quantity: number
  unitPrice: number
  totalPrice: number
  customization?: {
    color?: string
    size?: string
    text?: string
    engraving?: string
  }
}

// Address Types
export interface Address {
  id?: string
  firstName: string
  lastName: string
  company?: string
  street1: string
  street2?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone: string
  isDefault: boolean
}

// Category Types
export interface Category {
  id: string
  name: string
  nameEn?: string
  description: string
  descriptionEn?: string
  image: string
  parentId?: string
  children?: Category[]
  productCount: number
  isActive: boolean
  sortOrder: number
  seo: {
    metaTitle?: string
    metaDescription?: string
    keywords: string[]
  }
  createdAt: string
  updatedAt: string
  locale: string
}

// Review & Rating Types
export interface Review {
  id: string
  productId: string
  customerId: string
  customer: User
  rating: number
  title?: string
  comment: string
  images?: string[]
  helpful: number
  notHelpful: number
  verified: boolean
  response?: {
    message: string
    respondedBy: string
    respondedAt: string
  }
  createdAt: string
  updatedAt: string
}

// Live Streaming Types
export interface LiveStream {
  id: string
  artisanId: string
  artisan: ArtisanProfile
  title: string
  description: string
  thumbnail: string
  streamUrl: string
  chatEnabled: boolean
  purchaseEnabled: boolean
  status: 'scheduled' | 'live' | 'ended' | 'cancelled'
  scheduledStart: string
  actualStart?: string
  endTime?: string
  viewerCount: number
  maxViewers: number
  productIds: string[]
  streamKey?: string
  rtmpUrl?: string
  playbackUrl?: string
  chatHistory: ChatMessage[]
  analytics: {
    totalViews: number
    peakViewers: number
    averageWatchTime: number
    purchases: number
    revenue: number
  }
  createdAt: string
  updatedAt: string
}

export interface ChatMessage {
  id: string
  streamId: string
  userId?: string
  user: User
  message: string
  type: 'message' | 'system' | 'purchase' | 'question'
  timestamp: string
}

// Content Types
export interface Article {
  id: string
  title: string
  titleEn?: string
  slug: string
  content: string
  contentEn?: string
  excerpt: string
  excerptEn?: string
  featuredImage: string
  authorId: string
  author: User
  category: string
  tags: string[]
  status: 'draft' | 'published' | 'archived'
  publishedAt?: string
  readTime: number
  viewCount: number
  likes: number
  shares: number
  comments: ArticleComment[]
  seo: {
    metaTitle?: string
    metaDescription?: string
    keywords: string[]
  }
  createdAt: string
  updatedAt: string
  locale: string
}

export interface ArticleComment {
  id: string
  articleId: string
  userId: string
  user: User
  content: string
  parentId?: string
  replies?: ArticleComment[]
  likes: number
  createdAt: string
  updatedAt: string
}

export interface Tutorial {
  id: string
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  videoUrl: string
  thumbnail: string
  duration: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string
  materials: string[]
  steps: TutorialStep[]
  artisanId: string
  artisan: ArtisanProfile
  viewCount: number
  likes: number
  rating: number
  comments: TutorialComment[]
  createdAt: string
  updatedAt: string
  locale: string
}

export interface TutorialStep {
  id: string
  order: number
  title: string
  description: string
  image?: string
  video?: string
  duration: number
}

export interface TutorialComment {
  id: string
  tutorialId: string
  userId: string
  user: User
  content: string
  step?: number
  timestamp: number
  createdAt: string
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: 'order' | 'payment' | 'shipping' | 'review' | 'message' | 'promotion' | 'system'
  title: string
  message: string
  data?: Record<string, any>
  read: boolean
  actionUrl?: string
  priority: 'low' | 'medium' | 'high'
  createdAt: string
  readAt?: string
}

// Cart Types
export interface Cart {
  id: string
  userId: string
  items: CartItem[]
  totalItems: number
  subtotal: number
  shippingCost: number
  total: number
  createdAt: string
  updatedAt: string
}

export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
  customization?: {
    color?: string
    size?: string
    text?: string
    engraving?: string
  }
  addedAt: string
}

// Wishlist Types
export interface Wishlist {
  id: string
  userId: string
  name: string
  isDefault: boolean
  items: WishlistItem[]
  createdAt: string
  updatedAt: string
}

export interface WishlistItem {
  id: string
  productId: string
  product: Product
  addedAt: string
}

// Search & Filter Types
export interface SearchFilters {
  query?: string
  categories?: string[]
  priceRange?: {
    min: number
    max: number
  }
  rating?: number
  location?: string
  inStock?: boolean
  freeShipping?: boolean
  featured?: boolean
  new?: boolean
  handmade?: boolean
  customizable?: boolean
  tags?: string[]
  materials?: string[]
  artisanId?: string
  sortBy?: 'relevance' | 'price_asc' | 'price_desc' | 'rating' | 'newest' | 'popularity'
  page?: number
  limit?: number
}

export interface SearchResult {
  products: Product[]
  total: number
  page: number
  totalPages: number
  filters: {
    categories: { id: string; name: string; count: number }[]
    priceRange: { min: number; max: number }
    locations: { name: string; count: number }[]
    tags: { name: string; count: number }[]
  }
  suggestions: string[]
}

// Analytics Types
export interface AnalyticsData {
  period: 'today' | 'week' | 'month' | 'quarter' | 'year'
  metrics: {
    revenue: number
    orders: number
    customers: number
    averageOrderValue: number
    conversionRate: number
    returningCustomers: number
    newCustomers: number
  }
  charts: {
    revenue: { date: string; value: number }[]
    orders: { date: string; value: number }[]
    customers: { date: string; value: number }[]
    products: { name: string; sales: number }[]
    categories: { name: string; sales: number }[]
  }
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  errors?: string[]
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Form Types
export interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  type: 'general' | 'support' | 'business' | 'technical'
}

export interface NewsletterForm {
  email: string
  interests: string[]
  frequency: 'daily' | 'weekly' | 'monthly'
}

export interface SearchForm {
  query: string
  category?: string
  location?: string
  priceRange?: {
    min: number
    max: number
  }
  sortBy: 'relevance' | 'price_asc' | 'price_desc' | 'rating' | 'newest' | 'popularity'
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

export type StringKeyOf<T> = Extract<keyof T, string>

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'auto'

export type Direction = 'ltr' | 'rtl'

export type Language = 'ar' | 'en'

// Component Props Types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  loading?: boolean
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}