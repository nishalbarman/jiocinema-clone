import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Carousel.module.css";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [direction, setDirection] = useState("left");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => {
      if (prev + 1 > images.length - 1) return 0;
      return prev + 1;
    });
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prev) => {
      if (prev - 1 < 0) return images.length - 1;
      return prev - 1;
    });
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
    },

    hiddenLeft: {
      x: "-100%",
    },
    visible: {
      x: "0",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={styles.carousel}>
      <AnimatePresence>
        <motion.div
          className={styles.carousel_card}
          key={currentIndex}
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate={"visible"}
          exit={"exit"}>
          <div>
            <p>Khatron ke khiladi</p>
            <p>HIndi - Reality - U/A 13 +</p>
            <button>
              <svg
                width="18"
                height="16"
                viewBox="0 0 15 18"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.43693 16.9865C1.77124 17.4108 0.899414 16.9326 0.899414 16.1432V1.85653C0.899414 1.0671 1.77124 0.588944 2.43694 1.01328L13.6432 8.15662C14.2599 8.54969 14.2598 9.45005 13.6432 9.84312L2.43693 16.9865Z"
                  fill="#FFFFFF"
                />
              </svg>{" "}
              Watch
            </button>
          </div>
          <div style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            {/* <img src={images[currentIndex]} /> */}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className={styles.pagination}>
        <div className={styles.dotwrapper}>
          {images.map((_, index) => {
            return (
              <div
                className={`${styles.dot} ${
                  currentIndex === index ? styles.dotactive : ""
                }`}
                onClick={() => {
                  handleDotClick(index);
                }}></div>
            );
          })}
        </div>
        <div className={styles.buttonwrapper}>
          <div className={styles.left} onClick={handlePrevious}>
            <img
              alt="back arrow"
              src="https://jiocinema.com/images/carousel/BackArrow.svg"
            />
          </div>
          <div className={styles.right} onClick={handleNext}>
            <img
              alt="back arrow"
              src="https://jiocinema.com/images/carousel/ForwardArrow.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
