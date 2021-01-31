import { useState } from "react";
import { SearchModal } from '../../context/Modal'
import SearchModalComponent from './SearchModalComponent';
import './Navigation.css';

function SearchBar() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        onClick={() => setShowModal(true)}
        type="search"
        placeholder="Discover your next favorite thing..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="Navigation-searchBar"
      />
      <i className="fas fa-search Navigation-searchBar__icon"></i>
      {showModal && (
        <SearchModal onClose={() => setShowModal(false)}>
          <SearchModalComponent />
        </SearchModal>
      )}
    </>
  )
}

export default SearchBar;
