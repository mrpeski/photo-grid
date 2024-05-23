import { createContext, useContext } from 'react'

export interface KeywordContext {
    keyword: string
    setKeyword: (arg: string) => void
}

export const Context = createContext<KeywordContext | null>(null)

export function useKeywordContext(): KeywordContext {
    const value = useContext(Context)
    if (!value) {
        throw new Error('KeywordContext must be initialized.')
    }

    return value
}
