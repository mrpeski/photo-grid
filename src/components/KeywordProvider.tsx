import { type ReactElement, useState, useMemo } from 'react'
import { Context as KeywordContext } from '@/contexts/keywordContext'

export interface KeywordProviderProps {}

const KeywordProvider = (props: KeywordProviderProps) => {
    const [keyword, setKeyword] = useState('')

    const contextValue = useMemo(
        () => ({
            keyword,
            setKeyword,
        }),
        [keyword]
    )
    return (
        <KeywordContext.Provider value={contextValue}>
            {props.children}
        </KeywordContext.Provider>
    )
}

export default KeywordProvider
