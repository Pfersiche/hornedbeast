import React from "react";
import Hornedbeast from "../hornedbeast/hornedbeast";

export default function Main({ data }) {
  return (
    <div className="main-div">
      {data.map((beast) => (
        <Hornedbeast title={beast.title} imgUrl={beast.image_url} />
      ))}
    </div>
  );
}
