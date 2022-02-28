import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({
    page,
    prevPage,
    nextPage,
    setPage,
    totalPages
}) => {
    if (totalPages <= 1) {
        return null
    }

    return (
        <ul className="pagination center">
            <li className={page === 1 ? 'disabled' : ''}>
                <a onClick={() => prevPage()}><i className="material-icons">chevron_left</i></a>
            </li>
            {[...Array(totalPages).keys()].map((el) => (
                <li key={el}
                    className={`waves-effect ${page === el + 1 ? 'active' : ''}`}>
                    <a
                        onClick={() => setPage(el + 1)}
                        key={el}
                    >
                        {el + 1}
                    </a>
                </li>
            ))}
            <li className={totalPages === page ? 'disabled' : ''}>
                <a onClick={() => nextPage()}><i className="material-icons">chevron_right</i></a>
            </li>
        </ul>
    )
}

Pagination.propTypes = {
    page: PropTypes.number,
    prevPage: PropTypes.number,
    nextPage: PropTypes.number,
    setPage: PropTypes.number,
    totalPages: PropTypes.number
}

export default Pagination
