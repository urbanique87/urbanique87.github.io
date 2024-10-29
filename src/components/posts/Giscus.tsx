'use client'

import { useEffect, useRef } from 'react'

/**
 *
 * Giscus 댓글 시스템.
 * 클라이언트 사이드에서 Giscus 스크립트를 동적으로 로드하고 초기화합니다.
 *
 * @returns {JSX.Element}
 */
export default function Giscus(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) {
      return
    }

    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://giscus.app/client.js'
    scriptElement.async = true
    scriptElement.crossOrigin = 'anonymous'

    scriptElement.setAttribute('data-repo', 'urbanique87/urbanique87.github.io')
    scriptElement.setAttribute('data-repo-id', 'R_kgDOM-O2gA')
    scriptElement.setAttribute('data-category', 'General')
    scriptElement.setAttribute('data-category-id', 'DIC_kwDOM-O2gM4CjYGV')
    scriptElement.setAttribute('data-mapping', 'pathname')
    scriptElement.setAttribute('data-strict', '0')
    scriptElement.setAttribute('data-reactions-enabled', '1')
    scriptElement.setAttribute('data-emit-metadata', '0')
    scriptElement.setAttribute('data-input-position', 'top')
    scriptElement.setAttribute('data-theme', 'preferred_color_scheme')
    scriptElement.setAttribute('data-lang', 'ko')
    scriptElement.setAttribute('data-loading', 'lazy')

    ref.current.appendChild(scriptElement)
  }, [])

  return <div ref={ref} />
}
