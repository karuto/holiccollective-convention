import React from "react";
import styles from "./Products.css";
import Heading from "../Heading/Heading";

function Products() {
  return (
    <section className={styles.products}>
      <Heading subtitle="Explore our unique merch" title="Products" />
      {/* Add product content here */}
    </section>
  );
}

export default Products;
