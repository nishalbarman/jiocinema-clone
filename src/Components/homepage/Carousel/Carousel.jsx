import React from "react";
import { useState } from "react";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div>
        <div>
          <h2>Khatron ke khiladi</h2>
          <p>HIndi - Reality - U/A 13 +</p>
          <button>Watch</button>
        </div>
        <div>
          <img src={images[currentIndex]} />
        </div>
      </div>
      <div className="pagination">
        <div>
          {images.map((_, index) => {
            <div
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => {
                handleDotClick(index);
              }}
            ></div>;
          })}
        </div>
        <div>
          <div className="left" onClick={handlePrevious}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </div>
          <div className="right" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
