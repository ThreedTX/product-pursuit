import { useState } from "react";
import { Modal } from '../../context/Modal'
import './Navigation.css';

function SearchBar() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <input
      onClick={() => setShowModal(true)}
      type="search"
      placeholder="Discover your next favorite thing..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="Navigation-searchBar"
    />
  )
}

export default SearchBar;
