import { useState, useRef, useEffect } from "react";
import nextId from "react-id-generator";
import styles from "./MenuButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const menuId = nextId();
const menuButtonId = nextId();

const MenuButton = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleMenuButtonCLick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const menuButton = document.getElementById(menuButtonId);

    document.addEventListener("keydown", (e) => {
      console.log(e.key +"__"+e.code);
      // if (e.key === "ArrowDown") {
      //   if (document.activeElement === menuButton) {
      //     console.log("Active element is the Menu button");
      //     handleMenuButtonCLick();
      //   }
      // }
    });
  }), [];

  return (
    <div className={styles.menuButton_group}>
      {/* Menu button */}
      <button
        type="button"
        onClick={handleMenuButtonCLick}
        className={styles.toggle_button}
        aria-expanded={expanded}
        aria-haspopup="true"
        aria-controls={menuId}
        id={menuButtonId}
      >
        <span>Menu</span>
        <span className={styles.button_icon}>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </button>
      {/* Menu */}
      <ul
        id={menuId}
        role="menu"
        aria-labelledby={menuButtonId}
        className={!expanded ? `${styles.hidden} ${styles.menu}` : styles.menu}
      >
        <li role="menuitem" tabIndex="0">
          Option #1
        </li>
        <li role="menuitem" tabIndex="0">
          Option #2
        </li>
        <li role="menuitem" tabIndex="0">
          Option #3
        </li>
        <li role="menuitem" tabIndex="0">
          Option #4
        </li>
      </ul>
    </div>
  );
};

export { MenuButton };
