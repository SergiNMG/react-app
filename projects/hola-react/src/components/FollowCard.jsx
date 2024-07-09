import "../styles/followCard.scss";
import { useState } from "react";

export function FollowCard({
  name,
  userName,
  formatUserName,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const textButton = isFollowing ? "Following" : "Follow";
  const buttonClass = isFollowing
    ? "tw-followCard__btn tw-followCard__btn--following"
    : "tw-followCard__btn";

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
        <button className={buttonClass} onClick={handleFollowClick}>
          <span className="tw-followCard__btn--following-text">
            {textButton}
          </span>
          <span className="tw-followCard__btn--stopFollow">Unfollow</span>
        </button>
      </aside>
    </section>
  );
}
