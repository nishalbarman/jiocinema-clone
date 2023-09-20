import React from "react";
import styles from "./PosterWrapper.module.css";

function PostersWrapper({ children, title }) {
  return (
    <div className={styles.poster_outer}>
      <div>
        <p>{title}</p>
      </div>

      <div className={styles.poster_wrapper}>{children}</div>
    </div>
  );
}

export default PostersWrapper;
