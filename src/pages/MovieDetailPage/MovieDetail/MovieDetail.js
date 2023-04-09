import "./MovieDetail.scss";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { roundedToFixed } from "../../../utils/utils";

const MovieDetail = () => {
  const { id } = useParams(":id");
  const { type } = useParams(":type");
  const API_URL_DETAIL = process.env.REACT_APP_API_URL + "/" + type + "/" + id + "?api_key=" + process.env.REACT_APP_API_KEY;
  const [itemData] = useFetch(API_URL_DETAIL);
  const porcentVote = roundedToFixed(itemData?.vote_average) * 10 + "%";

  return (
    <div className="movie-detail">
      <div>
        <img className="movie-detail__img" src={`${process.env.REACT_APP_IMG}${itemData?.poster_path}`} />
        <h3 className="movie-detail__title">{itemData?.title || itemData?.name}</h3>
        <p className="movie-detail__score">{porcentVote}puntuación del usuario</p>
        <p className="movie-detail__tagline">{itemData?.tagline}</p>
        <p className="movie-detail">Vista general</p>
        <p className="movie-detai__description">{itemData?.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
