import { type ReactElement, useState, useEffect } from 'react'
import { useKeywordContext } from '@/contexts/keywordContext'

export interface RecentSearchesProps {
    max: number
}

export function RecentSearches({ max }: RecentSearchesProps): ReactElement {
    const [recentSearches, setRecentS] = useState([])

    const { keyword, setKeyword } = useKeywordContext()

    const saveRecentSearch = (term: string) => {
        setRecentS(() => {
            if (recentSearches.length === max) {
                recentSearches.shift()
            }
            if (term) {
                return recentSearches.concat(term)
            }
        })
    }

    useEffect(() => {
        if (!keyword) return
        saveRecentSearch(keyword)
    }, [keyword])

    console.log(recentSearches)
    return recentSearches.length > 0 ? (
        <section>
            {recentSearches.map((item, index) => (
                <button
                    onClick={() => setKeyword(item === keyword ? '' : item)}
                    key={`${keyword}-${index}`.toString('16')}
                >
                    {item}
                </button>
            ))}
        </section>
    ) : null
}

export default RecentSearches
