import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import ms from 'ms';
import { Genre } from "../entities/Genre";



const apiclient = new APIClient<Genre>('./genres');

const useGenres = () => useQuery<any,Error,FetchResponse<Genre>>({
  queryKey:['genres'],
  queryFn:apiclient.getAll,
  staleTime:ms('24h'),
  initialData:genres
})

export default useGenres;