import React, { useState } from "react";

const App = () => {
  const data = [1, 5, 7, 12, 44, 59, 100, 121, 140, 600, 680, 699, 801];
  const [curVal, setCurVal] = useState(0);

  const handleGetVal = () => {
    if (curVal < 1) {
      alert(1);
    } else if (curVal > 801) {
      alert(801);
    } else {
      let compareVal = curVal - data[0];

      for (let i = 1; i < data.length; i++) {
        if (curVal - data[i] < 0) {
          if (Math.abs(curVal - data[i]) < compareVal) {
            alert(data[i]);
            break;
          } else {
            alert(data[i - 1]);
            break;
          }
        } else {
          if (curVal - data[i] < compareVal) {
            compareVal = curVal - data[i];
          }
        }
      }
    }
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setCurVal(parseInt(e.currentTarget.value))}
      ></input>
      <button onClick={handleGetVal}>Click</button>
    </div>
  );
};
export default App;
