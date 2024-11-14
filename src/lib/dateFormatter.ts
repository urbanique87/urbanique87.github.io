/**
 * 입력된 날짜 문자열을 특정 형식으로 포맷하는 함수
 */
export function formatCustomDate(dateString: string): string | null {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    console.error('유효하지 않은 날짜 형식입니다.')
    return null
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}
