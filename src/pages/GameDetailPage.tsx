import { useParams } from "react-router-dom"

const GameDetailPage = () => {

    const params = useParams();

  return (
    <div>GameDetailPage for {params.id}</div>
  )
}

export default GameDetailPage