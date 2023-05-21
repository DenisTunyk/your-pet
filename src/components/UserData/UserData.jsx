import { LogoutBtn } from '../Buttons/LogoutBtn/LogoutBtn';
import camera from '../../assets/icon/camera.svg';
import edit from '../../assets/icon/edit-2.svg';
import css from './UserData.module.css';

export const UserData = () => {
  return (
    <div className={css.profile__conteiner}>
      <div className={css.profile__content}>
        <img src="" alt="user-photo" className={css.profile__photo} />
        <button type="button" className={css.profile__btn}>
          <img className={css.profile__icon} src={camera} alt="camera" />
          Edit photo
        </button>
      </div>

      <ul className={css.profile__list}>
        <li className={css.profile__item}>
          <p className={css.profile__item__name}>Name:</p>
          <input
            className={css.profile__input}
            placeholder="Anna"
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <img className={css.profile__icon} src={edit} alt="edit" />
        </li>

        <li className={css.profile__item}>
          <p className={css.profile__item__name}>Email:</p>
          <input
            className={css.profile__input}
            placeholder="anna00@gmail.com|"
            type="text"
            message="Please enter valid email"
            name="email"
            required
          />
          <img className={css.profile__icon} src={edit} alt="edit" />
        </li>

        <li className={css.profile__item}>
          <p className={css.profile__item__name}>Birthday:</p>
          <input
            className={css.profile__input}
            placeholder="00.00.0000"
            type="text"
          />
          <img className={css.profile__icon} src={edit} alt="edit" />
        </li>

        <li className={css.profile__item}>
          <p className={css.profile__item__name}>Phone:</p>
          <input
            className={css.profile__input}
            placeholder="+380 00 00 00 000"
            type="tel"
          />
          <img className={css.profile__icon} src={edit} alt="edit" />
        </li>

        <li className={css.profile__item}>
          <p className={css.profile__item__name}>City:</p>
          <input
            className={css.profile__input}
            placeholder="Ukraine, Kyiv"
            type="text"
          />
          <img className={css.profile__icon} src={edit} alt="edit" />
        </li>
      </ul>
      <LogoutBtn />
    </div>
  );
};
