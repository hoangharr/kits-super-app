import { useState } from "react";
import "./App.css";
import { Space } from "antd";

function Chessboard() {
  let [size, setSize] = useState(8);
  let [oddColor, setOddColor] = useState("#000000");
  let [evenColor, setEvenColor] = useState("#ffffff");
  let [flip, setFlip] = useState("even");

  let board = [];
  let N = size;
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < N; j++) {
      let cell = (i + j) % 2 ? "even" : "odd";
      row.push(cell);
    }
    board.push(row);
  }

  return (
    <Space direction="vertical">
      <div className="chess-board">
        <label>Size:</label>
        <input
          type="text"
          size="30"
          onChange={(e) => {
            setSize(e.target.value);
          }}
          value={size}
        ></input>

        <div className="color">
          <label>Odd Color:</label>
          <input
            type="color"
            onChange={(e) => setOddColor(e.target.value)}
            value={oddColor}
          ></input>
          <label>Even Color:</label>
          <input
            type="color"
            onChange={(e) => setEvenColor(e.target.value)}
            value={evenColor}
          ></input>
        </div>

        <div className="board">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, cellIndex) => (
                <button
                  type="button"
                  onClick={() => setFlip(flip === "even" ? "odd" : "even")}
                  value={flip}
                  key={cellIndex}
                  className={"cell " + cell}
                  style={{
                    backgroundColor: cell === flip ? evenColor : oddColor,
                    border: 0,
                  }}
                ></button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Space>
  );
}

export default Chessboard;
