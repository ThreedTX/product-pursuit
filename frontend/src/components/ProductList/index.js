
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);



  let key = 0;

  return (
    <div>
      <ul>
        {Object.values(products).map(product => {
          return (
            <li key={key++}>
              {product}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default ProductList;
