import style from './NavBar.module.scss';

const NavBar = () => {
  return (<nav className={style.Link}>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>|</li>
      <li>
        <a href="/">Admin</a>
      </li>
    </ul>
  </nav>)
}

export default NavBar