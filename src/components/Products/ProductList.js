import { useDeferredValue } from "react";
import "./products.css";

const ProductList = ({list}) => {
  const deferredValue = useDeferredValue(list)
  return (
    <div className="products-container">
      {deferredValue.map((i) => (
        <div className="p-wrapper" key={i}>
            <p>{i}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
