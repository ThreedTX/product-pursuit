import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { SearchModal } from '../../context/Modal';
import { getProducts } from "../../store/products";
import { getUsers } from "../../store/users";
import logo_30x30 from './images/logo_30x30.png'
import SearchModal from '../../context/Modal';
import './SearchModalComponent.css';

function SearchModalComponent({ setShowModal }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [matches, setMatches] = useState("");
  // const [showModal, setShowModal] = useState(false);

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

    // const newState = Object.assign({}, state);
    // let matches = Object.assign(products, users);


    setMatches(productMatches);
    console.log(matches)


  };

  const outputSearches = matches => {
    if (matches.length > 0) {

    }
  }

  const closeModal = () => {
    setTimeout(() => {
      setShowModal(false);

    }, 2000);
  };

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
  }, [dispatch]);

  let key = 0;

  return (
    <>
      <div>
        <input
          type="search"
          id="search"
          placeholder="Discover your next favorite thing..."
          value={search}
          onChange={(e) => { searchProductsAndUsers(e.target.value); setSearch(e.target.value) }}
          className="searchBarModal"
        />
        <i className="fas fa-search searchBarModal__icon"></i>
      </div>
      <div >

        <div className="searchBarModal-content">
          {matches && matches.map(product => (
            <li key={key++} className="searchBarModal-matches" >
              <div className="searchBarModal-content__container">
                <img className="logo_30x30 float-left" src={logo_30x30} />
                <div className="float-left searchBarModal-content">
                  <NavLink key={product.id} id={product.id} to={`/products/${product.id}`} className="products-list_NavLink" >
                    <p>{product.name}</p>
                  </NavLink>
                  <p className="products-list__description">{product.description}</p>
                </div>
              </div>
            </li>
          ))}
          {!matches && <p></p>}
        </div>
      </div>
    </>
  )
}

export default SearchModalComponent;
