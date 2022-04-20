import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

function Header() {
  const [windowSize, setWindowSize] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, [windowSize]);

  const handleClick = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <div>
        <Image alt="logo" src="/logo.svg" width={100} height={100} />
      </div>
      <div onClick={handleClick}>
        <Image
          alt="openIcon"
          src={mobileOpen ? "/close_icon.svg" : "/menu_icon.svg"}
          width={windowSize >= 376 ? 0 : 30}
          height={windowSize >= 376 ? 0 : 30}
        />
      </div>
      <div
        className={windowSize <= 375 ? styles.mobileMenu : styles.desktopMenu}
      >
        <ul className={styles.menuList}>
          <Link href="/program">Program</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/about">About MXDC</Link>
          <Link href="/contact-us">Contact Us</Link>
        </ul>
      </div>
      <div className={mobileOpen ? styles.mobileOpen : styles.mobileClosed}>
        <ul className={styles.mobileMenuList}>
          <Link href="/program">Program</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/about">About MXDC</Link>
          <Link href="/contact-us">Contact Us</Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
