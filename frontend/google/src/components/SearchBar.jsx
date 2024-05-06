import React, { useState } from "react";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate search API call with searchTerm
    console.log(`Searching for: ${searchTerm}`);
    // Update component state with mock search results (replace with actual API call)
    // ...
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full rounded-md bg-gray-100 px-3 py-2"
    >
      <input
        type="search"
        placeholder="Search..."
        className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
