import Modal from "../modal/Modal";
import ImageGalleryItem from "./ImageGalleryItem";
import styles from './ImageGallery.module.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

export default function ImageGallery (props) {
    
    const [isOpenModal, setModeModal] = useState(false);
    const [largeImage, setLargeImage] = useState('');

    const keyDownListener = (key) => {
        if (key.code === `Escape`) {
            onCloseModal();
        }
    }
    const toggleModal = (img) => {
        setModeModal(!isOpenModal);
        setLargeImage(img.largeImageURL);
    }
    const onCloseModal = () => {
        setModeModal(!isOpenModal);
    }
    useEffect(() => { window.addEventListener('keydown', keyDownListener) })
        return <ul className = {styles.ImageGallery} key = 'id'>
            { props.data.length > 0 && 
                <ImageGalleryItem toggleModal={toggleModal} data={props.data} />}
            <Modal isOpen={isOpenModal}
                onCloseModal={onCloseModal}
                largeImage = {largeImage}
            />
        </ul>
    }
ImageGallery.propTypes = {
    data : PropTypes.array,
}