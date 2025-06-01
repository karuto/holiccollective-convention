import React from "react";
import Footer from "../Footer/Footer";
import styles from "./Page.css";
import Team from "../Team/Team";
import Booth from "../Booth/Booth";
import Carousel from "../Carousel/Carousel";
import boothImage from "../../assets/booth/6.jpg";

function Page() {
  const content = {
    headingGlobal: "Holic Collective",
    subheadingGlobal:
      "Your fandom deserves better than a plain sticker, and so do you",
    description:
      "We are a collective of artist friends united by our passion for crafting innovative fan art that go far beyond plain stickers.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <header className={styles.header}>
          <div className={styles.headers__content}>
            <h1 className={styles["heading--titles"]}>
              {content.headingGlobal}
            </h1>
            <Carousel />
            <h3 className={styles["subheading--titles"]}>
              {content.description}
            </h3>
          </div>
          <img
            src={`dist/${boothImage}`}
            alt="Booth display"
            className={styles.titles__image}
          />
        </header>
      </div>
      <div className={styles.content}>
        {/* <p>{content.description}</p> */}
        <Team />
        <Booth />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
