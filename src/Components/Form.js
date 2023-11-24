import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [author, setAuthor] = useState("");
  const [quotes, setQuotes] = useState("");
  const navigate = useNavigate();
  function giveInfo() {
    fetch(
      `https://apex.oracle.com/pls/apex/rupinikatwo/quotes/post?author=${author}&quotes=${quotes}`,
      { method: "POST" }
    );
    navigate("/Quotes");
  }
  function authorChange(event) {
    setAuthor(event.target.value);
  }
  function quoteChange(event) {
    setQuotes(event.target.value);
  }
  return (
    <>
      <div className="container bg-dark p-5 my-5 ">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-light "
          >
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={authorChange}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Rupinika"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label text-light"
          >
            Quote
          </label>
          <textarea
            value={quotes}
            onChange={quoteChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
          />
        </div>
        <div className="mb-3 text-center">
          <button
            onClick={giveInfo}
            type="button"
            className="btn btn-outline-success w-75"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
