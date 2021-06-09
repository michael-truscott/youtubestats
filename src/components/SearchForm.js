import React, { useState } from 'react';

const neverGonnaGive = 'dQw4w9WgXcQ';

function SearchForm(props) {
    const [searchId, setSearchId] = useState(neverGonnaGive);

    function handleChange(e) {
        setSearchId(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (searchId) {
            props.searchForId(searchId);
        }
    }

    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="video-id">Video ID:</label>
            <input id="video-id" type="text" value={searchId} onChange={handleChange} autoComplete="off"/>
            <input type="submit" value="Get" />
        </form>
    )
}

export default SearchForm;