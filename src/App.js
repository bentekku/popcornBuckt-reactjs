import { useEffect, useState } from "react";

import "./App.css";
import linkedIn from "./linkedin-svgrepo-com.svg";
import gitHub from "./github-142-svgrepo-com.svg";
import ContentCard from "./components/ContentCard";

const App = () => {
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6f0632a1";
  const [contents, setContents] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    searchContent("american psycho");
  }, []);

  const searchContent = async (title) => {
    const COMPLETE_URL = API_URL + "&s=" + title;
    const response = await fetch(COMPLETE_URL);
    const data = await response.json();

    setContents(data.Search);
  };

  const movie1 = {
    Title: "American Psycho",
    Year: "2000",
    imdbID: "tt0144084",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  };

  return (
    <div className="container">
      {/* NAV */}
      <header>
        <p>
          popcorn<span>Buckt</span>
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchContent(searchText);
          }}
        >
          <input
            type="search"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </form>
      </header>
      {/* BODY */}
      {contents.length > 0 ? (
        <div className="content-wrapper">
          {contents.map((content) => (
            <ContentCard content={content} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No such content found</h2>
        </div>
      )}
      {/* FOOTER */}
      <footer>
        <a href="https://www.linkedin.com/in/khan-shadab/" target="_blank">
          <img src={linkedIn}></img>
        </a>
        <a href="https://github.com/bentekku" target="_blank">
          <img src={gitHub}></img>
        </a>
      </footer>
    </div>
  );
};

export default App;
