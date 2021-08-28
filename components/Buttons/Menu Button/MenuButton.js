import { useState } from "react";
import styles from "./MenuButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MenuButton = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleMenuButtonCLick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.menuButton_group}>
      <button
        type="button"
        onClick={handleMenuButtonCLick}
        className={styles.toggle_button}
        aria-expanded={expanded}
      >
        <span>Menu</span>
        <span className={styles.button_icon}>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </button>
    </div>
  );
};

export { MenuButton };
