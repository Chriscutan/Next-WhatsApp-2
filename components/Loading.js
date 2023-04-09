import React from "react";
import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "50vh" }}>
      <img
        src="https://imgs.search.brave.com/jRtcont1tka0L_Rxg8IsbcWIu5rhiZNpQbnVnrJCORM/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/bmdhbGwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzA0/L1doYXRzQXBwLVBO/Ry1QaWN0dXJlLnBu/Zw"
        alt=""
        height={200}
        style={{ marginBottom: 10 }}
      />
      <Circle color="#3cbc28" size={60} />
    </center>
  );
}

export default Loading;
