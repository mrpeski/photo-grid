import { type ReactElement, useState, useEffect } from 'react'
import { useKeywordContext } from '@/contexts/keywordContext'

export interface RecentSearchesProps {
    max: number
}

export function RecentSearches({ max }: RecentSearchesProps) {
    const [recentSearches, setRecentS] = useState<string[]>([])

    const { keyword, setKeyword } = useKeywordContext()

    const saveRecentSearch = (term: string) => {
        setRecentS(() => {
            if (recentSearches.length === max) {
                recentSearches.shift()
            }
            if (term && !recentSearches.includes(term)) {
                return recentSearches.concat(term)
            }
            return recentSearches
        })
    }

    useEffect(() => {
        if (!keyword) return
        saveRecentSearch(keyword)
    }, [keyword])

    return recentSearches.length > 0 ? (
        <>
            <h4 className="recent-title src-only">Recent Searches</h4>
            <section className="recent-searches">
                {recentSearches.map((item, index) => (
                    <button
                        className={`term ${item === keyword ? 'active' : ''}`}
                        onClick={() => setKeyword(item === keyword ? '' : item)}
                        key={`${keyword}-${index}`.toString('16')}
                    >
                        {item}
                    </button>
                ))}
            </section>
        </>
    ) : null
}

export default RecentSearches
