import React, {useState, useEffect} from 'react';
import axios from "axios";
import CowForm from "./CowForm.jsx"
import CowList from "./CowList.jsx"
import CurrentCow from "./CurrentCow.jsx"

const App = () => {
  const [cows, setCows] = useState([]);
  const [currentCow, setCurrentCow] = useState(null);

  useEffect(() => {
    axios.get("/api/cows")
    .then((response) => {
      setCows(response.data);
    });
  }, []);

  const deleteCow = (id) => {
    axios.delete(`/api/cows:${id}`)
    .then(() => {
      const newCows = cows.filter(cow => cow.id !== id);
      setCows(newCows);
      setCurrentCow(null);
    });
  }

  return (
    <div>
      <CowForm />
      {currentCow != null ?
      <CurrentCow cow={currentCow} /> :
      ""
      }
      <CowList cows={cows} setCurrentCow={setCurrentCow} deleteCow={deleteCow}/>
    </div>
  );
}

export default App;
