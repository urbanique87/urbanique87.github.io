import path from 'path'

export const POSTS_BASE_PATH = '/src/posts' // 포스트 디렉토리의 기본 경로
export const POSTS_DIRECTORY_PATH = path.join(process.cwd(), POSTS_BASE_PATH) // 현재 작업 디렉토리의 포스트 디렉토리 경로
