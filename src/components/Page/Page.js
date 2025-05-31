import React from "react";
import Footer from "../Footer/Footer";
import styles from "./Page.css";
import Team from "../Team/Team";
import Booth from "../Booth/Booth";

function Page() {
  const content = {
    headingGlobal: "Holic Collective",
    subheadingGlobal:
      "Your fandom deserves better than a plain sticker, and so do you",
    description:
      "We are a collective of artist friends united by our passion for crafting innovative fan art that go far beyond plain stickers.",
    disclaimer:
      "Holic Collective is a small, non-commercial passion project run by a close-knit group of artists. While we're flattered by the interest, we're currently at capacity and not accepting new members to our collective. Thank you for understanding!",
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.overlay} style={{backgroundImage: `url('dist/${hero}')`}}> */}
      <div className={styles.overlay}>
        <header className={styles.titles}>
          <h1 className={styles["heading--titles"]}>{content.headingGlobal}</h1>
          <h3 className={styles["subheading--titles"]}>
            {content.subheadingGlobal}
          </h3>
        </header>
      </div>
      <div className={styles.content}>
        <p>{content.description}</p>
        <Team disclaimer={content.disclaimer} />
        <Booth />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
