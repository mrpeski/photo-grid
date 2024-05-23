import { useState, useCallback } from 'react'
import usePhotos, { fetchPhotos } from '@/hooks/usePhotos'
import PhotoList from '@/components/PhotoList'
import SearchForm from '@/components/SearchForm'
import KeywordProvider from '@/components/KeywordProvider'

const PhotosContainer = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading } = usePhotos(page)

    const loadMore = useCallback(async () => fetchPhotos(page + 1), [page])

    if (isLoading) return 'Loading...'
    return (
        <KeywordProvider>
            <SearchForm recentCount={5} type="search" />
            <PhotoList data={data} onNext={loadMore} />
        </KeywordProvider>
    )
}

export default PhotosContainer
