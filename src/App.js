import "./App.css";
import { useState } from "react";
import SlotMachine from "./Components/SlotMachine";
let currentValue;
const listOfMedal = ["🥇", " 🥈", " 🥉"];

const randomMedal = () => {
  let randomNumber = [];
  for (let i = 0; i < 9; i++) {
    randomNumber.push(Math.trunc(Math.random() * 3));
  }
  currentValue = randomNumber;
  return currentValue;
};

function App() {
  const [randomNumber, setrandomNumber] = useState(randomMedal());

  return (
    <>
      <div className="header_design">
        <h1> WELCOME TO SLOT MINI-GAME 🎰</h1>
      </div>
      <div className="slots">
        <SlotMachine
          x={listOfMedal[randomNumber[0]]}
          y={listOfMedal[randomNumber[1]]}
          z={listOfMedal[randomNumber[2]]}
        />

        <SlotMachine
          x={listOfMedal[randomNumber[3]]}
          y={listOfMedal[randomNumber[4]]}
          z={listOfMedal[randomNumber[5]]}
        />

        <SlotMachine
          x={listOfMedal[randomNumber[6]]}
          y={listOfMedal[randomNumber[7]]}
          z={listOfMedal[randomNumber[8]]}
        />
      </div>

      <button
        className="btn-class"
        onClick={() => setrandomNumber(randomMedal())}
      >
        Click To Roll
      </button>

      <p className="foot">
        <marquee>
          <b> Simple Slot~ App by Rojit Dhakal</b>
        </marquee>
      </p>
    </>
  );
}

export default App;
