interface PhotoProps {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
interface PhotoListProps {
    data: PhotoProps[]
    onNext?: () => Promise
}
interface ImageProps {
    url: string
    alt: string
    onError: () => void
}
