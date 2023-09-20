import React, { useEffect } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Carousel.module.css";

function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");
  const [intervalId, setIntervalId] = useState(null);
  const [triggerCarousel, setTriggerCarousel] = useState(1);

  useEffect(() => {
    let id = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === data.length - 1) return 0;
        return prev + 1;
      });
    }, 5000);
    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, [triggerCarousel]);

  const handleNext = () => {
    clearInterval(intervalId);
    setTriggerCarousel((prev) => prev + 1);
    setDirection("right");
    setCurrentIndex((prev) => {
      if (prev + 1 > data.length - 1) return 0;
      return prev + 1;
    });
  };

  const handlePrevious = () => {
    clearInterval(intervalId);
    setTriggerCarousel((prev) => prev + 1);
    setDirection("left");
    setCurrentIndex((prev) => {
      if (prev - 1 < 0) return data.length - 1;
      return prev - 1;
    });
  };

  const handleDotClick = (index) => {
    clearInterval(intervalId);
    setTriggerCarousel((prev) => prev + 1);
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },

    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  console.log(data[currentIndex].image);
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
          <div className={styles.details}>
            <p>{data[currentIndex].title}</p>
            <p>
              {data[currentIndex].language} - {data[currentIndex].movieType} -{" "}
              {data[currentIndex].contentRating}
            </p>
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
          <div style={{ backgroundImage: `url(${data[currentIndex].image})` }}>
            {/* <img src={images[currentIndex]} /> */}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className={styles.pagination}>
        <div className={styles.dotwrapper}>
          {data.map((_, index) => {
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
