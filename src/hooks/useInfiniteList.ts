import { useEffect, useState } from 'react'

const useInfiniteList = <T>(
    list: T[],
    next?: () => Promise<T[]>,
    pages = 5
) => {
    const [lastElement, setLastElement] = useState<Element | null>(null)
    const [currentPage, setCurrentPage] = useState(1)

    const [items, setItems] = useState(list)

    useEffect(() => {
        let observer: IntersectionObserver | null = null
        if (lastElement) {
            observer = new IntersectionObserver(
                (entries) => {
                    const first = entries[0]
                    if (first.isIntersecting) {
                        if (currentPage <= pages) {
                            if (!next) return
                            next().then((newItems: Array<T>) => {
                                setCurrentPage(currentPage + 1)
                                setItems(items.concat(newItems))
                            })
                        }
                        observer?.unobserve(lastElement)
                    }
                },
                {
                    root: null,
                    rootMargin: '0px',
                }
            )
        }

        if (observer && lastElement) {
            observer.observe(lastElement)
        }
        return () => {
            if (observer && lastElement) {
                observer.unobserve(lastElement)
            }
        }
    }, [lastElement, currentPage, items, next, pages])

    return { items, currentPage, pages, setLastElement }
}

export default useInfiniteList
