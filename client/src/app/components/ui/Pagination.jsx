import React from 'react';

const Pagination = ({ page, prevPage, nextPage, setPage, totalPages }) => {
    return (
        <ul className="pagination center">
            <li className={page === 1 ? 'disabled' : ''}>
                <a onClick={() => prevPage()}><i className="material-icons">chevron_left</i></a>
            </li>
            {[...Array(totalPages).keys()].map((el) => (
                <li key={el}
                    className={`waves-effect ${page === el + 1 ? "active" : ""}`}>
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
    );
};

export default Pagination;