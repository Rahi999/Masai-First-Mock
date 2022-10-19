import React, { useState } from "react";

const SearchPage = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://dog.ceo/api/breed/${text}/images`)
      .then((res) => res.json())
      .then((res) => setImages(res.message));
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search..."
          />
          <button>Search</button>
        </form>

        {images &&
          images.map((e, index) => (
            <div id={new Date()}>
              {" "}
              <img src={e} />
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchPage;
