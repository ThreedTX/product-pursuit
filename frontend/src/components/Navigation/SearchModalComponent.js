import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from "../../store/products";
import { getUsers } from "../../store/users";

function SearchModalComponent() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const products = useSelector((state) => Object.values(state.product));
  const users = useSelector((state) => Object.values(state.users));
  // console.log(products)

  // const searchText = "";

  //RegEx ^ Matches the first letter, 'gi' g= global i= case insensitive


  const searchProductsAndUsers = async searchText => {

    let productMatches = products.filter(product => {
      const regex = new RegExp(`^${searchText}`, 'gi');
      return product.name.match(regex);
    });

    let userMatches = users.filter(user => {
      const regex = new RegExp(`^${searchText}`, 'gi');
      return user.username.match(regex);
    });

    if (searchText.length === 0) {
      productMatches = [];
      userMatches = [];
    }
    console.log("PRODUCT MATCHES: ", productMatches);
    console.log("USER MATCHES: ", userMatches);

  };

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <div>
        <input
          type="search"
          id="search"
          placeholder="Discover your next favorite thing..."
          value={search}
          onChange={(e) => { searchProductsAndUsers(e.target.value); setSearch(e.target.value) }}
          className="Navigation-searchBarModal"
        />
        <i className="fas fa-search Navigation-searchBarModal__icon"></i>
      </div>

    </>
  )
}

export default SearchModalComponent;
