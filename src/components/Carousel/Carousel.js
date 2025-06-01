import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.css";
import v1 from "../../assets/carousel/v1.mp4";
import v2 from "../../assets/carousel/v2.mp4";
import v3 from "../../assets/carousel/v3.mp4";
import v4 from "../../assets/carousel/v4.mp4";
import v5 from "../../assets/carousel/v5.mp4";

function Carousel() {
  const carouselContent = [
    "Quicksand liquid acrylics",
    "Lenticular ticket stubs",
    "Rotating diorama standees",
    "Water activated prints",
    // "Heat sentitive postcards",
  ];
  // const carouselMedia = [v1, v2, v3, v5, v4];
  const carouselMedia = [v1, v2, v3, v5];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [textHeight, setTextHeight] = useState(undefined);
  const currentTextRef = useRef(null);

  const customTransitionStyles = {
    transition: isAnimating
      ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      : "none",
  };

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

  useEffect(() => {
    if (currentTextRef.current) {
      setTextHeight(currentTextRef.current.offsetHeight);
    }
  }, [currentIndex, isAnimating]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__container}>
        <div
          className={styles.carousel__textWrapper}
          style={textHeight ? { height: textHeight } : {}}
        >
          <div
            ref={currentTextRef}
            className={
              styles.carousel__text +
              " " +
              styles.carousel__text__current +
              (isAnimating ? " " + styles.carousel__text__exit : "")
            }
            style={customTransitionStyles}
          >
            {carouselContent[currentIndex]}
          </div>
          <div
            className={
              styles.carousel__text +
              " " +
              styles.carousel__text__next +
              (isAnimating ? " " + styles.carousel__text__enter : "")
            }
            style={customTransitionStyles}
          >
            {carouselContent[nextIndex]}
          </div>
        </div>
        <video
          className={styles.carousel__image}
          src={`dist/${carouselMedia[currentIndex]}`}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}

export default Carousel;
