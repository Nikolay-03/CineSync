import axios from "axios";

export default class MovieService{
    static async getTop(page){
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${page}`,{
            headers: {
                'X-API-KEY': '9ce7a5a1-7930-4505-952e-9186ae9ca206',
                'Content-Type': 'application/json',
            }
        })
        return response
    }

}