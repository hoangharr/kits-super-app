import { useEffect, useState } from "react";
import "./App.css";
import { Button, Space } from "antd";
import { PlayCircleFilled, PauseCircleFilled } from "@ant-design/icons";

function Pomodoro() {
  // let [currentTime, setCurrentTime] = useState(new Date());
  let [status, setStatus] = useState("Working");
  let [workingTime, setWorkingTime] = useState(15);
  let [restingTime, setRestingTime] = useState(5);
  let [elapsedTime, setElapsedTime] = useState(workingTime);
  let [show, setShow] = useState(false);
  let [pause, setPause] = useState(false);

  useEffect(() => {
    let timer;
    if (!pause) {
      timer = setTimeout(() => {
        // setCurrentTime(new Date());
        if (elapsedTime > 1) {
          setElapsedTime(elapsedTime - 1);
        } else {
          status == "Working"
            ? (setStatus("Resting"), setElapsedTime(restingTime))
            : (setStatus("Working"), setElapsedTime(workingTime));
        }
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [status, elapsedTime, restingTime, workingTime, pause]);

  return (
    <div className="Timer">
      <div
        className="Pomodoro"
        style={{
          backgroundColor: status == "Working" ? "darkred" : "darkblue",
        }}
      >
        {/* {currentTime.toLocaleTimeString()} */}
        <div className="status">{status}</div>
        <div>{elapsedTime}</div>
        <Button
          type="primary"
          shape="circle"
          style={{
            height: "52px",
            width: "52px",
            backgroundColor: "#fc94af",
            display: "block",
            margin: "auto",
            marginTop: "20px",
          }}
          icon={
            pause ? (
              <PlayCircleFilled
                style={{
                  fontSize: "30px",
                }}
              />
            ) : (
              <PauseCircleFilled
                style={{
                  fontSize: "30px",
                }}
              />
            )
          }
          onClick={() => {
            setPause(!pause);
            if (pause == true) {
              setElapsedTime(elapsedTime - 1);
            }
          }}
        ></Button>
        <Space>
          <Button
            onClick={() => {
              status == "Working"
                ? setElapsedTime(workingTime)
                : setElapsedTime(restingTime);
            }}
          >
            Reset
          </Button>

          <Button
            onClick={() => {
              setShow(!show);
            }}
          >
            Settings
          </Button>
        </Space>
        {show == true ? (
          <div>
            <div>
              <label>Working time:</label>
              <input
                type="number"
                value={workingTime}
                onChange={(e) => {
                  setWorkingTime(e.target.value);
                  if (!e.target.value) {
                    setWorkingTime(15);
                  }
                }}
              ></input>
            </div>
            <div>
              <label>Resting time:</label>
              <input
                type="number"
                value={restingTime}
                onChange={(e) => {
                  setRestingTime(e.target.value);
                  if (!e.target.value) {
                    setRestingTime(5);
                  }
                }}
              ></input>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Pomodoro;
