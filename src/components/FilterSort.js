import React from "react";

const FilterSort = ({ setFilterGreased, setSortBy }) =>{
    return (
        <div>
            <label>
                Filter Greased:
                <input type="checkbox" onChange={(e) => setFilterGreased(e.target.checked)} />
            </label>
            <label>
                Sort By:
                <select onChange={(e) => setSortBy(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </label>
        </div>
    );
};

export default FilterSort;