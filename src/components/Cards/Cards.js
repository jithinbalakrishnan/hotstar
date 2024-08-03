import { IMG_BASE_URL } from "../../constants/constant";
import "./cards.css";

const Cards = (props) => {
  const { list } = props;
  return (
    <div  data-testid="card-test-container" className="card-container">
      {list.map((item) => (
        <div data-testid="card" className="card" key={item.id}>
          <div className="image-wrapper">
          <img src={IMG_BASE_URL + item.backdrop_path}></img>
          <div className="circle-wrapper">{item.vote_average.toFixed(1)}</div>
          </div>
          <p className="title">{item.title || item.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Cards;
