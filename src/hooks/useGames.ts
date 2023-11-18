import { useInfiniteQuery} from "@tanstack/react-query";
import ms from 'ms'
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../store";

const apiclient= new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () =>{
  const gameQuery = useGameQueryStore(s=>s.gameQuery);
  return useInfiniteQuery<any,Error,FetchResponse<Game>>({
    queryKey:['games',gameQuery],
    queryFn:({pageParam})=>{
      return apiclient.getAll({
        params: {
          genres: gameQuery.genreID,
          parent_platforms: gameQuery.platformID,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page:pageParam
        },
      })  
    },
    getNextPageParam:(lastpage,allPages)=>{
      return lastpage.next? allPages.length+1:undefined;
    },
    staleTime:ms('24h')
  })
}
  


export default useGames;
