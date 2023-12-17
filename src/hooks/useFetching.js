import {useState} from "react";

export const useFetching =  (callback) => {
    const [isLoading,setIsLoading] = useState(false)
    const [movieError,setMovieError] = useState('')
    const fetching = async () => {
        try{
            setIsLoading(true)
            await callback()
        }
        catch (e){
            setMovieError(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    return [fetching,isLoading,movieError]
}