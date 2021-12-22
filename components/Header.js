import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> Blogs
      </h1>
      <p className={headerStyles.description}>
        Keeps you up to date with the latest technologies in web development
      </p>
    </div>
  )
}

export default Header
