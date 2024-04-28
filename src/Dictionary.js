import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import WordDefinition from "./WordDefinition";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [wordData, setwordData] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setwordData(response.data);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handlePhotoResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "dfd604f6396ftb7o693bf0062e2334aa";
    let apiKeyPhotos =
      "gz6OM6yLvAAh9eDIfvJNTjBYJG1KitLw3fBIeGNayVnUe660rSGz7p8H";
    let headers = { Authorization: ` ${apiKeyPhotos}` };
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(pexelApiUrl, { headers: headers }).then(handlePhotoResponse);
  }

  return (
    <div className="Dictionary">
      <h4 className="mb-5"> What word do you want to look up?</h4>
      <section>
        <form onSubmit={search}>
          <input
            className="search_txt"
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <input className="btn btn-outline-primary ms-3" type="submit" />
        </form>
      </section>
      <WordDefinition data={wordData} />
      <Photos photos={photos} />
    </div>
  );
}
