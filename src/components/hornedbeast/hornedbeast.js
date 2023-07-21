import React from "react";
import { useState } from "react";

export default function Hornedbeast({ title, imgUrl, description }) {
  console.log();
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h2>{title}</h2>
      <img src={imgUrl} onClick={() => handleModal(beast)} />
      <p>{description}</p>
      <button onClick={handleLike}> Likes:🤩 {likes} </button>
    </div>
  );
}
