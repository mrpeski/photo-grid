import { type ReactElement, useState, useRef } from 'react'

function Photo({ url, thumbnailUrl, title }: PhotoProps): ReactElement {
    const [imgUrl, setImgUrl] = useState(url)
    const retryCount = useRef(3)
    return (
        <article>
            <img
                src={imgUrl}
                loading="lazy"
                alt={title}
                onError={() => {
                    if (retryCount.current > 0) {
                        setImgUrl(`${url}?retry=${retryCount.current % 3}`)
                        retryCount.current -= 1
                        console.log('Retrying image...')
                    }
                }}
            />
            <h4 className="title">{title}</h4>
        </article>
    )
}

export default Photo
