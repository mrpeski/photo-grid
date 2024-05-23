const Image = ({ onError, url, alt }) => {
    return <img src={url} loading="lazy" alt={alt} onError={() => onError()} />
}

export default Image
