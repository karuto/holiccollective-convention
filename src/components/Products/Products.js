import React from "react";
import styles from "./Products.css";
import Heading from "../Heading/Heading";

const products = [
  {
    title: "Rotating diorama standees",
    description:
      "A unique standee that rotates to reveal different scenes or characters.",
  },
  {
    title: "Water activated prints",
    description: "Watch the art transform when you add water—like magic!",
  },
  {
    title: "Quicksand liquid acrylics",
    description:
      "Acrylic pieces with mesmerizing quicksand liquid movement inside.",
  },
  {
    title: "Double reflection badges",
    description:
      "Badges that show two different images depending on the angle.",
  },
  {
    title: "Holographic effect ticket stubs",
    description:
      "Ticket stubs with a dazzling holographic finish for collectors.",
  },
];

function Products() {
  return (
    <section className={styles.products}>
      <Heading subtitle="Explore our unique merch" title="Creations" />
      <div className={styles.products__list}>
        {products.map((product, idx) => (
          <div key={idx} className={styles.product__block}>
            <h3 className={styles.product__title}>{product.title}</h3>
            <p className={styles.product__desc}>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
