import clsx from "clsx";
import css from "../FriendList/FriendListItem.module.css";
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const state = clsx(css.text, isOnline === true ? css.online : css.offline);
  return (
    <div>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={state}>{isOnline === true ? "Online" : "Offline"}</p>
    </div>
  );
}
