import React, { useState } from 'react';

const videoIds = [
    'dQw4w9WgXcQ', // rick astley
    '9bZkp7q19f0', // psy
    'J---aiyznGQ', // keyboard cat
    'EwTZ2xpQwpA', // chocolate rain
    'kfVsfOSbJY0', // friday
    'y8Kyi0WNg40', // dramatic chipmunk
    'N4OPr_QxoFg', // porkchop sandwiches
    'djV11Xbc914', // take on me
    'ZVUyyHYkBHk', // imdabes
    'YcpiY484ZUk', // get in the fridge
];

function SearchForm(props) {
    const [searchId, setSearchId] = useState('');

    function onRandomClick(e) {
        e.preventDefault();
        let randomId;
        do {
            const index = Math.floor(Math.random() * videoIds.length);
            randomId = videoIds[index];
        } while (randomId === searchId);

        setSearchId(randomId);
        props.searchForId(randomId);
    }

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
            <input type="submit" value="Go" />
            <div className="random-btn">
                <button onClick={onRandomClick}>Choose a Random ID</button>
            </div>
        </form>
    )
}

export default SearchForm;