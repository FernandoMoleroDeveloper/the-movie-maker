import "./Item.scss";
import { roundedToFixed, generateColor } from "../../utils/utils";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  const porcentVote = roundedToFixed(item?.vote_average) * 10 + "%";
  const colorVote = generateColor(roundedToFixed(item?.vote_average) * 10);
  const type = item.title ? "movie" : "tv";
  return (
    <Link className={`item ${colorVote}`} to={`/items/${item?.id}/${type}`}>
      <div className="item">
        <img className="item__img" src={`https://image.tmdb.org/t/p/w440_and_h660_face/${item?.backdrop_path}`} />
        <p className="item__title">{item?.title}</p>
        <p className="item__date">{item?.release_date}</p>
        <p>{porcentVote}</p>
        <p>{colorVote}</p>
      </div>
    </Link>
  );
};

export default Item;
