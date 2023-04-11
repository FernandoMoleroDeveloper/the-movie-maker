import "./CrewItem.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { usePagination } from "../../hooks/usePaginator";

const CrewItem = () => {
  const { id } = useParams(":id");
  const { type } = useParams(":type");
  const API_URL_CAST = process.env.REACT_APP_API_URL + "/" + type + "/" + id + "/credits" + "?api_key=" + process.env.REACT_APP_API_KEY;
  const [personsData] = useFetch(API_URL_CAST);
  console.log(personsData);
  const [firstCrew, showMorePeople, theAreMore] = usePagination(personsData?.crew);

  return (
    <div className="crew-item">
      <div>
        {firstCrew?.map((person) => (
          <div key={person.id}>
            <p className="crew-item__name">{person?.name}</p>
            <p className="crew-item__character">{person?.job}</p>
          </div>
        ))}
      </div>
      {theAreMore && (
        <button onClick={() => showMorePeople()} className="btn crew__show-more">
          + MORE
        </button>
      )}
    </div>
  );
};
export default CrewItem;
