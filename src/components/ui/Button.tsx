'use client'

import React, { forwardRef, isValidElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-sharp font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary-400 text-white hover:bg-primary-500 focus-visible:ring-primary-400',
        destructive: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
        outline: 'border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 hover:text-neutral-800 focus-visible:ring-primary-400',
        secondary: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus-visible:ring-neutral-400',
        ghost: 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 focus-visible:ring-primary-400',
        link: 'text-primary-400 underline-offset-4 hover:underline focus-visible:ring-primary-400',
        success: 'bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-500',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus-visible:ring-yellow-500',
      },
      size: {
        default: 'h-12 px-6 py-3 text-base',
        sm: 'h-9 px-4 py-2 text-sm',
        lg: 'h-14 px-8 py-4 text-lg',
        xl: 'h-16 px-10 py-5 text-xl',
        icon: 'h-12 w-12',
        'icon-sm': 'h-9 w-9',
        'icon-lg': 'h-14 w-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'>,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  loadingText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      loadingText,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    const buttonContent = (
      <>
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {!loading && leftIcon && (
          <span className="ml-2 -mr-2">
            {leftIcon}
          </span>
        )}
        {loading ? (loadingText || 'جارِ التحميل...') : children}
        {!loading && rightIcon && (
          <span className="mr-2 -ml-2">
            {rightIcon}
          </span>
        )}
      </>
    )

    const buttonClasses = cn(
      buttonVariants({ variant, size, className }),
      loading && 'cursor-wait',
      variant === 'default' && 'hover:brightness-110 active:scale-[0.98]',
      variant === 'outline' && 'hover:border-primary-400 hover:text-primary-600',
    )

    if (asChild && isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(buttonClasses, children.props.className),
        ...props,
        ...children.props
      })
    }

    if (props.href) {
      return (
        <Link
          href={props.href}
          className={buttonClasses}
          ref={ref}
          {...(props as any)}
        >
          {buttonContent}
        </Link>
      )
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {buttonContent}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }