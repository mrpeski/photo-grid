import { render, screen } from '@testing-library/react'
import PhotoList from '../../components/PhotoList'
import KeywordProvider from '../../components/KeywordProvider'

beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
})

describe('PhotoList', () => {
    it('should render no photos when list is empty', () => {
        const { container } = render(
            <KeywordProvider>
                <PhotoList data={[]} />
            </KeywordProvider>
        )

        expect(container).toBeEmptyDOMElement()
    })

    it('should render a list of photos', () => {
        const photos: PhotoProps[] = [
            {
                albumId: 1,
                id: 3,
                title: 'officia porro iure quia iusto qui ipsa ut modi',
                url: 'https://via.placeholder.com/600/24f355',
                thumbnailUrl: 'https://via.placeholder.com/150/24f355',
            },
            {
                albumId: 1,
                id: 4,
                title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
                url: 'https://via.placeholder.com/600/d32776',
                thumbnailUrl: 'https://via.placeholder.com/150/d32776',
            },
        ]
        render(
            <KeywordProvider>
                <PhotoList data={photos} />
            </KeywordProvider>
        )

        const images = screen.getAllByRole('img')

        expect(images).toHaveLength(2)
        photos.forEach((photo, index) => {
            expect(images[index]).toHaveAttribute('src', photo.url)
        })
    })
})
