import React from "react"
import styles from './Pagination.module.scss'
import PrevBtn from './PrevBtn'
import NextBtn from "./NextBtn"
import PropTypes from "prop-types";

function Pagination(props) {
    const {onPageClick, currentPage, onPrevClick, onNextClick} = props

    const displayedNumbers = 5

    let currentIndex

    if (currentPage - 1 >= 2) {
        currentIndex = currentPage - 1 && currentPage - 2
    } else if (currentPage === 2) {
        currentIndex = currentPage - 1
    } else {
        currentIndex = currentPage
    }

    let pages = []

    for (let i = currentIndex; i < currentIndex + displayedNumbers; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.block}>
            <PrevBtn className={`${styles.button} ${styles.prevBtn}`} onClick={onPrevClick}/>
            <div className={styles.btnsBlock}>
                {pages.map(page => {
                    return <div key={page}
                                className={`${currentPage === page && styles.selectedPage} ${styles.button}`}
                                onClick={() => onPageClick(page)}>
                        {page}
                    </div>
                })}
            </div>
            <NextBtn className={styles.button} onClick={onNextClick}/>
        </div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    onPageClick: PropTypes.func.isRequired,
    onPrevClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired,
}

export default Pagination