import React from "react";
import styles from "./Carousel.module.css";
import Carousell from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carousel({ data }) {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className={styles.carousel_button_group}
        style={{ position: "absolute" }}>
        <div
          className={styles.left}
          onClick={() => {
            if (currentSlide === 0) {
              goToSlide(data.length - 1);
            } else {
              previous();
            }
          }}>
          <img
            alt="back arrow"
            src="https://jiocinema.com/images/carousel/BackArrow.svg"
          />
        </div>
        <div
          className={styles.right}
          onClick={() => {
            if (currentSlide === data.length - 1) {
              goToSlide(0);
            } else {
              next();
            }
          }}>
          <img
            alt="back arrow"
            src="https://jiocinema.com/images/carousel/ForwardArrow.svg"
          />
        </div>
      </div>
    );
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <div
        className={active ? `${styles.dotactive}` : `${styles.dot}`}
        onClick={() => onClick()}></div>
    );
  };

  return (
    <div
      style={{
        paddingBottom: "30px",
        position: "relative",
      }}>
      <Carousell
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className={styles.carousel}
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        customDot={<CustomDot />}
        customButtonGroup={<ButtonGroup />}>
        {data.map((items) => {
          return (
            <div className={styles.carousel_card}>
              <div className={styles.content_details}>
                <p>{items.title}</p>
                <p>
                  {items.language} {items.movieType} {items.contentRating}
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
              <div className={styles.content_image_outer}>
                <img src={items.image} />
                <div className={styles.overlay_image}></div>
                <span className={styles.second_overlay_span}></span>
              </div>
            </div>
          );
        })}
      </Carousell>
    </div>
  );
}

export default Carousel;
