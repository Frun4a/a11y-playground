import React, { useState, useRef, useEffect } from "react";
import { ReactDOM } from "react";
import styles from "./Modal.module.css";
import { useAppContext } from "../context/state.js";
import { useId } from 'react-id-generator';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  const [show, setShow] = useState(props.show);
  const contextState = useAppContext();

  //Refs
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const openButtonRef = useRef(null);

  const [headerId] = useId();

  useEffect(() => {
    if (show) {
      document.body.classList.add('modal_open');
    } else {
      document.body.classList.remove('modal_open');
    }
  },[show]);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  useEffect(() => {
    if (show) {
      const focusableElements =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const modal = modalRef.current;
      const firstFocusableElement =
        modal.querySelectorAll(focusableElements)[0];
      const focusableContent = modal.querySelectorAll(focusableElements);
      const lastFocusableElement =
        focusableContent[focusableContent.length - 1];

      document.addEventListener("keydown", (e) => {
        let isTabPressed = e.key === "Tab" || e.code === "Tab";

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      });
      firstFocusableElement.focus();
    }
  });

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    openButtonRef.current.focus();
  };

  return (
    <>
      <button
        className="example_button"
        onClick={(e) => showModal()}
        ref={openButtonRef}
      >
        Open Modal
      </button>

      <div className={styles.modal} onClick={closeModal} style={show ? {display: 'flex'} : {display: 'none'} }>
        <div
          className={styles.modal_content}
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={headerId}
        >
          <div className={styles.modal_header}>
            <h4 className={styles.modal_title} id={headerId}>{props.title}</h4>
            <div className={styles.close_icon_block}>
              <button
                className={styles.close_button}
                onClick={closeModal}
                ref={closeButtonRef}
                aria-label="Close the Modal Dialog"
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </div>
          </div>
          <div className={styles.modal_body}>{props.children}</div>

          <div className={styles.modal_footer}>
            <button className="example_button" onClick={(e) => closeModal()}>
              Close Modal
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
