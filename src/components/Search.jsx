import React from "react";
import { CustomHook } from "../Context/ContextProvider";
const search = () => {
  const { query, setQuery, isError } = CustomHook();
  return (
    <>
      <section className="search-section">
        <h2>search move</h2>
        <form action="" onSubmit={e => e.preventDefault}>
          <div>
            <input
              type="text"
              placeholder="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
        </form>

        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default search;
