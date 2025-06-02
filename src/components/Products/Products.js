import React from "react";
import styles from "./Products.css";
import Heading from "../Heading/Heading";
import img1 from "../../assets/products/hc-0r.png";
import img2 from "../../assets/products/hc-1w.png";
import img3 from "../../assets/products/hc-2g.png";
import img4 from "../../assets/products/hc-3d.png";
import img5 from "../../assets/products/hc-4h.png";

const productImages = [img1, img2, img3, img4, img5];

function Products() {
  return (
    <section className={styles.products}>
      <Heading subtitle="Our creations" title="Products" />
      <div className={styles.products__grid}>
        {productImages.map((img, idx) => (
          <img
            key={idx}
            src={`dist/${img}`}
            alt="Product photo"
            className={styles.product}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
