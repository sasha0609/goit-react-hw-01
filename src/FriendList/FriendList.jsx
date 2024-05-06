import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <>
      <ul className={css.container}>
        {friends.map((friend) => (
          <li className={css.info} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </>
  );
}
