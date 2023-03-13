import { useSelector } from 'react-redux';

import NavbarMenu from './NavBarMenu/NavBarMenu';
import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';
import { isUserLogin } from 'redux/auth/auth-selectors';

import css from './navbar.module.scss';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className="container">
      <div className={css.navbarRow}>
        <NavbarMenu />
        {!isLogin && <NavBarAuth />}
        {isLogin && <NavBarUser />}
      </div>
    </div>
  );
};

export default Navbar;
