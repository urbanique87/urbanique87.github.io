import Link from 'next/link'
// styles
import classes from '@/components/about/SocialList.module.css'

interface LinkItem {
  href: string
  label: string
  svg: string
}

/**
 * 어바웃 소셜 링크 컴포넌트
 */
export default function SocialList({
  links,
}: {
  links: LinkItem[]
}): JSX.Element {
  return (
    <nav className={classes['social-list']} aria-label="social links">
      <ul className={classes['social-list__list']}>
        {links.map(({ href, label, svg }) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <span dangerouslySetInnerHTML={{ __html: svg }} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
