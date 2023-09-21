import React from "react";
import styles from "./HPoster.module.css";

function HPoster({ title, image }) {
  console.log(image);
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={styles.poster}>
      {title && <p>{title}</p>}
      {title && <div></div>}
    </div>
  );
}

export default HPoster;
