import { useState } from "react";

function Todo() {
  let [SearchValue, setSearchValue] = useState("");
  
  function handleEvent(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    const newValue = (document.getElementById("search-bar") as HTMLInputElement).value;
    setSearchValue(newValue);
    console.log(SearchValue);
    setSearchValue("");
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newValue = (document.getElementById("search-bar") as HTMLInputElement).value;
    setSearchValue(newValue);
    // console.log(SearchValue);
    // setSearchValue("");
  }
  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newValue = (document.getElementById("search-bar") as HTMLInputElement).value;
    setSearchValue(newValue);
    console.log(SearchValue);
    setSearchValue("");
  }
  
  return (
    <>
      <form className="search-form" action="get" onChange={handleSearch} onSubmit={handleSearchSubmit}>
        <input
          type="text"
          name="search"
          id="search-bar"
          placeholder="seach here..."
          color="black"
          value={SearchValue}
          
        />
        <div className="s-btn" typeof="submit" onClick={handleEvent}>
          Go!
        </div>
      </form>
    </>
  );
}

export default Todo;
