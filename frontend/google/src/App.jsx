import React from "react";
import Searchbar from "./components/SearchBar";

// Import Tailwind directives in your main CSS file (e.g., src/index.css)
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <header className="flex bg-blue-400 justify-center items-center px-4 py-2 bg-gray-800 text-white">
        {/* Logo component (replace with your Logo.js) */}
        <h1>Google</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Searchbar />
      </main>
    </div>
  );
};

export default App;
