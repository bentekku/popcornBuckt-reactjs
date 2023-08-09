import React from "react";

const ContentCard = ({ content: { imdbID, Year, Poster, Title, Type } }) => {
  if (Type === "movie" || Type === "series") {
    return (
      <div className="card" key={imdbID}>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
        {/* <div className="image-wrapper"> */}
        {/* </div> */}
        <p className="title">{Title}</p>
        <div className="deets">
          <p className="type">{Type}</p>
          <p className="year">{Year}</p>
        </div>
      </div>
    );
  }
};

export default ContentCard;
