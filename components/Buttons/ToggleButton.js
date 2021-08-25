import { useState } from "react";
import styles from "./ToggleButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = (props) => {
  // Accepted props:
  // - caption -> the button caption
  // - icon (false or true) -> either to  show an icon or not

  const initialState =
    props.pressed === true ? true : props.pressed === false ? false : false;
  const [pressed, setPressed] = useState(initialState);

  const icon = pressed ? (
    <FontAwesomeIcon icon={faVolumeMute} />
  ) : (
    <FontAwesomeIcon icon={faVolumeUp} />
  );

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
      <span>{props.caption}</span><span style={{paddingLeft: '10px', minWidth: '35px'}}>{icon}</span>
    </button>
  );
};

export default ToggleButton;
