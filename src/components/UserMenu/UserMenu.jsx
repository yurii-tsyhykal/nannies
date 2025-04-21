import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import css from './UserMenu.module.css';
import { selectAuthUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import { TOAST_MESSAGES } from '../../helpers/constants';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      toast.success(TOAST_MESSAGES.LOGOUT);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className={css.userMenuWrapper}>
      <div className={css.userAvatar}>
        <svg width={24} height={24}>
          <use href="/images/sprite.svg#user-default-icon"></use>
        </svg>
      </div>
      <p className={css.userName}>{user?.username}</p>
      <Button type="button" variant="logOut" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
