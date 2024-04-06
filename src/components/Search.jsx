import React from "react";

const Search = ({ isloading, val, setVal, handleclick }) => {
  return (
    <div className="mx-52">
      <input
        type="text"
        placeholder="Tejas-0612"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="text-black"
      />
      <button
        className="bg-black px-4"
        onClick={handleclick}
        disabled={isloading}
      >
        submit
      </button>
    </div>
  );
};

export default Search;
