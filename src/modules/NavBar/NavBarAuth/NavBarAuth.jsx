import { NavLink } from 'react-router-dom';
import css from './navbar-auth.module.scss';

const NavBarAuth = () => {
  return (
    <div>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>{' '}
      |{' '}
      <NavLink to="/login" className={css.link}>
        LogIn
      </NavLink>
    </div>
  );
};

export default NavBarAuth;
