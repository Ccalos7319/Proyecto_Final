import "./search.css";

function Search({buscar}) {
  return (
    <div className="contenedorPrin">
      <div className="SearchLocation">
        <input type="text" placeholder="Search location" />
        <button>Search</button>
      </div>

      <div className="option">
        <button  value="london">London</button>
        <button>Barcelona</button>
        <button>Long Beach</button>
      </div>
    </div>
  );
}

export default Search;
