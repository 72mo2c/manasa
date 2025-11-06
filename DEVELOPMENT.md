# Platform "حِرَفْنا" - Project Setup and Installation Guide

## 🚀 Quick Start Guide

### 1. Environment Setup
```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your actual credentials
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the platform.

### 3. Build for Production
```bash
npm run build
npm run start
```

## 📁 Project Structure
```
hirafna-platform/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # Authentication pages
│   │   ├── (dashboard)/    # Dashboard pages
│   │   ├── api/            # API routes
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── ui/             # UI components
│   │   ├── forms/          # Form components
│   │   └── layout/         # Layout components
│   ├── lib/                # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript types
│   ├── constants/          # App constants
│   └── locales/            # i18n files
├── public/                 # Static assets
├── docs/                   # Documentation
└── tests/                  # Test files
```

## 🎨 Design System

### Colors (Arabic Heritage Palette)
- **Primary**: #C8A97E (Gold) - CTA buttons, accents
- **Secondary**: #6A7C55 (Olive Green) - Cards, highlights
- **Accent**: #8C6E4A (Earthy Brown) - Headings, text
- **Neutral**: #F9F6F2 to #1A1510 - Backgrounds, text hierarchy

### Typography
- **Arabic Headings**: Cairo (Google Fonts)
- **Arabic Body**: Almarai (Google Fonts)  
- **English**: Inter (Google Fonts)

### Spacing
- 8px grid system
- `xs: 8px`, `sm: 16px`, `md: 24px`, `lg: 32px`, `xl: 48px`, `2xl: 64px`

## 🛠️ Technology Stack

### Core
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

### Backend
- **Supabase** - Database, auth, real-time
- **PostgreSQL** - Primary database
- **Edge Functions** - Server-side logic

### Payment Integration
- **Paymob** - Egyptian payments
- **Payfort/Amazon Payment Services**
- **Fawry Pay** - Local payment network

### Additional Tools
- **Next-Intl** - Internationalization
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide Icons** - Icon library

## 🔧 Configuration

### Environment Variables
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Payments
PAYMOB_API_KEY=your-paymob-key
PAYFORT_API_KEY=your-payfort-key

# Email
RESEND_API_KEY=your-resend-key

# Live Streaming
LIVEKIT_API_KEY=your-livekit-key
```

### Tailwind Configuration
Custom design system with Arabic heritage colors, 8px grid spacing, and RTL support.

### TypeScript Configuration
Strict mode enabled with path mapping for clean imports.

## 📱 Features Implemented

### ✅ Core Features
- [x] Responsive design with Arabic RTL support
- [x] Multi-language support (Arabic/English)
- [x] Modern UI components with heritage styling
- [x] Product catalog with advanced filtering
- [x] Artisan profiles and management
- [x] Shopping cart and wishlist
- [x] User authentication
- [x] Search functionality
- [x] Loading states and skeletons
- [x] Error handling

### 🔄 In Progress
- [ ] Live streaming integration
- [ ] Payment gateway setup
- [ ] Admin dashboard
- [ ] API routes
- [ ] Database schema
- [ ] Email notifications
- [ ] File upload system

### 📋 To Implement
- [ ] Real-time chat
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] Security features

## 🎯 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint configuration
- Use Tailwind for styling
- Implement responsive design
- Add loading states for async operations

### Component Structure
- Separate business logic from UI
- Use custom hooks for data fetching
- Implement error boundaries
- Add proper accessibility features
- Test all components

### Performance
- Use Next.js Image component
- Implement lazy loading
- Optimize bundle size
- Use React.memo for expensive components
- Implement proper caching

## 🧪 Testing Strategy

### Unit Tests
- Component testing with Jest
- Hook testing
- Utility function testing
- Type checking

### Integration Tests
- API endpoint testing
- Database operations
- User flow testing
- Payment processing

### E2E Tests
- Critical user journeys
- Cross-browser testing
- Mobile responsiveness
- Performance testing

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Environment Setup
- Configure environment variables
- Setup database connections
- Configure payment gateways
- Setup email services
- Configure CDN for static assets

## 📊 Analytics & Monitoring

### Built-in Analytics
- User behavior tracking
- Product performance metrics
- Sales analytics
- Error monitoring

### Performance Monitoring
- Core Web Vitals
- Page load times
- API response times
- User experience metrics

## 🔒 Security Features

### Data Protection
- Input validation
- XSS protection
- CSRF protection
- Rate limiting
- Secure authentication

### Payment Security
- PCI compliance
- Tokenization
- Secure payment processing
- Fraud detection

## 🌐 Internationalization

### Current Support
- Arabic (Primary) - RTL layout
- English (Secondary) - LTR layout

### Implementation
- Next.js i18n routing
- Translation files
- Currency formatting
- Date/time localization
- Number formatting

## 📞 Support & Maintenance

### Documentation
- Component documentation
- API documentation
- Deployment guides
- Troubleshooting guides

### Maintenance
- Regular security updates
- Performance monitoring
- Bug fixes and improvements
- Feature enhancements
- User feedback integration

---

## 🎉 Getting Started

1. **Fork/Clone** the repository
2. **Install** dependencies: `npm install`
3. **Setup** environment variables
4. **Run** development server: `npm run dev`
5. **Start** building amazing features!

**Happy coding! 🚀**

For questions or support, contact the development team or create an issue in the repository.