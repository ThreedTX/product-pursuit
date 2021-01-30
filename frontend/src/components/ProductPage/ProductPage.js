import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ReviewList from '../ReviewList';
import { getProducts } from "../../store/products";

import './ProductPage.css';

function ProductPage() {
  const dispatch = useDispatch();

  const productId = Number.parseInt(useParams().productId);

  const product = useSelector(state => state.product[productId]);
  const creator = useSelector((state) => state.users[product.userId]);
  console.log(creator)
  // console.log(product);


  /** */
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  let key = 0;

  return (
    <div>
      <ul>
        <li key={key++}>
          Product Id: {product.id}
        </li>
        <li>
          Creator: {creator.username}
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
