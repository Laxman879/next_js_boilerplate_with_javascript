import {
  decrement,
  increment,
  reset,
  selectCount,
} from "@/reducers/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Counter App</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "24px", color: count === 0 ? "black" : "green" }}>
          Count: {count}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={handleIncrement}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              fontSize: "16px",
            }}
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              fontSize: "16px",
            }}
          >
            Decrement
          </button>
          <button
            onClick={handleReset}
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              fontSize: "16px",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
