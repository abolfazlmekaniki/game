import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1bab40259c3c404abaeaed6a18319164",
  },
});

class APIClient<T>{

  endpoint:string;

  constructor(endpoint:string){
    this.endpoint = endpoint;
  }

  getAll=(config:AxiosRequestConfig)=>{
    return axiosInstance.get<T>(this.endpoint,config)
    .then(res=>res.data);
  }

}

export default  APIClient