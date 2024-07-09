import { FollowCard } from "./components/FollowCard";
import "./styles/followCardContainer.scss";

export function App() {
  const users = [
    {
      name: "Xilxas",
      userName: "miguepg16",
      initialIsFollowing: true,
    },
    {
      name: "Sergi",
      userName: "gomezXVI",
      initialIsFollowing: true,
    },
    {
      name: "Xbox Game Pass",
      userName: "XboxGamePass",
      initialIsFollowing: false,
    },
    {
      name: "Netflix España",
      userName: "NetflixEs",
      initialIsFollowing: false,
    },
  ];

  const formatUserName = (userName) => `@${userName}`;

  return (
    <article className="tw-followCardContainer">
      {users.map((user) => {
        const { name, userName, initialIsFollowing } = user;
        return (
          <FollowCard
            key={userName}
            name={name}
            userName={userName}
            initialIsFollowing={initialIsFollowing}
            formatUserName={formatUserName}
          ></FollowCard>
        );
      })}
    </article>
  );

  // return (
  //   // <article className="tw-followCardContainer">
  //   //   <h2 className="c-title">A quién seguir</h2>
  //   //   <FollowCard
  //   //     name="Xilxas"
  //   //     userName="miguepg16"
  //   //     formatUserName={formatUserName}
  //   //   ></FollowCard>
  //   //   <FollowCard
  //   //     name="Sergi"
  //   //     userName="gomezXVI"
  //   //     formatUserName={formatUserName}
  //   //     initialIsFollowing={true}
  //   //   ></FollowCard>
  //   //   <FollowCard
  //   //     name="Xbox Game Pass"
  //   //     userName="XboxGamePass"
  //   //     formatUserName={formatUserName}
  //   //   ></FollowCard>
  //   //   <FollowCard
  //   //     name="Netflix España"
  //   //     userName="NetflixEs"
  //   //     formatUserName={formatUserName}
  //   //   ></FollowCard>
  //   //   <p className="c-showMore">Show more</p>
  //   // </article>
  // );
}
