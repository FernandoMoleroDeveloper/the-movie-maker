import "./MovieDetail.scss";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { roundedToFixed } from "../../../utils/utils";
import CrewItem from "../../../components/CrewItem/CrewItem";

const MovieDetail = () => {
  const { id } = useParams(":id");
  const { type } = useParams(":type");
  const API_URL_DETAIL = process.env.REACT_APP_API_URL + "/" + type + "/" + id + "?api_key=" + process.env.REACT_APP_API_KEY;
  const [itemData] = useFetch(API_URL_DETAIL);
  const porcentVote = roundedToFixed(itemData?.vote_average) * 10 + "%";

  return (
    <div className="movie-detail">
      <div className="movie-detail__box-1">
        <img className="movie-detail__img" src={`https://image.tmdb.org/t/p/w440_and_h660_face/${itemData?.poster_path}`} />
      </div>
      <div className="movie-detail__box-2">
        <div className="movie-detail__text">
          <h3 className="movie-detail__title">{itemData?.title || itemData?.name}</h3>
          <div className="movie-detail__main-info">
            <p className="movie-detail__release-date">{itemData?.release_date} | </p>
            <p className="movie-detail__genre">
              {itemData?.genres?.map((item) => (
                <span key={item.id}> {item?.name},</span>
              ))}
            </p>
            <p className="movie-detail__time">| {itemData?.runtime} min</p>
          </div>
          <p className="movie-detail__score">{porcentVote}puntuación del usuario</p>
          <p className="movie-detail__tagline">{itemData?.tagline}</p>
          <p className="movie-detail__subtitle">Vista general</p>
          <p className="movie-detai__description">{itemData?.overview}</p>
        </div>
        <div className="movie-detail__crew">
          <CrewItem></CrewItem>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
