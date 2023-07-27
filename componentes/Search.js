import "./search.css";

function Search({buscar}) {
  return (
    <div className="contenedorPrin">
      <div className="SearchLocation">
        <input type="text" placeholder="Search location"  />
        <button >Search</button>
      </div>

      <div className="option">
        <button  value={"london"} onClick={buscar}>London</button>
        <button value={"Barcelona"} onClick={buscar}>Barcelona</button>
        <button value={"Long Beach"}onClick={buscar}>Long Beach</button>
      </div>
    </div>
  );
}

export default Search;
