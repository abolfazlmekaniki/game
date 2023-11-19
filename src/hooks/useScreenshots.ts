import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Screenshots } from "../entities/Screenshots";




const useScreenshots= (gameId:number)=>{ 
    const apiclient = new APIClient<Screenshots>(`/games/${gameId}/screenshots`);
    
    return useQuery({
        queryKey :['Screenshots',gameId],
        queryFn:apiclient.getAll
    })
}

export default useScreenshots