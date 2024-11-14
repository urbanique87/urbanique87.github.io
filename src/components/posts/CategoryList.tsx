'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// styles
import classes from '@/components/posts/CategoryList.module.css'
// types
import { PostInfo } from '@/types/post.types'

/**
 * 블로그 카테고리 리스트
 */
export default function CategoryList({
  categories,
}: {
  categories: Pick<PostInfo, 'category' | 'count'>[]
}): JSX.Element {
  const currentPath = usePathname()

  return (
    <nav className={classes['category-list']} aria-label="포스트 카테고리">
      <ul className={classes['category-list__items']}>
        {categories.map(({ category, count }) => {
          const href = category === 'all' ? '/posts' : `/posts/${category}`
          const isActive = currentPath === href

          return (
            <li className={classes['category-list__item']} key={category}>
              <Link
                className={`${classes['category-list__link']} ${
                  isActive ? classes['category-list__link--active'] : ''
                }`}
                href={href}
              >{`${category} (${count})`}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
