import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getProducts } from "../../store/products"; /** */
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();

  const productId = Number.parseInt(useParams().productId);
  const product = useSelector(state => state.product[productId]);
  console.log(productId);

  const products = useSelector((state) => Object.values(state.product));
  // const products2323 = useSelector(state => {
  //   return state.pokemon.list.map(pokemonId => state.pokemon[pokemonId]);
  // });;


  /** */
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  let key = 0;

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={key++}>
            <NavLink key={product.id} id={product.id} to={`/products/${product.id}`}>{product.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
