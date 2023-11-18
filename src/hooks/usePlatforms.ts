import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from 'ms'

const apiclient = new APIClient<Platform>('./platforms/lists/parents');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery<any,Error,FetchResponse<Platform>>({
  queryKey:['platforms'],
  queryFn:()=>apiclient.getAll,
  staleTime:ms('24h'),
  initialData:platforms 
});

export default usePlatforms;
