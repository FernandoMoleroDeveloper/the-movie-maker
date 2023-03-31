import "./Film.scss";

const Film = ({ movie }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie?.backdrop_path}`} />
      <p>{movie?.title}</p>
      <p>{movie?.release_date}</p>
    </div>
  );
};

export default Film;
