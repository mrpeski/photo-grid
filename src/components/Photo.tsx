import { type ReactElement, useState, useRef } from 'react'
import Image from '@/components/Image'

function Photo({ url, title }: PhotoProps): ReactElement {
    const [imgUrl, setImgUrl] = useState(url)
    const retryCount = useRef(3)

    const handleImgError = () => {
        if (retryCount.current > 0) {
            setImgUrl(`${url}?retry=${retryCount.current % 3}`)
            retryCount.current -= 1
            console.log('Retrying image...')
        }
    }
    return (
        <article className="card">
            <Image url={imgUrl} alt={title} onError={handleImgError} />
            <h4 className="title">{title}</h4>
        </article>
    )
}

export default Photo
