import { type FormEventHandler, type ChangeEventHandler, useState } from 'react'
import { useKeywordContext } from '@/contexts/keywordContext'
import RecentSearches from '@/components/RecentSearches'

export interface SearchInputProps {
    type: 'filter' | 'search'
    recentCount: number
}

const SearchForm = ({ type, recentCount }: SearchInputProps) => {
    const [value, setValue] = useState('')
    const { setKeyword } = useKeywordContext()

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault()
        setKeyword(value)
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
        if (Boolean(event.target.value) === false) {
            setKeyword('')
        }
        if (type === 'filter') {
            setKeyword(event.target.value)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Search/Filter Photos by keyword"
                    required
                />
                <button className="src-only">Search</button>
            </form>
            {type === 'search' ? <RecentSearches max={5} /> : null}
        </>
    )
}

export default SearchForm
