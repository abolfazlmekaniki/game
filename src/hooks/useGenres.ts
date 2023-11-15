import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";



const apiclient = new APIClient<Genre>('./genres');

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey:['genres'],
  queryFn:apiclient.getAll,
  staleTime:24*60*60*1000,
  initialData:genres
})

export default useGenres;