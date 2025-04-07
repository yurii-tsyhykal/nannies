import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import css from './UserMenu.module.css';
import { selectAuthUser } from '../../redux/auth/selectors';
import { logOutUser } from '../../services/logOutUser';

const UserMenu = () => {
  const user = useSelector(selectAuthUser);

  const handleLogOut = async () => {
    await logOutUser();
  };
  return (
    <div className={css.userMenuWrapper}>
      <div className={css.userAvatar}>
        <svg width={24} height={24}>
          <use href="/images/sprite.svg#user-default-icon"></use>
        </svg>
      </div>
      <p className={css.userName}>{user.username}</p>
      <Button type="button" variant="logOut" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
