import css from "./profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.image} src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.listStats}>
        <li className={css.listItem}>
          <span>Followers</span> <span>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span> <span>{views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span> <span>{likes} </span>
        </li>
      </ul>
    </div>
  );
}
