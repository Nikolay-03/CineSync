import {useMemo} from "react";

export const useSortedMovies = (movies,sort) => {
    const sortedMovies = useMemo(() => {
        if (sort) {
            return movies.filter(movie => {
                return movie['genres'].some(movieGenre => movieGenre['genre'].toLowerCase() === sort.toLowerCase());
            });
        } else {
            return movies

        }
    }, [sort,movies])
    return sortedMovies
}
export const useMovies = (movies,query,sort) => {
    const sortedMovies = useSortedMovies(movies,sort)
    const sortedAndFilteredMovies = useMemo(() => {
        return sortedMovies.filter(movie => movie['nameRu'].toLowerCase().includes(query.toLowerCase()))
    },[query,sortedMovies])
    return sortedAndFilteredMovies
}