import React, { useState } from 'react';
import styles from './index.module.css';
import { Box } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Modal from '../Modal';

const ImageCard = ({ image }) => {
    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            {isOpen && <Modal isOpen={isOpen} image={image} closeModal={closeModal} />}
            <Box className={styles.imageBox} onClick={openModal}>
                <img src={image} alt={image} />
                <p>
                    <ZoomInIcon fontSize='large' color='info' />
                </p>
            </Box>
        </>
    )
}

export default ImageCard