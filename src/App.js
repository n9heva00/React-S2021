import './App.css';
import { useState } from 'react';
import FillOptions from './FillOptions';

function App() {
  const [weight,setWeight] = useState(0);
  const [bottles,setBottles] = useState(0);
  const [time,setTime] = useState(0);
  const [gender,setGender] = useState(0.7);
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState(0);

  function calculate(e) {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const grams_left = grams - (burning * time);
    setBloodAlcoholLevel(grams_left / (weight * gender));

    if ((grams_left / (weight * gender)) < 0) {
      setBloodAlcoholLevel(0);
    }
  }
  return (
    <div id="container">
      <h3>Blood alcohol level calculator</h3>
      <form onSubmit={calculate}>
        <div>
          <label id="custom">Weight(kg):</label>
          <input type="number" min='0'
          
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label id="custom">Bottles:</label>
          <select value={bottles} onChange={e => setBottles(e.target.value)}>
            <FillOptions />
          </select>
        </div>
        <div>
          <label id="custom">Time:</label>
          <select value={time} onChange={e => setTime(e.target.value)}>
            <FillOptions />
          </select>
        </div>
        <div>
          <label id="custom">Gender:</label>
          <label><input style={{marginRight: "5px"}} type="radio" name="gender" value="0.7" defaultChecked onChange={e => setGender(e.target.value)}/>Male</label>
          <label><input style={{marginRight: "5px", marginLeft: "10px"}} type="radio" name="gender" value="0.6" onChange={e => setGender(e.target.value)}/>Female</label>
        </div>
        <div>
          <h4>Blood alcohol level: <output>{bloodAlcoholLevel.toFixed(2)}</output></h4>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
