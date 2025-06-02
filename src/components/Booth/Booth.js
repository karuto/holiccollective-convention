import React from "react";
import styles from "./Booth.css";
import booth1 from "../../assets/booth/1.jpg";
import booth2 from "../../assets/booth/2.jpg";
import booth3 from "../../assets/booth/3.jpg";
import booth4 from "../../assets/booth/4.jpg";
import booth5 from "../../assets/booth/5.jpg";
import booth6 from "../../assets/booth/6.jpg";
import Heading from "../Heading/Heading";

function Booth() {
  const content = {
    title: "Booth setup featuring innovate merch with artist credits",
    images: [
      { src: booth1, alt: "Booth photo 1" },
      { src: booth2, alt: "Booth photo 2" },
      { src: booth3, alt: "Booth photo 3" },
      { src: booth4, alt: "Booth photo 4" },
      { src: booth5, alt: "Booth photo 5" },
      { src: booth6, alt: "Booth photo 6" },
    ],
  };

  return (
    <section className={styles.booth}>
      <Heading subtitle="Our conventions" title="booth setup" />
      <div className={styles.booth__grid}>
        {content.images.map((image, index) => (
          <img
            key={index}
            src={`dist/${image.src}`}
            alt={image.alt}
            className={styles.booth__image}
          />
        ))}
      </div>
    </section>
  );
}

export default Booth;
