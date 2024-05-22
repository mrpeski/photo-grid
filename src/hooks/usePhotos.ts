import useSWR from 'swr'

const API_URL = 'https://jsonplaceholder.typicode.com/photos'

export const fetchPhotos = async (albumId?: number) => {
    const reqUrl = `${API_URL}${albumId ? `?albumId=${albumId}` : ''}`
    const response = await fetch(reqUrl)
    if (!response.ok) throw new Error('Something went wrong')
    const jsonData = await response.json()
    return jsonData
}

const usePhotos = (albumId?: number) => {
    return useSWR('photos', () => fetchPhotos(albumId))
}

export default usePhotos
