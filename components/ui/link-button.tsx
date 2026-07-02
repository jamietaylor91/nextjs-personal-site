import type { ReactNode, ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import NextLink from 'next/link'

type NextLinkProps = Omit<ComponentProps<typeof NextLink>, 'href' | 'className'>

type LinkButtonProps = {
  label: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  href: string
  className?: string
} & NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

const LinkButton = ({
  label,
  iconLeft,
  iconRight,
  className,
  href,
  ...props
}: LinkButtonProps) => {
  const isExternal =
    typeof href === 'string' && /^https?:\/\//i.test(href)

  const sharedClass = cn(
    'inline-flex items-center gap-1.5 rounded-sm border border-zinc-700 px-3 py-1.5 text-sm text-zinc-100 transition-colors hover:bg-zinc-900',
    className,
  )

  if (isExternal) {
    const { target, rel, ...rest } = props
    return (
      <a
        href={href}
        target={target ?? '_blank'}
        rel={rel ?? 'noopener noreferrer'}
        className={sharedClass}
        {...rest}
      >
        {iconLeft}
        {label}
        {iconRight}
      </a>
    )
  }

  return (
    <NextLink href={href} className={sharedClass} {...props}>
      {iconLeft}
      {label}
      {iconRight}
    </NextLink>
  )
}

export default LinkButton
