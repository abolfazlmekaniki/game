import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers"

interface props{
    gameId:number
}
const GameTrialer = ({gameId}:props) => {
    const {data,isLoading,error} = useTrailers(gameId);
    
    console.log(data);

    if (isLoading) return <Spinner/>
    
    if(error) throw error

    const first = data?.results[0];

    if(!first) return null

  return (
    <video src={first.data[480]} poster={first.preview} controls/>
  )
}

export default GameTrialer