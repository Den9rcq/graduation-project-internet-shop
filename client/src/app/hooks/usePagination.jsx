import { useState } from 'react'

const usePagination = ({
    contentOnObjectPage,
    numberOfPages
}) => {
    const [page, setPage] = useState(1)
    const pageCount = Math.ceil(numberOfPages / contentOnObjectPage)
    const lastContentIndex = page * contentOnObjectPage
    const firstContentIndex = lastContentIndex - contentOnObjectPage

    const setPageNumber = (num) => {
        if (num > pageCount) {
            setPage(pageCount)
        } else if (num < 1) {
            setPage(1)
        } else {
            setPage(num)
        }
    }

    const changePage = (direction) => {
        setPage((state) => {
            if (direction) {
                if (state === pageCount) return state

                return state + 1
            } else {
                if (state === 1) return state

                return state - 1
            }
        })
    }

    return {
        page,
        totalPages: pageCount,
        firstContentIndex,
        lastContentIndex,
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        setPage: setPageNumber
    }
}

export default usePagination
