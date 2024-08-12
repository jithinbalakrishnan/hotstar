import { useEffect, useState } from "react";
import { IMG_BASE_URL, MOVIE_LIST_URL } from "../../constants/constant";

import "./Slider.css";

const Slider = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  useEffect(() => {
    fetch(MOVIE_LIST_URL)
      .then((res) => res.json())
      .then((data) => {
        let list = data.results ? data.results : [];
        let images = list.map((i) => i.backdrop_path);
        setSliderImages(images);
        console.log(images);
      });
  }, []);

  const handleRightClick = () => {
    let index = sliderIndex === sliderImages.length - 1 ? 0 : sliderIndex;
    setSliderIndex(index + 1);
  };

  const handleLeftClick = () => {
    let index = sliderIndex === 0 ? sliderImages.length - 1 : sliderIndex;
    setSliderIndex(index - 1);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <p onClick={handleLeftClick}>Left</p>
        <img src={IMG_BASE_URL + sliderImages[sliderIndex]}></img>
        <p onClick={handleRightClick}>Right</p>
      </div>
    </div>
  );
};
export default Slider;
