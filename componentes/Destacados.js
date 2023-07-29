import "./destacados.css";

function Destacados() {
  return (
    <>
      <div className="contenedor-destacadosHoy">
        <p>Today’s Hightlights</p>
        <div className="card-WindStatus">
          <p>Wind status</p>
          <div className="mph">
            <p>7</p>
            <p>mph</p>
          </div>
          
          <div className="navigation">
            <div className="imagen-navigation">
               <img src="./navigation.png" alt="navigation" /> 
            </div>
            <p>WSW</p>
          </div>
        </div>

        <div className="humidity">
            <p>Humidity</p>
            <p>84%</p>
            <div>
    
            </div>
        </div>

        <div className="visibility">
            <p>Visibility</p>
            <p>6,4 miles</p>
        </div>

        <div>
            <p>Air Pressure</p>
            <p>998 mb</p>
        </div>
      </div>
    </>
  );
}

export default Destacados;
