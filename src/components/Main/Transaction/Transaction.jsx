import { useState } from "react";
import "./Transaction.css";
import { useGlobalState } from "../../../context/GlobalState";

const Transaction = () => {
  //description and amount of transaction
  const { addTransaction } = useGlobalState();
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      desc,
      amount: +amount,
    });
  };

  return (
    <div className="Transaction">
      <form className="Transaction-form" onSubmit={onSubmit}>
        <input
          className="Transaction-input"
          type="text"
          placeholder="Enter a description ..."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <input
          className="Transaction-input"
          step="0.01"
          type="number"
          value={amount}
          placeholder="Enter a amount $"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />

        <button className="Form-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="Form-svg"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Transaction;
