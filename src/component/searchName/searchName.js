import React, { useContext } from "react";
import DataAreaContext from "../../util/DataAreaContext";
import "./searchName.css";

const SearchName= () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="search-field">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">
                    Search
                    </span>
                </div>
                <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="name"
                aria-label="Search"
                onChange={e => context.handleSearchChange(e)}
                />
            </div>
        </div>
    );

};

export default SearchName;