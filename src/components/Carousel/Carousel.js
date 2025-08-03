import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.css";
import holicReel from "../../assets/carousel/holic-reel.mp4";

function Carousel() {
  const carouselContent = [
    "Translucent liquid acrylics",
    "Reflective backlit badges",
    "Quicksand liquid standees",
    "Water activated live prints",
    "Thermal sensitive live prints",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentTextRef = useRef(null);
  const videoRef = useRef(null);

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
      }, 250);
    }, 4100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [nextIndex, carouselContent.length]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__container}>
        <div className={styles.carousel__textWrapper}>
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
          ref={videoRef}
          className={styles.carousel__image}
          src={`dist/${holicReel}`}
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
