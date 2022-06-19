import React from "react";

const SlotMachine = ({x,y,z}) => {
  // const { x, y, z } = props; 
  if (x === y && y === z) {
    return (
      <>
        {" "}
        <div className="slot_inner">
          <h1 className="emoji">
            {x}
            {y}
            {z}
          </h1>
          <p className="success message"> Congratulation,You got a Match  ❤️.</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <p className="message">match Failed .</p>
        </div>
      </>
    );
  }
};

export default SlotMachine;
