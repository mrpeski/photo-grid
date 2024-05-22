import { render, screen } from '@testing-library/react'
import Photo from '../components/Photo.tsx'

describe('Photo', () => {
    it('should render Photo', () => {
        render(<Photo />)
    })
})
