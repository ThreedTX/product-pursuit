import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
// import ReviewList from '../ReviewList';

import './ProductPage.css';

function ProductPage() {
  // const dispatch = useDispatch();

  const productId = Number.parseInt(useParams().productId);

  const product = useSelector(state => state.product[productId]);
  console.log(product);


  /** */
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);


  let key = 0;

  return (
    <div>
      <ul>
        <li key={key++}>
          Product Id: {product.id}
        </li>
        <li>
          User Id: {product.userId}
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
        {/* <ReviewList /> */}
      </div>
    </div>
  );
}

export default ProductPage;
