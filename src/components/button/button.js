import {  useState,useEffect } from "react";
import styles from './button.module.css'
import PropTypes from 'prop-types';



export default function LoadMore (props) {
    const [page, setPage] = useState(1);
    const nextBtnPage = () => {
        setPage(page + 1);
    }
    useEffect(() => props.nextPage(page)    
    )
        
 return (<>
            {props.data.length > 0 &&
                <button onClick={nextBtnPage} type="button" className = {styles.Button}>Load More</button>}
</>) }

LoadMore.propTypes = {
    nextPage: PropTypes.func
}