import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import HogDetail from "./HogDetails";
import FilterSort from "./FilterSort";
import AddHog from "./AddHog";
import hogs from "../porkers_data";

function App(){
    const [hogsState, setHogs] = useState(hogs);
    const [selectedHog, setSelectedHog] = useState(null);
    const [filterGreased, setFilterGreased] = useState(false);
    const [sortBy, setSortBy] = useState("name");

    const filteredHogs = filterGreased ? hogsState.filter((hog) => hog.greased && !hog.hidden) : hogsState.filter(hog => !hog.hidden);

    const sortedHogs = filteredHogs.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }
        return a.weight - b.weight;
    });

	const handleAddHog = (newHog) => {
        setHogs((prevHogs) => [...prevHogs, newHog]);
    };
	
	const handleHideHog = (hogToHide) => {
        setHogs((prevHogs) => prevHogs.map(hog => hog.name === hogToHide.name ? { ...hog, hidden: true } : hog));
    };

    return (
        <div className="App">
            <Nav />
            <FilterSort setFilterGreased={setFilterGreased} setSortBy={setSortBy} />
            <div className="ui grid container">
                {sortedHogs.map((hog) => (
					<div className="ui eight wide column" key={hog.name}> 
                    <HogTile hog={hog} onClick={setSelectedHog} onHide={handleHideHog} />
					</div>
                ))}
            </div>
            {selectedHog && <HogDetail hog={selectedHog} />}
            <AddHog onAddHog={handleAddHog} />
        </div>
    );
}

export default App;