import React from "react";
import Item from "./Item";
import notificatins from "../../../notifications.json";

function App() {
  return (
    <div>
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
