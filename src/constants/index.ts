// Application Constants

export const APP_NAME = 'حِرَفْنا'
export const APP_TAGLINE = 'تراثنا هويتك'
export const APP_DESCRIPTION = 'منصة التجارة الإلكترونية للحرف اليدوية العربية'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export const APP_VERSION = '1.0.0'

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  LOGOUT: '/api/auth/logout',
  REFRESH: '/api/auth/refresh',
  FORGOT_PASSWORD: '/api/auth/forgot-password',
  RESET_PASSWORD: '/api/auth/reset-password',

  // Users
  USERS: '/api/users',
  USER_PROFILE: '/api/users/profile',
  USER_ARTISAN: '/api/users/artisan',

  // Products
  PRODUCTS: '/api/products',
  PRODUCT_DETAIL: (id: string) => `/api/products/${id}`,
  PRODUCTS_CATEGORIES: '/api/products/categories',
  PRODUCTS_SEARCH: '/api/products/search',
  FEATURED_PRODUCTS: '/api/products/featured',
  BESTSELLER_PRODUCTS: '/api/products/bestsellers',
  NEW_PRODUCTS: '/api/products/new',
  ARTISAN_PRODUCTS: (artisanId: string) => `/api/artisans/${artisanId}/products`,

  // Artisans
  ARTISANS: '/api/artisans',
  ARTISAN_DETAIL: (id: string) => `/api/artisans/${id}`,
  ARTISAN_PRODUCTS: (id: string) => `/api/artisans/${id}/products`,
  ARTISAN_REVIEWS: (id: string) => `/api/artisans/${id}/reviews`,

  // Orders
  ORDERS: '/api/orders',
  ORDER_DETAIL: (id: string) => `/api/orders/${id}`,
  ORDER_TRACKING: (id: string) => `/api/orders/${id}/tracking`,

  // Cart
  CART: '/api/cart',
  CART_ADD: '/api/cart/add',
  CART_UPDATE: '/api/cart/update',
  CART_REMOVE: '/api/cart/remove',
  CART_CLEAR: '/api/cart/clear',

  // Reviews
  REVIEWS: '/api/reviews',
  PRODUCT_REVIEWS: (productId: string) => `/api/products/${productId}/reviews`,

  // Wishlist
  WISHLIST: '/api/wishlist',
  WISHLIST_ADD: '/api/wishlist/add',
  WISHLIST_REMOVE: '/api/wishlist/remove',

  // Live Streaming
  LIVE_STREAMS: '/api/live',
  LIVE_STREAM_DETAIL: (id: string) => `/api/live/${id}`,
  LIVE_CHAT: (streamId: string) => `/api/live/${streamId}/chat`,

  // Content
  ARTICLES: '/api/content/articles',
  ARTICLE_DETAIL: (id: string) => `/api/content/articles/${id}`,
  TUTORIALS: '/api/content/tutorials',
  TUTORIAL_DETAIL: (id: string) => `/api/content/tutorials/${id}`,

  // Categories
  CATEGORIES: '/api/categories',
  CATEGORY_DETAIL: (id: string) => `/api/categories/${id}`,
  CATEGORY_TREE: '/api/categories/tree',

  // Payments
  PAYMENT_INTENT: '/api/payments/intent',
  PAYMENT_WEBHOOKS: '/api/payments/webhooks',

  // Notifications
  NOTIFICATIONS: '/api/notifications',
  NOTIFICATION_READ: (id: string) => `/api/notifications/${id}/read`,
  NOTIFICATION_PREFERENCES: '/api/notifications/preferences',

  // Search
  SEARCH: '/api/search',
  SEARCH_SUGGESTIONS: '/api/search/suggestions',

  // Analytics
  ANALYTICS: '/api/analytics',
} as const

// Payment Gateways
export const PAYMENT_GATEWAYS = {
  PAYMOB: 'paymob',
  PAYFORT: 'payfort',
  FAWRY: 'fawry',
  PAYPAL: 'paypal',
} as const

