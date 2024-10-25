'use client'

import Link from 'next/link'
import { styled } from 'styled-components'
// types
import type { SocialLinks } from '@/src/types/about.types'

/**
 * 어바웃 소셜 링크 컴포넌트
 */
export default function SocialList({ links, ariaLabel }: SocialLinks): JSX.Element {
  return (
    <Wrapper aria-label={ariaLabel}>
      <List>
        {links.map(({ href, label, svg }) => (
          <li key={label}>
            <SocialLink aria-label={label} href={href} target="_blank" rel="noopener noreferrer">
              <span dangerouslySetInnerHTML={{ __html: svg }} />
            </SocialLink>
          </li>
        ))}
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  margin-bottom: 2rem;
`

const List = styled.ul`
  display: flex;
  gap: 0.75rem;
  list-style-type: none;
`

const SocialLink = styled(Link)`
  display: inline-block;
  color: var(--text-primary);
  transition: color 0.3s;
`
