import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import  Trailer  from "../entities/Trailers";




const useTrailers= (gameId:number)=>{ 
    const apiclient = new APIClient<Trailer>(`/games/${gameId}/movies`);
    
    return useQuery({
        queryKey :['trailers',gameId],
        queryFn:apiclient.getAll
    })
}

export default useTrailers