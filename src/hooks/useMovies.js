import {useMemo} from "react";

export const useSortedMovies = (movies, sortGenres, sortCountries) => {
    const sortedMovies = useMemo(() => {
        let result = [...movies];

        if (sortGenres) {
            result = result.filter(movie => {
                return movie['genres'].some(movieGenre => movieGenre['genre'].toLowerCase() === sortGenres.toLowerCase());
            });
        }

        if (sortCountries) {
            result = result.filter(movie => {
                return movie['countries'].some(movieCountry => movieCountry['country'].toLowerCase() === sortCountries.toLowerCase());
            });
        }

        return result;
    }, [sortGenres, sortCountries, movies]);

    return sortedMovies;
};
export const useMovies = (movies,query,sortGenres,sortCountries) => {
    const sortedMovies = useSortedMovies(movies,sortGenres,sortCountries)
    const sortedAndFilteredMovies = useMemo(() => {
        return sortedMovies.filter(movie => movie['nameRu'].toLowerCase().includes(query.toLowerCase()))
    },[query,sortedMovies])
    return sortedAndFilteredMovies
}