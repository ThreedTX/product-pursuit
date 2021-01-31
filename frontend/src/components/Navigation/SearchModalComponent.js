import { useState } from 'react';

function SearchModalComponent() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="search"
        placeholder="Discover your next favorite thing..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="Navigation-searchBarModal"
      />
      <i className="fas fa-search Navigation-searchBarModal__icon"></i>
    </div>
  )
}

export default SearchModalComponent;
