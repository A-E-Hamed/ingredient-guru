import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterWrap}>
        <div className={styles.SocialMedia}>
          <div className={styles.SocialMediaWrap}>
            <a href="/" className={styles.SocialLogo}>
              Ingredient Guru
            </a>
            <div className={styles.SocialIcons}>
              <a
                href="/"
                className={styles.SocialIconLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                className={styles.SocialIconLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                className={styles.SocialIconLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="/"
                className={styles.SocialIconLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="/"
                className={styles.SocialIconLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
