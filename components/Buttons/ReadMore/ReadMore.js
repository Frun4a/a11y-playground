import { React, useState, useRef, useEffect } from "react";
import styles from "./ReadMore.module.css";

function truncateCopy(copy, type, length) {
  if (copy && ["words", "characters"].includes(type) && (length>0)) {
    if (type === "characters") {
      if (copy.length > length) {
        const truncatedStringCharacters = copy.substring(0, length);
        if (
          [",", "!", ".", "?", ":", ";", " "].includes(
            truncatedStringCharacters.slice(-1)
          )
        ) {
          return truncatedStringCharacters.slice(0, -1) + "...";
        } else {
          return truncatedStringCharacters + "...";
        }
      } else {
        return copy.trim() + "...";
      }
    } else {
      // type is words
      const arrayOfWords = copy.split(" ");
      if (arrayOfWords.length > length) {
        arrayOfWords.length = length;
        const truncatedCopy = arrayOfWords.join(" ");
        if (
          [",", "!", ".", "?", ":", ";", " "].includes(truncatedCopy.slice(-1))
        ) {
          return truncatedCopy.slice(0, -1) + "...";
        } else {
          return truncatedCopy + "...";
        }
      }
    }
  }
}

// ReadMore component accepts:
// copy: string
// length: integer
// type: enum - 'words' or 'characters'

const ReadMore = (props) => {
  const [expanded, setExpanded] = useState(props.expanded);

  const [copy, setCopy] = useState({
    fullCopy: props.copy,
    truncationType: props.type,
    truncatedCopy: truncateCopy(props.copy, props.type, props.length),
  });

  const [collapsedHeight, setCollapsedHeight] = useState(null);

  //Set pointer for the div
  const divRef = useRef(null);

  let buttonCaption = !expanded ? "Read more" : "Read less";

  const handleToggleButtonClick = () => {
    // Collapsed -> Expanded transition
    if (!expanded) {
      // Getting the initial div height
      const initialDivHeight = divRef.current.clientHeight;

      //Save the initial div height to the state
      setCollapsedHeight(initialDivHeight);

      // Change div's max-height from auto to its actual height
      divRef.current.style.maxHeight = initialDivHeight + "px";

      // Expand the section
      setExpanded(!expanded);
      divRef.current.focus();
    } else {
      //Expanded -> Collapsed transition

      // Collapse the section, but not instantly so the copy doesn't dissappear before the animation starts
      setTimeout(() => setExpanded(!expanded), 750);

      // Change div's max-height to the previously saved collapsed div height
      divRef.current.style.maxHeight = collapsedHeight + "px";
    }
  };

  useEffect(() => {
    if (expanded) {
      // Get the expanded div height using scrollHeight property
      const endDivHeight = divRef.current.scrollHeight;

      // Change div's height from collapsed div value to its expanded height value
      divRef.current.style.maxHeight = endDivHeight + "px";
    }
  }, [expanded]);

  return (
    <>
      <div className={styles.read_more} ref={divRef} tabIndex="-1">
        <p>{expanded ? copy.fullCopy : copy.truncatedCopy}</p>
      </div>
      <button
        type="button"
        onClick={handleToggleButtonClick}
        className={styles.read_more_less_button}
      >
        {buttonCaption}
      </button>
    </>
  );
};

export { ReadMore };
