import { IMG_BASE_URL } from "../../constants/constant";
import "./cards.css";

const Cards = (props) => {
  const { list } = props;
  return (
    <div  data-testid="card-test-container" className="card-container">
      {list.map((item) => (
        <div data-testid="card" className="card" key={item.id}>
          <img src={IMG_BASE_URL + item.backdrop_path}></img>
          <p>{item.title}</p>
          <p>{item.vote_average}</p>
        </div>
      ))}
    </div>
  );
};
export default Cards;
