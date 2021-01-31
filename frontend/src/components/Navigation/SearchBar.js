import { useState } from "react";

function SearchBar() {

  const [search, setSearch] = useState("");

  return (
    <input
      type="search"
      placeholder="Discover your next favorite thing..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar;
