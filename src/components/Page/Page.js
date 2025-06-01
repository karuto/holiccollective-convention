import React from "react";
import Footer from "../Footer/Footer";
import styles from "./Page.css";
import Team from "../Team/Team";
import Booth from "../Booth/Booth";
import Carousel from "../Carousel/Carousel";

function Page() {
  const content = {
    headingGlobal: "Holic Collective",
    subheadingGlobal:
      "Your fandom deserves better than a plain sticker, and so do you",
    description:
      "We are a collective of artist friends united by our passion for crafting innovative fan art that go far beyond plain stickers. 🤘",
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles["heading"]}>{content.headingGlobal}</h1>
        <h3 className={styles["subheading"]}>{content.description}</h3>
        <div className={styles.headers__content}>
          <Carousel />
        </div>
      </header>
      <div className={styles.content}>
        <Team />
        <Booth />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
