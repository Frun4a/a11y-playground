import { useState } from "react";
import styles from "./ToggleButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const initialPressedState = (propsPressed) =>
  propsPressed === true ? true : propsPressed === false ? false : false;

const ToggleButton = (props) => {
  // Accepted props:
  // - pressed - initial button state
  // - caption -> the button caption
  // - icon (false or true) -> either to  show an icon or not

  const [pressed, setPressed] = useState(initialPressedState(props.pressed));
  const [displayIcon, setDisplayIcon] = useState(props.icon);

  const icon = () => {
    if (displayIcon === true) {
      return pressed ? (
        <FontAwesomeIcon icon={faVolumeMute} />
      ) : (
        <FontAwesomeIcon icon={faVolumeUp} />
      );
    } else {
      return null;
    }
  };

  const handleClick = () => {
    setPressed(!pressed);
  };

  return (
    <button
      type="button"
      className={styles.toggle_button}
      aria-pressed={pressed}
      onClick={handleClick}
    >
      <span>{props.caption}</span>

      {displayIcon === true && (
        <span style={{ paddingLeft: "10px", minWidth: "35px" }}>{icon()}</span>
      )}
    </button>
  );
};

export default ToggleButton;
