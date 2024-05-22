import { type ReactElement, useState } from 'react'
import { useKeywordContext } from '@/contexts/keywordContext'
import RecentSearches from '@/components/RecentSearches'

export interface SearchInputProps {
    type: 'filter' | 'search'
    recentCount: number
}

const SearchForm = ({ type, recentCount }: SearchInputProps) => {
    const [value, setValue] = useState('')
    const { setKeyword } = useKeywordContext()

    const handleSubmit = (event) => {
        event.preventDefault()
        setKeyword(value)
    }

    const handleChange = (event) => {
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
                    type="text"
                    value={value}
                    onChange={handleChange}
                    required
                />
                <button>Search</button>
            </form>
            {type === 'search' ? <RecentSearches max={5} /> : null}
        </>
    )
}

export default SearchForm
