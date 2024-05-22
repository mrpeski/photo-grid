import Photo from './Photo'
import useInfiniteList from '@/hooks/useInfiniteList'
import { useKeywordContext } from '@/contexts/keywordContext'

const PhotoList = ({ data, onNext }: PhotoListProps) => {
    const {
        items = [],
        currentPage,
        pages,
        setLastElement,
    } = useInfiniteList<PhotoProps>(data, onNext)

    const { keyword } = useKeywordContext()
    return (
        <div className="container">
            {items
                .filter((itm: PhotoProps) => itm.title.includes(keyword))
                .map((item: PhotoProps, index) =>
                    index === items.length - 1 && currentPage <= pages ? (
                        <div ref={setLastElement}>
                            <Photo {...item} key={item.id} />
                        </div>
                    ) : (
                        <Photo {...item} key={item.id} />
                    )
                )}
        </div>
    )
}

export default PhotoList
