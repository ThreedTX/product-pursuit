import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProducts } from "../../store/products";
// import { getReviews } from "../../store/review";
import logo_80x80 from './images/logo_80x80.png';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();

  const products = useSelector((state) => Object.values(state.product));

  let rng = Math.floor(Math.random() * 3) + 1;

  /** */
  useEffect(() => {
    dispatch(getProducts());
    // dispatch(getReviews());
  }, [dispatch]);


  let key = 0;

  return (
    <div className="products-list__container">
      <ul className="products-list__li-container">
        <p className="products-list__title">Products</p>
        {products.map(product => (
          <li key={key++} className="products-list">
            <div className="products-list__content-container">
              <img className="logo_80x80 float-left" src={logo_80x80} />
              <div className="float-left products-list__content">
                <NavLink key={product.id} id={product.id} to={`/products/${product.id}`} className="products-list_NavLink" >{product.name}</NavLink>
                <p className="products-list__description">{product.description}</p>
                <div className="products-list__comment">
                  <i class="fas fa-comment"><p className="prodcuts-list__comment--count">{rng}</p></i>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div >
  );
}

export default ProductList;
