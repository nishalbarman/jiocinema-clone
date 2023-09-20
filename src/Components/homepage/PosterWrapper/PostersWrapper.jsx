import React from "react";
import styles from "./PosterWrapper.module.css";
import HPoster from "./HPoster/HPoster";

function PostersWrapper({ title, data }) {
  return (
    <div className={styles.poster_outer}>
      <div>
        <p>{title}</p>
      </div>

      <div className={styles.poster_wrapper}>
        {data.map((element) => {
          return <HPoster {...element} />;
        })}
      </div>
    </div>
  );
}

export default PostersWrapper;
