import "./Tendencias.scss";
import useFetch from "../../hooks/useFetch";
import Film from "../Film/Film";

const API_URL = `${process.env.REACT_APP_API_URL}/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`;

const Tendencias = () => {
  const [movieData] = useFetch(API_URL);
  console.log(movieData);
  return (
    <div className="tendencias">
      <div>
        <p>Tendencias</p>
        <button className="tendencias__btn-time">Hoy</button>
        <button className="tendencias__btn-time">Esta semana</button>
      </div>
      <div className="tendencias__films">
        {movieData?.results?.map((movie) => (
          <Film key={movie.id} movie={movie}></Film>
        ))}
      </div>
    </div>
  );
};

export default Tendencias;
