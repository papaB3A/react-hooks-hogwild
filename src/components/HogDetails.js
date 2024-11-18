import React from "react";

const HogDetail = ({ hog }) =>(
    <div>
        <h2>{hog.name}</h2>
        <p>Specialty: {hog.specialty}</p>
        <p>Weight: {hog.weight}</p>
        <p>Greased: {hog.greased ? "Yes" : "No"}</p>
        <p>Highest Medal: {hog["highest medal achieved"]}</p>
    </div>
);

export default HogDetail;