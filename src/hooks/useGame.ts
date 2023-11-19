import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { Game } from "./useGames"


const apiclient = new APIClient<Game>('/games');

const useGame = (slug:string) => useQuery({
    queryKey:['game',slug],
    queryFn:()=>apiclient.get(slug),

})

export default useGame