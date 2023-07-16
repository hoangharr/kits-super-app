import "./App.css";
import { Button } from "antd";

function Minesweeper() {
  // declare and assign width, height
  let grid = [];
  // set mineRatio (0.25) -> mineNumber = mineRatio *(width*height)
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      let cell;
      row.push(cell);
      //properties: hasMine, isVisible, hasFlag
    }
    grid.push(row);
  }
  // loop from k = 0 -> mineNumber
  // generate 2 random number (mines): Math.round(Math.random()*height/width % height/width)
  // math.round -> round the decimal number
  // math.random -> get a random decimal number >= 0 and < 1
  // while the cell (mineField[][]) hasMine -> generate 2 number again (mines)

  return (
    <>
      <div className="grid">
        {grid.map((row, rowIdx) => (
          <div key={rowIdx} className="row">
            {row.map((cell, cellIdx) => (
              <Button type="primary" key={cellIdx} className="cell">
                {cell}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Minesweeper;
