import { render, screen } from '@testing-library/react'
import PhotoList from '../components/PhotoList.tsx'
import KeywordProvider from '../components/KeywordProvider.tsx'

describe('Photo', () => {
    it('should render PhotoList', () => {
        render(
            <KeywordProvider>
                <PhotoList />
            </KeywordProvider>
        )
    })
})
