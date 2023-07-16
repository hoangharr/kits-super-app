import { useState } from "react";
import { Button } from "antd";
import "./App.css";

function UnitConverter() {
  let [sourceMoney, setSourceMoney] = useState("USD");
  let [targetMoney, setTargetMoney] = useState("VND");
  let rate = 23000;
  let [value, setValue] = useState(1);
  let convertedValue;
  if (sourceMoney == "USD" && targetMoney == "VND") {
    convertedValue = value * rate;
  } else if (sourceMoney == "VND" && targetMoney == "USD") {
    convertedValue = value / rate;
  } else if (sourceMoney == targetMoney) {
    convertedValue = value;
  }

  return (
    <div>

      <div className="converter">
        <select
          value={sourceMoney}
          onChange={(e) => setSourceMoney(e.target.value)}
        >
          <option value="VND">VND</option>
          <option value="USD">USD</option>
        </select>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>
        <select
          value={targetMoney}
          onChange={(e) => setTargetMoney(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="VND">VND</option>
        </select>
        <div className="convert-value">{convertedValue.toLocaleString()}</div>
        <Button
          type="primary"
          onClick={() => {
            setSourceMoney(targetMoney);
            setTargetMoney(sourceMoney);
          }}
          style={{
            textAlign: "center",
            margin: "auto",
          }}
        >
          Swap
        </Button>
      </div>
    </div>
  );
}

export default UnitConverter;
