/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
      SUPABASE_SERVICE_ROLE_KEY: string
      PAYMOB_API_KEY: string
      PAYMOB_INTEGRATION_ID: string
      PAYMOB_HMAC_KEY: string
      PAYFORT_API_KEY: string
      PAYFORT_ACCESS_CODE: string
      RESEND_API_KEY: string
      LIVEKIT_API_KEY: string
      LIVEKIT_API_SECRET: string
      LIVEKIT_WS_URL: string
      CLOUDINARY_CLOUD_NAME: string
      CLOUDINARY_API_KEY: string
      CLOUDINARY_API_SECRET: string
      GOOGLE_ANALYTICS_ID: string
    }
  }

  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
  }
}

export {}