export const PAYMENT_METHODS = {
  CARD: 'card',
  MOBILE_WALLET: 'mobile_wallet',
  BANK_TRANSFER: 'bank_transfer',
  CASH_ON_DELIVERY: 'cash_on_delivery',
} as const

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
} as const

// Product Status
export const PRODUCT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  OUT_OF_STOCK: 'out_of_stock',
  DISCONTINUED: 'discontinued',
} as const

// User Roles
export const USER_ROLES = {
  CUSTOMER: 'customer',
  ARTISAN: 'artisan',
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin',
} as const

// User Status
export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  SUSPENDED: 'suspended',
  PENDING_VERIFICATION: 'pending_verification',
} as const

// Categories
export const CRAFT_CATEGORIES = [
  {
    id: 'pottery',
    name: 'فخار',
    nameEn: 'Pottery',
    icon: '🏺',
    description: 'إناء فخارية، بلاط، وتماثيل',
  },
  {
    id: 'copper',
    name: 'نحاس',
    nameEn: 'Copper',
    icon: '⚱️',
    description: 'أدوات نحاسية، صواني، وقصاع',
  },
  {
    id: 'carpets',
    name: 'سجاد',
    nameEn: 'Carpets',
    icon: '🧶',
    description: 'سجاد وحصائر منسوجة يدوياً',
  },
  {
    id: 'leather',
    name: 'جلود',
    nameEn: 'Leather',
    icon: '👜',
    description: 'حقائب، أحزمة، وأحذية جلدية',
  },
  {
    id: 'woodwork',
    name: 'خشب',
    nameEn: 'Woodwork',
    icon: '🪵',
    description: 'منحوتات وإطارات خشبية',
  },
  {
    id: 'glass',
    name: 'زجاج',
    nameEn: 'Glass',
    icon: '💎',
    description: 'زجاج مزخرف وأكواب تقليدية',
  },
  {
    id: 'silver',
    name: 'فضة',
    nameEn: 'Silver',
    icon: '✨',
    description: 'مجوهرات وأدوات فضية',
  },
  {
    id: 'shell',
    name: 'صدف',
    nameEn: 'Shell',
    icon: '🐚',
    description: 'إكسسوارات وزخارف من الصدف',
  },
  {
    id: 'textiles',
    name: 'منسوجات',
    nameEn: 'Textiles',
    icon: '🧵',
    description: 'ملابس وحجابات منسوجة',
  },
  {
    id: 'metalwork',
    name: 'معدني',
    nameEn: 'Metalwork',
    icon: '🔧',
    description: 'معدن مطاوع ومسامير تقليدية',
  },
]

// Egyptian Cities
export const EGYPTIAN_CITIES = [
  { id: 'cairo', name: 'القاهرة', nameEn: 'Cairo' },
  { id: 'alexandria', name: 'الإسكندرية', nameEn: 'Alexandria' },
  { id: 'giza', name: 'الجيزة', nameEn: 'Giza' },
  { id: 'luxor', name: 'الأقصر', nameEn: 'Luxor' },
  { id: 'aswan', name: 'أسوان', nameEn: 'Aswan' },
  { id: 'fayyum', name: 'الفيوم', nameEn: 'Fayyum' },
  { id: 'minia', name: 'المنيا', nameEn: 'Minia' },
  { id: 'sohag', name: 'سوهاج', nameEn: 'Sohag' },
  { id: 'qena', name: 'قنا', nameEn: 'Qena' },
  { id: 'suez', name: 'السويس', nameEn: 'Suez' },
  { id: 'ismailia', name: 'الإسماعيلية', nameEn: 'Ismailia' },
  { id: 'port_said', name: 'بورسعيد', nameEn: 'Port Said' },
  { id: 'dakahlia', name: 'الدقهلية', nameEn: 'Dakahlia' },
  { id: 'sharqia', name: 'الشرقية', nameEn: 'Sharqia' },
  { id: 'monufia', name: 'المنوفية', nameEn: 'Monufia' },
  { id: 'gharbia', name: 'الغربية', nameEn: 'Gharbia' },
  { id: 'kafr_sheikh', name: 'كفر الشيخ', nameEn: 'Kafr Sheikh' },
  { id: 'damiette', name: 'دمياط', nameEn: 'Damiette' },
  { id: 'beheira', name: 'البحيرة', nameEn: 'Beheira' },
  { id: 'matrouh', name: 'مطروح', nameEn: 'Matrouh' },
  { id: 'north_sinai', name: 'شمال سيناء', nameEn: 'North Sinai' },
  { id: 'south_sinai', name: 'جنوب سيناء', nameEn: 'South Sinai' },
  { id: 'red_sea', name: 'البحر الأحمر', nameEn: 'Red Sea' },
  { id: 'new_valley', name: 'الوادي الجديد', nameEn: 'New Valley' },
  { id: 'al_alfy', name: 'الألفى', nameEn: 'Al Alfy' },
  { id: 'beni_suef', name: 'بني سويف', nameEn: 'Beni Suef' },
]

