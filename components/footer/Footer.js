import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../footer/footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.imgWrapper}>
        <Image src="/logo.svg" width={100} height={100} />
      </div>
      <ul className={styles.linkList}>
        <Link href="/privacy"> Privacy </Link>
        <Link href="/terms-and-conditions"> Terms and Conditions </Link>
        <Link href="/faqs"> Frequently Asked Questions </Link>
        <Link href="/contact"> Contact Us </Link>
      </ul>
    </div>
  );
}

export default Footer;
