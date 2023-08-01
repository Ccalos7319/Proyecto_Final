import "./destacados.css";

function Destacados({ presure, visibility, humidity, speed }) {

 
const valorRedondeado = (visibility / 1000).toFixed(1); // "5.0"
const valorNumerico = parseFloat(valorRedondeado); // 5.0 (número)

  return (
    <>
    <p className="titulo">Today’s Hightlights</p>
      <div className="contenedor-destacadosHoy">
        
        <div id="card1" className="card-WindStatus">
          <p>Wind status</p>
          <div className="mph">
            <p>{speed}</p>
            <p>mph</p>
          </div>

          <div className="navigation">
            <div className="imagen-navigation">
              <img src="./navigation.png" alt="navigation" />
            </div>
            <p>WSW</p>
          </div>
        </div>

        <div id="card2" className="humidity">
          <p>Humidity</p>
          <div className="porhumedad">
            <p>{humidity}</p>
            <p>%</p>
          </div>
          <div className="rangoPorciento">
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>

          <div className="barra">
            <div
              style={{
                height: "100%",
                background: "#FFEC65",
                width: `${humidity}%`,
              }}
            ></div>
          </div>
          
        </div>

        <div id="card3" className="visibility">
          <p>Visibility</p>
          <div className="miles">
            <p>{valorNumerico} </p>
            <p>miles</p>
          </div>
        </div>

        <div id="card4" className="air-Presure ">
          <p>Air Pressure</p>
          <div className="mb">
            <p>{presure}</p>
            <p>mb</p>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default Destacados;
