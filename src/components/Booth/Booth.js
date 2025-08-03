import React from "react";
import styles from "./Booth.css";
import fanime1 from "../../assets/booth/fanime1.jpg";
import fanime2 from "../../assets/booth/fanime2.jpg";
import ai1 from "../../assets/booth/ai1.jpg";
import sac1 from "../../assets/booth/sac1.jpg";
import sac2 from "../../assets/booth/sac2.jpg";
import stockton1 from "../../assets/booth/stockton1.jpg";
import Heading from "../Heading/Heading";

function Booth() {
  const content = {
    images: [
      {
        src: sac1,
        alt: "Booth setup for SacAnime",
        caption: "10x10 Corner Booth at SacAnime",
        isFullWidth: false,
      },
      {
        src: sac2,
        alt: "Booth setup for SacAnime",
        caption: "10x10 Corner Booth at SacAnime",
        isFullWidth: false,
      },
      {
        src: ai1,
        alt: "Booth setup for Anime Impulse",
        caption: "10x20 Double Booth at Anime Impulse",
        isFullWidth: true,
      },
      {
        src: stockton1,
        alt: "Booth setup for StocktonCon",
        caption: "10x5 Artist Alley Booth at StocktonCon",
        isFullWidth: true,
      },
      {
        src: fanime1,
        alt: "Booth setup for FanimeCon",
        caption: "10x10 Booth at FanimeCon",
        isFullWidth: false,
      },
      {
        src: fanime2,
        alt: "Booth setup for FanimeCon",
        caption: "10x10 Booth at FanimeCon",
        isFullWidth: false,
      },
    ],
  };

  return (
    <section className={styles.booth}>
      <Heading subtitle="Our conventions" title="booth setup" />
      <div className={styles.booth__grid}>
        {content.images.map((image, index) => (
          <figure
            key={index}
            className={`${styles.booth__item} ${
              image.isFullWidth
                ? styles.booth__item_full
                : styles.booth__item_half
            }`}
          >
            <img
              src={`dist/${image.src}`}
              alt={image.alt}
              className={styles.booth__image}
            />
            <figcaption className={styles.booth__caption}>
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Booth;
