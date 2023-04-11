import "./MovieCast.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import CastItem from "../../../components/CastItem/CastItem";

const MovieCast = () => {
  const { id } = useParams(":id");
  const { type } = useParams(":type");
  const API_URL_CAST = process.env.REACT_APP_API_URL + "/" + type + "/" + id + "/credits" + "?api_key=" + process.env.REACT_APP_API_KEY;
  const [personsData] = useFetch(API_URL_CAST);
  return (
    <div className="movie-cast">
      <h3 className="movie-cast__title">Reparto Principal</h3>
      <div className="movie-cast__principal">
        {personsData?.cast?.map((character) => (
          <CastItem key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
