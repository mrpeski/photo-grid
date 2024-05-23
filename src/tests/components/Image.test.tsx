import { render, screen, fireEvent } from '@testing-library/react'
import Image from '../../components/Image'

describe('Image', () => {
    it('should handle image error', () => {
        const errorHandler = jest.fn()
        render(<Image url="bad_url" onError={errorHandler} alt="test_image" />)
        fireEvent(screen.getByAltText('test_image'), new Event('error'))
        expect(errorHandler).toHaveBeenCalled()
    })
})
