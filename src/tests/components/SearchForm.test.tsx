import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import SearchForm from '../../components/SearchForm'
import KeywordProvider from '../../components/KeywordProvider'

describe('SearchForm', () => {
    const renderForm = (type: 'filter' | 'search') => {
        render(
            <KeywordProvider>
                <SearchForm type={type} />
            </KeywordProvider>
        )

        return { input: screen.getByPlaceholderText(/Search/i) }
    }

    it('should render the input field for searching', () => {
        const { input } = renderForm('search')

        expect(input).toBeInTheDocument()
    })

    it('properly handles typing a keyword', async () => {
        const { input } = renderForm('search')

        const user = userEvent.setup()
        await user.type(input, 'es{enter}')

        expect(input).toHaveValue('es')
        expect(screen.getByRole('button', { name: 'es' })).toBeInTheDocument()
    })

    it('shows recent searches when used as search', async () => {
        const { input } = renderForm('search')

        const user = userEvent.setup()
        await user.type(input, 'es{enter}')
        await user.clear(input)
        await user.type(input, 'est{enter}')

        expect(screen.getByRole('button', { name: 'es' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'est' })).toBeInTheDocument()
    })
})
