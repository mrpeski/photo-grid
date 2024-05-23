import { render, screen } from '@testing-library/react'
import Photo from '../components/Photo.tsx'

describe('Photo', () => {
    const item = {
        albumId: 1,
        id: 1,
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    }
    it('should render Photo', () => {
        render(<Photo {...item} />)

        const heading = screen.getByRole('heading')
        const img = screen.getByAltText(item.title)

        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(item.title)

        expect(img).toBeInTheDocument()
    })
})
