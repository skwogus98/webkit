import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/car").then((response) => {
      setCarList(response["data"]);
    });
  }, []);

  return (
    <div>
      <h1>길동이의 홈페이지</h1>
      <ul>
        {
          carList.map((car)=>{
            return <li key={car.no}>{car.name} {car.company} {car.year}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;