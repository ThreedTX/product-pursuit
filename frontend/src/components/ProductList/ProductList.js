import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import productReducer from "../../store/product"; /** */
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();

  const products = useSelector((state) => Object.values(state.product));
  // const products2323 = useSelector(state => {
  //   return state.pokemon.list.map(pokemonId => state.pokemon[pokemonId]);
  // });;


  /** */
  // useEffect(() => {
  //   dispatch(productReducer());
  // }, [dispatch]);


  let key = 0;
  console.log(products);
  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={key++}>
            <NavLink key={product.id} id={product.id} to={`/products/${product.id}`}>{product.name}</NavLink>
          </li>
        ))}
      </ul>
      <Route path='/products/:productId'>

      </Route>
    </div>
  );
}

export default ProductList;
