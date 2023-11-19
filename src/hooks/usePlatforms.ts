import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from 'ms'
import  Platform  from "../entities/Platform";

const apiclient = new APIClient<Platform>('./platforms/lists/parents');

const usePlatforms = () => useQuery<any,Error,FetchResponse<Platform>>({
  queryKey:['platforms'],
  queryFn:()=>apiclient.getAll,
  staleTime:ms('24h'),
  initialData:platforms 
});

export default usePlatforms;
