import styles from './modal.module.css';
import PropTypes from 'prop-types';

export default function Modal({ isOpen,onCloseModal,largeImage }) {
    if (!isOpen) {
        return null
    }
        return  (<div className = { styles.overlay } onClick = {onCloseModal} >
            <div className={styles.modal}>
                <img src={largeImage} alt="" />
            </div>
                </div> )
}
Modal.propTypes = {
    isOpen: PropTypes.bool,
    onCloseModal: PropTypes.func,
    largeImage: PropTypes.string,
}