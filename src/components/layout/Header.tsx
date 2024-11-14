'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// config
import { NAV_LINKS } from '@/constants/navLinks'
// lib
import { isActiveLink } from '@/lib/navigation'
// styles
import classes from '@/components/layout/Header.module.css'

/**
 * 블로그 헤더 컴포넌트
 */
export default function Header() {
  const pathname = usePathname()
  const linkEntries = Object.entries(NAV_LINKS)

  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <nav>
          <ul className={classes.header__list}>
            {linkEntries.map(([label, path]) => {
              return (
                <li key={path}>
                  <Link
                    className={`${classes.header__link} ${
                      isActiveLink({ currentPath: pathname, targetPath: path })
                        ? classes['header__link--active']
                        : ''
                    }`}
                    href={path}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
