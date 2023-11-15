import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ms from 'ms'
import { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiclient= new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>,Error>({
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


export default useGames;
