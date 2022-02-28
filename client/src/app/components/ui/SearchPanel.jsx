import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchString, searchStringChanged } from '../../store/productsSlice'
import { useHistory } from 'react-router-dom'

const SearchPanel = () => {
    const [value, setValue] = useState('')
    const searchString = useSelector(getSearchString())
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (searchString) {
            setValue(searchString)
        }

        // eslint-disable-next-line
    }, [])

    const onChangeHandler = (e) => {
        const { value } = e.target
        if (!value) {
            dispatch(searchStringChanged(''))
        }
        setValue(value)
    }
    const onKeyHandler = (e) => {
        if (e.key === 'Enter') {
            dispatch(searchStringChanged(value.trim().toLowerCase()))
            history.push('/')
        }
    }

    return (
        <div className='row mt-7'>
            <div className='input-field s10'>
                <input
                    id='searchPanel'
                    type='text'
                    value={value}
                    onChange={(e) => onChangeHandler(e)}
                    onKeyDown={(e) => onKeyHandler(e)}
                    className='validate px-1' />
                <label className='active px-1' htmlFor='searchPanel'>
                    <i className='material-icons tiny'>search</i> Поиск товара (для поиска нажмите Enter)
                </label>
            </div>
        </div>
    )
}

export default SearchPanel
