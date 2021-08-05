import React, { useState ,useRef } from "react";
import styles from "./Modal.module.css"

const Modal = props => {

    const [show, setShow] = useState(props.show);

    const modalRef = useRef(null);

    const showModal = (e) => {
        setShow(true);
        setTimeout(() => 
        {
            if (modalRef.current) {
                modalRef.current.focus();
            }
            
        }, 500);
    };

    const closeModal = (e) => {
        setShow(false);
    }

    if (!show) {
        return (
          <button
          className="example_button"
          onClick={(e) => showModal()}
          >
          Open Modal
          </button>
        )
      }

      return (
        <>
            <button
                className="example_button"
                onClick={(e) => showModal()}
            >
                Open Modal
            </button>

            <div className={styles.modal}
                onClick={closeModal}
            >
                <div className={styles.modal_content} onClick={e => e.stopPropagation()} ref={modalRef}>
                    <div className={styles.modal_header}>
                        <h4 className={styles.modal_title}>
                            {props.title}
                        </h4>
                    </div>
                    <div className={styles.modal_body}>
                        {props.children}
                    </div>

                    <div className={styles.modal_footer}>
                        <button
                        className="example_button"
                        onClick={(e) => closeModal()}
                        >
                            Close Modal
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Modal;