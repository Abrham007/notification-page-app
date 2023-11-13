import React from "react";
import Item from "./Item";

function App() {
  const notificatins = [
    {
      name: "Mark Webber",
      avatar: "./assets/images/avatar-mark-webber.webp",
      action: "reacted to your recent post",
      post: "My first tournament today!",
      elapsedTime: "1m ago",
      online: "true",
    },
    {
      name: "Angela Gray",
      avatar: "./assets/images/avatar-angela-gray.webp",
      action: "followed you",
      elapsedTime: "5m ago",
      online: "true",
    },
    {
      name: "Jacob Thompson",
      avatar: "./assets/images/avatar-jacob-thompson.webp",
      action: "has joined your group",
      group: "Chess Club",
      elapsedTime: "1 day ago",
      online: "true",
    },
    {
      name: "Rizky Hasanuddin",
      avatar: "./assets/images/avatar-rizky-hasanuddin.webp",
      action: "sent you a private message",
      elapsedTime: "5 days ago",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      name: "Kimberly Smith",
      avatar: "./assets/images/avatar-kimberly-smith.webp",
      action: "commented on your picture",
      elapsedTime: "1 week ago",
      postedImg: "./assets/images/image-chess.webp",
    },
    {
      name: "Nathan Peterson",
      avatar: "./assets/images/avatar-nathan-peterson.webp",
      action: "reacted to your recent post",
      elapsedTime: "2 weeks ago",
      post: "5 end-game strategies to increase your win rate",
    },
    {
      name: "Anna Kim",
      avatar: "./assets/images/avatar-anna-kim.webp",
      action: "left the group",
      elapsedTime: "2 weeks ago",
      group: "Chess Club",
    },
  ];

  return (
    <div className="item-container">
      {notificatins.map((notificatin, index) => (
        <Item
          key={index}
          name={notificatin.name}
          avatar={notificatin.avatar}
          action={notificatin.action}
          post={notificatin.post}
          group={notificatin.group}
          elapsedTime={notificatin.elapsedTime}
          online={notificatin.online}
          message={notificatin.message}
          postedImg={notificatin.postedImg}
        />
      ))}
    </div>
  );
}

export default App;
