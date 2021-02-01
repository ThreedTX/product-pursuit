import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReviewList from '../ReviewList';
import { getProducts } from "../../store/products";
import { getUsers } from "../../store/users";
import one from "./images/one.png"
import two from "./images/two.png"
import three from "./images/three.png"
import four from "./images/four.png"
// import * as sessionActions from "../../store/session";

import './ProductPage.css';

function ProductPage() {
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState(one);

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
    <div className="product-container">
      <ul>
        <h2>
          Didn't really get to style this page...
          </h2>
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
      <div class="container">
        <div className="mainImage">
          <img id="mainImage" src={mainImage} />
        </div>
      </div>
      <div class="row">
        <div className="img-small-div" onClick={() => setMainImage(one)}>
          <img className="img-small" id="picture1" src={one} alt="One" />
        </div>
        <div className="img-small-div pad" onClick={() => setMainImage(two)}>
          <img className="img-small" src={two} alt="Two" />
        </div>
        <div className="img-small-div pad" onClick={() => setMainImage(three)}>
          <img className="img-small" src={three} alt="Three" />
        </div>
        <div className="img-small-div pad" onClick={() => setMainImage(four)}>
          <img className="img-small" src={four} alt="Four" />
        </div>
      </div>
      <div>
        <ReviewList product={product} />
      </div>
    </div >
  );
}

export default ProductPage;
