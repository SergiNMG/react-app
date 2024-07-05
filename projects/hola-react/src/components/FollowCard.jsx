import "../styles/followCard.scss";
export function FollowCard({ name, userName, formatUserName, isFollowing }) {
  return (
    <section className="tw-followCard">
      <header className="tw-followCard__header">
        <img
          className="tw-followCard__img"
          src={`https://unavatar.io/x/${userName}`}
          alt=""
        />
        <div className="tw-followCard__info">
          <strong>{name}</strong>
          <span className="tw-followCard__info--userName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard__btn">Follow</button>
      </aside>
    </section>
  );
}
