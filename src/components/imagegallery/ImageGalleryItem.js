import { useState } from "react";
import styles from './ImageGallery.module.css'
import PropTypes from 'prop-types';

export default function ImageGalleryItem (props) {
        return <>
            {
                props.data.map((img => {
                 return <li className={styles.ImageGalleryItem} key={img.id}>
                <img  src={img.webformatURL} alt='' className={styles.ImageGalleryItemImage} onClick={() => props.toggleModal(img)} />
                </li> 
                    }))
                }
            </>
    }

ImageGalleryItem.propTypes = {
    toggleModal: PropTypes.func,
    data: PropTypes.array,
}