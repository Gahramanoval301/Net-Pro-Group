import React, { useState } from 'react'
import styles from './index.module.css'

const Modal = ({ isOpen, image, closeModal }) => {
    const [isOpenModal, setisOpenModal] = useState(isOpen)

    function handleClose() {
        setisOpenModal(false)
        closeModal()
    }

    return (
        <>
            {
                isOpenModal &&
                <div className={styles["modal-overlay"]} onClick={handleClose}>
                    <div className={styles["modal-content"]}>
                        <img src={image} alt={image} className={styles.image} />
                    </div>
                </div>
            }
        </>
    )
}

export default Modal