import axios from "axios";

export default class MovieService{
    static async getTop(page){
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${page}`,{
            headers: {
                'X-API-KEY': '54b264aa-ccf6-44fc-a0fb-45cc974ab08e',
                'Content-Type': 'application/json',
            },

        })
        return response
    }
    static async getMovieInfo(id){
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,{
            headers:{
                'X-API-KEY': '54b264aa-ccf6-44fc-a0fb-45cc974ab08e',
                'Content-Type': 'application/json',
            },
        })
        return response
    }
    static async getMovieImg(id){
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=WALLPAPER&page=1`,{
            headers: {
                'X-API-KEY': '54b264aa-ccf6-44fc-a0fb-45cc974ab08e',
                'Content-Type': 'application/json',
            }
        })
        return response
    }
}