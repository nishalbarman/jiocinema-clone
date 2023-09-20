import React from "react";
import styles from "./VPoster.module.css";

function VPoster({ image }) {
  console.log(image);
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={styles.poster}></div>
  );
}

export default VPoster;
