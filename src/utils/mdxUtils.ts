/**
 * MDX 텍스트에서 Frontmatter와 마크다운을 일반 텍스트로 변환하는 함수
 * @param {string} mdx - 변환할 MDX 텍스트
 * @returns {string} 변환된 일반 텍스트
 */
export function convertMDXToPlainText(mdx: string): string {
  // Frontmatter 제거 (---로 둘러싸인 부분)
  const withoutFrontmatter = mdx.replace(/^-{3}[\s\S]*?-{3}/, '').trim()

  // 마크다운을 일반 텍스트로 변환
  return convertMarkdownToPlainText(withoutFrontmatter)
}

/**
 * 마크다운 텍스트를 일반 텍스트로 변환하는 함수
 * @param {string} markdown - 변환할 마크다운 텍스트
 * @returns {string} 변환된 일반 텍스트
 */
export function convertMarkdownToPlainText(markdown: string): string {
  return markdown
    .replace(/^#+\s/gm, '') // 제목 제거
    .replace(/(?:^|\n)([*-])\s/g, '\n') // 리스트 기호 제거
    .replace(/`{1,3}[^`\n]+`{1,3}/g, '') // 인라인 코드 제거
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // 링크 텍스트만 유지
    .replace(/!\[([^\]]+)\]\([^\)]+\)/g, '') // 이미지 제거
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // 볼드 텍스트 처리
    .replace(/(\*|_)(.*?)\1/g, '$2') // 이탤릭 텍스트 처리
    .replace(/\n/g, ' ') // 모든 줄바꿈을 공백으로 대체
    .replace(/\s+/g, ' ') // 여러 공백을 하나로 축소
    .trim() // 앞뒤 공백 제거
}
