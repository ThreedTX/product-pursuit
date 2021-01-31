import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ReviewList from '../ReviewList';
import { getProducts } from "../../store/products";
import { getUsers } from "../../store/users";
// import * as sessionActions from "../../store/session";

import './ProductPage.css';

function ProductPage() {
  const dispatch = useDispatch();

  const productId = Number.parseInt(useParams().productId);

  const product = useSelector(state => state.product[productId]);
  const productCreator = useSelector(({ users }) =>
    Object.values(users).filter(
      (user) => user.id === product.userId
    )
  );


  /** */
  useEffect(() => {
    // dispatch(sessionActions.restoreUser());
    dispatch(getProducts());
    dispatch(getUsers());
  }, [dispatch]);


  let key = 0;

  return (
    <div>
      <ul>
        <li key={key++}>
          Product Id: {product.id}
        </li>
        <li>
          Creator: {productCreator.length ? productCreator[0].username : product.userId}
        </li>
        <li>
          Name: {product.name}
        </li>
        <li>
          Description:{product.description}
        </li>
        <li>
          Created At: {product.createdAt}
        </li>
      </ul>
      <div>
        <ReviewList product={product} />
      </div>
    </div>
  );
}

export default ProductPage;