// Currency
export const CURRENCIES = {
  EGP: {
    code: 'EGP',
    symbol: 'ج.م',
    name: 'جنيه مصري',
    nameEn: 'Egyptian Pound',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'دولار أمريكي',
    nameEn: 'US Dollar',
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'يورو',
    nameEn: 'Euro',
  },
}

// Languages
export const LANGUAGES = {
  ARABIC: {
    code: 'ar',
    name: 'العربية',
    nameEn: 'Arabic',
    direction: 'rtl',
  },
  ENGLISH: {
    code: 'en',
    name: 'English',
    nameEn: 'English',
    direction: 'ltr',
  },
}

// Error Messages
export const ERROR_MESSAGES = {
  REQUIRED: 'هذا الحقل مطلوب',
  INVALID_EMAIL: 'البريد الإلكتروني غير صحيح',
  INVALID_PHONE: 'رقم الهاتف غير صحيح',
  PASSWORD_TOO_SHORT: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
  PASSWORD_MISMATCH: 'كلمة المرور غير متطابقة',
  NETWORK_ERROR: 'خطأ في الاتصال',
  SERVER_ERROR: 'خطأ في الخادم',
  UNAUTHORIZED: 'غير مسموح',
  FORBIDDEN: 'ممنوع',
  NOT_FOUND: 'غير موجود',
  VALIDATION_ERROR: 'خطأ في البيانات المدخلة',
  QUOTA_EXCEEDED: 'تم تجاوز الحد المسموح',
  RATE_LIMITED: 'تم تجاوز حد الطلبات',
}

// Success Messages
export const SUCCESS_MESSAGES = {
  SAVED: 'تم الحفظ بنجاح',
  DELETED: 'تم الحذف بنجاح',
  UPDATED: 'تم التحديث بنجاح',
  CREATED: 'تم الإنشاء بنجاح',
  SENT: 'تم الإرسال بنجاح',
  LOGGED_IN: 'تم تسجيل الدخول بنجاح',
  LOGGED_OUT: 'تم تسجيل الخروج بنجاح',
  REGISTERED: 'تم التسجيل بنجاح',
  PASSWORD_RESET: 'تم إعادة تعيين كلمة المرور',
  EMAIL_SENT: 'تم إرسال البريد الإلكتروني',
}

// File Upload Limits
export const FILE_LIMITS = {
  IMAGE: {
    MAX_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
    MAX_WIDTH: 2000,
    MAX_HEIGHT: 2000,
  },
  VIDEO: {
    MAX_SIZE: 100 * 1024 * 1024, // 100MB
    ALLOWED_TYPES: ['video/mp4', 'video/webm', 'video/ogg'],
    MAX_DURATION: 600, // 10 minutes
  },
  DOCUMENT: {
    MAX_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: ['application/pdf', 'application/msword'],
  },
}

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  MIN_PAGE_SIZE: 5,
}

