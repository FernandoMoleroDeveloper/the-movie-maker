import useFetch from "../../hooks/useFetch";
import AvancesItem from "../AvancesItem/AvancesItem";
import "./Avances.scss";

const Avances = () => {
  const API_URL = process.env.REACT_APP_API_URL + "/discover/movie?page=1&release_date.desc&vote_average.gte=5.5&api_key=" + process.env.REACT_APP_API_KEY;
  const [discoverData] = useFetch(API_URL);
  console.log(discoverData);
  return (
    <div className="discover">
      <h3 className="discover__title">Últimos avances</h3>
      {discoverData?.results?.map((item) => (
        <AvancesItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Avances;
