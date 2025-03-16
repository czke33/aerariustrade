import { Link } from "react-router-dom";
import styles from "./BurgerMenu.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const BurgerMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button onClick={toggleMenu} className={styles.burgerButton}>
        &#9776; {/* Unicode character for burger icon */}
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <Link to="/galerie" className={styles.link} onClick={toggleMenu}>
            {t("galerie")}
          </Link>
          <Link to="/contact" className={styles.link} onClick={toggleMenu}>
            {t("contact")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
