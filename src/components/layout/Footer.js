import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <ul className={styles.social_list}>
        <li>{<FaFacebook />}</li>
        <li>{<FaInstagram />}</li>
        <li>{<FaLinkedin />}</li>
      </ul>
    </footer>
  );
}
