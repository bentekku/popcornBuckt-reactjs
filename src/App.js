import { useEffect, useState } from "react";

import "./App.css";
import linkedIn from "./linkedin-svgrepo-com.svg";
import gitHub from "./github-142-svgrepo-com.svg";
import ContentCard from "./components/ContentCard";

const App = () => {
  // the main api key
  // const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6f0632a1";
  // modified api key for `https` instead of `http` which cant be accessed when hosted to github pages
  const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=6f0632a1";
  const [contents, setContents] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    searchContent("batman");
  }, []);

  const searchContent = async (title) => {
    const COMPLETE_URL = API_URL + "&s=" + title;
    const response = await fetch(COMPLETE_URL);
    const data = await response.json();

    // THE FOLLOWING LOGIC IS SELF-THOUGHT AND SURPRISING ENOUGH IT ISN'T WORKING AS I THOUGHT IT WOULD BE
    data.Search !== [] || data.Search !== undefined ? (
      setContents(data.Search)
    ) : (
      <div className="empty">
        <h2>No such content found</h2>
      </div>
    );
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
            searchText === ""
              ? alert("Please feed in the movie or tvshow name to search")
              : searchContent(searchText);
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
