import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers"
import useScreenshots from "../hooks/useScreenshots";

interface props{
    gameId:number
}
const GameScreenshots = ({gameId}:props) => {
    const {data,isLoading,error} = useScreenshots(gameId);
    
    console.log(data);

    if (isLoading) return <Spinner/>
    
    if(error) throw error

    const first = data?.results[0];

    if(!first) return null

  return (
    <SimpleGrid columns={{base:1 , md:2}} spacing={3}>

        {data.results.map(file=><Image key={file.id} src={file.image}/>)}

    </SimpleGrid>
  )
}

export default GameScreenshots