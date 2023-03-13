import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';

// import css from './navbar-user.module.scss';

const NavBarUser = () => {
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user?.name}, <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default NavBarUser;
