import React, { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [recieve, setRecieve] = useState([]);
  async function getQuotes() {
    let information = await fetch(
      "https://apex.oracle.com/pls/apex/rupinikatwo/quotes/get"
    );
    let convertedInformation = await information.json();
    setRecieve(convertedInformation.items);
  }
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {recieve.map((element, index) => {
            return (
              <div className="col-md-3 m-auto mt-4">
                <div
                  className="card text-bg-dark mb-3 m-auto"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header">{element.author}</div>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">{element.quotes}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
