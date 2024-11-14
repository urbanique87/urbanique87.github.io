// styles
import classes from '@/components/about/Header.module.css'

/**
 * 어바웃 헤더 컴포넌트
 */
export default function Header({
  author,
  introduce,
}: {
  author: string
  introduce: string
}): JSX.Element {
  return (
    <header className={classes.header}>
      <div className={classes.header__emoji}>👨‍💻</div>
      <h1 className={classes.header__author}>{author}</h1>
      <p
        className={classes.header__introduce}
        dangerouslySetInnerHTML={{ __html: introduce }}
      ></p>
    </header>
  )
}
