'use client'

import styled from 'styled-components'
// data
import about from '@/data/about.json'
// components
import Header from '@/components/about/Header'
import SocialList from '@/components/about/SocialList'

/**
 * 어바웃 컴포넌트
 */
export default function About() {
  const {
    author,
    description,
    socialLinks: { links, ariaLabel },
  } = about

  return (
    <article>
      <Header author={author} description={description} />
      <Separator />
      <SocialList links={links} ariaLabel={ariaLabel} />
    </article>
  )
}

const Separator = styled.hr`
  border: none;
  border-top: 1px solid var(--surface-alt);
  margin: 1.5rem 0;
`
