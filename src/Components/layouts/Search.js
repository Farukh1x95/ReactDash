import React, { useState, useContext } from "react";
import GithubContext from "../context/github/githubContext";
import alertContext from "../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const AlertContext = useContext(alertContext);

  const [search, setText] = useState("");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (search === "") {
      AlertContext.setAlert("Please Type Something", "danger");
    } else {
      githubContext.SearchUser(search);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group row">
          <div className="col-sm-10">
            <input
              name="search"
              type="text"
              className="form-control form-control-lg"
              placeholder="Search Here..."
              onChange={onChange}
            />
          </div>
          <button className="btn btn-success col-md-2" type="submit">
            Search
          </button>
        </div>
      </form>
      {githubContext.users.length > 0 && (
        <button
          type="button"
          class="btn btn-secondary col-12 "
          onClick={githubContext.ClearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
