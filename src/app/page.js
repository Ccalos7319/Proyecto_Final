"use client";

import { useEffect, useState } from "react";
import Nav from "../../componentes/Nav";
import Main from "../../componentes/Main";

export default function Home() {
  const KEY = "abaf2c338fc00a0cae5d37159644ba0a";
  const [city,setCity] = useState( "Arequipa");
  const [data, setData] = useState();
  useEffect(() => {
    const promesa = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
    );
    Promise.all([promesa]).then(async (value) => {
      const datos = await value[0].json();
      setData(datos);
    });
    console.log(data);
  }, [city]);
  
  return (
    <div>
      {data && (
        <>
        
        <Nav  grados={data.main.temp} city={data.name} />
        {/* <Main /> */}
        
        </>
        

      )}
      
    </div>
  );
}
