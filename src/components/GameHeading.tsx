import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import usePlatform from '../hooks/usePlatform'
import useGenre from '../hooks/useGenre'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {

  const genre = useGenre(gameQuery.genreID);
  const platform = usePlatform(gameQuery.platformID)

  const heading = `${platform?.name || ''} ${genre?.nanme || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading