import ProductList from "./ProductList";
import { useEffect, useState, useTransition } from "react";
import { generateProducts } from "./commonFunctions";

const productList = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return productList;
  }
  return productList.filter((product) => product.includes(filterTerm));
}
const Products = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [checkAutomaticBatching, setAuto] = useState('')

  const [isPending, startTransition] = useTransition()

  const filteredProducts = filterProducts(searchValue);

  useEffect(()=> {
    console.log('useEffect')
  },[])

  // useInsertionEffect (()=> {
  //   console.log('useInsertionEffect')
  // },[])

  const handleInputChange = (e) => {
    let value = e.target.value;
    // startTransition(()=> {
    //   setSearchValue(value);
    // })
    setSearchValue(value);
    setAuto(value)
   
  };

  return (
    <>
    {console.log('render : Automatic Batching ')}
      <h5>Products</h5>
      <div>
        <p>Search Products</p>
        <input onChange={handleInputChange}></input>
      </div>
      <div className="p-container">
        {/* <ProductList list={filteredProducts} /> */}
      </div>
    </>
  );
};

export default Products;
