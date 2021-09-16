import { useState, useRef, useEffect } from "react";
import useId from "react-id-generator";
import styles from "./MenuButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const menuId = useId();
const menuButtonId = useId();

const MenuButton = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleMenuButtonCLick = () => {
    console.log('handleMenuButtonCLick executed');
    setExpanded(!expanded);
  };

  useEffect(() => {
    const menuButton = document.getElementById(menuButtonId);

    console.log("Adding an even listener" + " id is" + " " + menuButtonId);

    document.addEventListener("keydown", (e) => {
      // console.log(e.key +"______"+e.code) ;
      if (document.activeElement === menuButton) {
        if (e.key === "ArrowDown") {
          setExpanded(!expanded);
          console.log("Menu Button + Down arrow event");
          e.stopPropagation();
          e.preventDefault();
        }
      }
    });
  }, [menuButtonId]);

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
