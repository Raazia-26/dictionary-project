import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} ...`);
  }

  return (
    <div className="Dictionary">
      <h4 className="mb-5"> What word do you want to look up?</h4>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <input type="submit" />
      </form>
    </div>
  );
}
