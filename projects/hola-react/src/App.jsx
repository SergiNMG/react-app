import { FollowCard } from "./components/FollowCard";
import "./styles/followCardContainer.scss";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <article className="tw-followCardContainer">
      <h2 className="c-title">A quién seguir</h2>
      <FollowCard
        name="Xilxas"
        userName="miguepg16"
        formatUserName={formatUserName}
        isFollowing
      ></FollowCard>
      <FollowCard
        name="Sergi"
        userName="gomezXVI"
        formatUserName={formatUserName}
      ></FollowCard>
      <FollowCard
        name="Xbox Game Pass"
        userName="XboxGamePass"
        formatUserName={formatUserName}
      ></FollowCard>
      <FollowCard
        name="Netflix España"
        userName="NetflixEs"
        formatUserName={formatUserName}
      ></FollowCard>
      <p className="c-showMore">Show more</p>
    </article>
  );
}
