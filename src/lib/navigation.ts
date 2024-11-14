interface isActiveLinkParams {
  currentPath: string
  targetPath: string
}

/**
 * 현재 경로가 링크 경로와 매칭되는지 확인하는 함수
 */
export const isActiveLink = ({
  currentPath,
  targetPath,
}: isActiveLinkParams): boolean => {
  // 링크가 루트 경로인 경우 정확히 일치하는지 확인
  if (targetPath === '/') {
    return currentPath === targetPath
  }

  // 링크가 루트가 아닌 경우, 경로 시작이 일치하는지 확인
  return currentPath.startsWith(targetPath)
}