// Social Media Links
export const SOCIAL_MEDIA = {
  FACEBOOK: 'https://facebook.com/hirafna',
  INSTAGRAM: 'https://instagram.com/hirafna',
  TWITTER: 'https://twitter.com/hirafna',
  LINKEDIN: 'https://linkedin.com/company/hirafna',
  YOUTUBE: 'https://youtube.com/hirafna',
  TIKTOK: 'https://tiktok.com/@hirafna',
}

// Contact Information
export const CONTACT_INFO = {
  EMAIL: {
    GENERAL: 'info@hirafna.com',
    SUPPORT: 'support@hirafna.com',
    BUSINESS: 'business@hirafna.com',
    TECHNICAL: 'tech@hirafna.com',
  },
  PHONE: {
    SUPPORT: '+20 2 1234 5678',
    BUSINESS: '+20 2 1234 5679',
  },
  ADDRESS: {
    STREET: '123 شارع التجارة، الدقي',
    CITY: 'الجيزة',
    COUNTRY: 'مصر',
    ZIP_CODE: '12345',
  },
}

// SEO Configuration
export const SEO = {
  DEFAULT_TITLE: `${APP_NAME} - ${APP_TAGLINE}`,
  DEFAULT_DESCRIPTION: APP_DESCRIPTION,
  DEFAULT_KEYWORDS: 'حرف يدوية, تراث عربي, تجارة إلكترونية, حرفيين, منتجات تقليدية',
  DEFAULT_IMAGE: '/images/og-image.png',
  TWITTER_HANDLE: '@hirafna',
  FACEBOOK_PAGE: 'hirafna',
  INSTAGRAM_HANDLE: '@hirafna',
}

// Feature Flags
export const FEATURES = {
  LIVE_STREAMING: true,
  MULTILINGUAL: true,
  PAYMENT_GATEWAYS: true,
  ANALYTICS: true,
  SOCIAL_LOGIN: true,
  PWA: true,
  CHAT_SUPPORT: true,
  REVIEWS_RATINGS: true,
  WISHLIST: true,
  NEWSLETTER: true,
  MOBILE_APP: false, // Coming soon
  B2B_FEATURES: false, // Future feature
}

// Analytics Events
export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  PRODUCT_VIEW: 'product_view',
  PRODUCT_ADD_TO_CART: 'product_add_to_cart',
  PRODUCT_PURCHASE: 'product_purchase',
  SEARCH: 'search',
  USER_REGISTRATION: 'user_registration',
  USER_LOGIN: 'user_login',
  NEWSLETTER_SIGNUP: 'newsletter_signup',
  REVIEW_SUBMIT: 'review_submit',
  WISHLIST_ADD: 'wishlist_add',
} as const

// Background Images
export const BACKGROUND_IMAGES = {
  HERO: '/imgs/heritage_background_6.png',
  MARKETPLACE: '/imgs/marketplace_scene_4.webp',
  ARTISAN_WORKING: '/imgs/artisan_working_4.webp',
  PATTERN: '/imgs/heritage_background_4.jpg'
} as const

// Category Images
export const CATEGORY_IMAGES = {
  pottery: '/imgs/pottery_products_4.jpg',
  metalwork: '/imgs/metalwork_products_7.jpg',
  textiles: '/imgs/textile_products_4.jpg',
  woodwork: '/imgs/woodwork_products_3.jpg',
  leather: '/imgs/leather_products_2.jpg'
} as const

// Application Theme
export const THEME = {
  COLORS: {
    PRIMARY: '#C8A97E', // Gold
    SECONDARY: '#6A7C55', // Olive Green
    ACCENT: '#8C6E4A', // Earthy Brown
  },
  FONTS: {
    HEADING: 'Cairo',
    BODY: 'Almarai',
    ENGLISH: 'Inter',
  },
  BREAKPOINTS: {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px',
  },
}