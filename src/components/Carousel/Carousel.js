import React, { useState, useEffect } from "react";
import styles from "./Carousel.css";

function Carousel() {
  const carouselContent = [
    "Heat sentitive postcards",
    "Water activated prints",
    "Quicksand liquid charms",
    "Backlit acrylics",
    "Lenticular ticket stubs",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId;
    const interval = setInterval(() => {
      setIsAnimating(true);
      timeoutId = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % carouselContent.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [nextIndex, carouselContent.length]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__container}>
        <h2
          className={`${styles.carousel__text} ${
            styles.carousel__text__current
          } ${isAnimating ? styles.carousel__text__exit : ""}`}
          style={{
            transition: isAnimating
              ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {carouselContent[currentIndex]}
        </h2>
        <h2
          className={`${styles.carousel__text} ${styles.carousel__text__next} ${
            isAnimating ? styles.carousel__text__enter : ""
          }`}
          style={{
            transition: isAnimating
              ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {carouselContent[nextIndex]}
        </h2>
      </div>
    </div>
  );
}

export default Carousel;
