import React, { useState } from "react";

const AddHog = ({ onAddHog })=>{
    const [newHog, setNewHog] = useState({ name: "", specialty: "", weight: "", greased: false, highestMedal: "" , image: "" });

    const handleSubmit = (e) =>{
        e.preventDefault();
        onAddHog(newHog);
        setNewHog({ name: "", specialty: "", weight: "", greased: false, highestMedal:"", image: "" });
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={newHog.name}
                onChange={(e) => setNewHog({ ...newHog, name: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Specialty"
                value={newHog.specialty}
                onChange={(e) => setNewHog({ ...newHog, specialty: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Weight"
                value={newHog.weight}
                onChange={(e) => setNewHog({ ...newHog, weight: parseInt(e.target.value) })}
                required
            />
            <label>
                Greased:
                <input
                    type="checkbox"
                    checked={newHog.greased}
                    onChange={(e) => setNewHog({ ...newHog, greased: e.target.checked })}
                />
            </label>
            <input
                type="text"
                placeholder="Highest Medal"
                value={newHog.highestMedal}
                onChange={(e) => setNewHog({ ...newHog, highestMedal: e.target.value })}
                required
            />
            {/* field for image URL */}
            <input
                type="text"
                placeholder="Image URL"
                value={newHog.image}
                onChange={(e) => setNewHog({ ...newHog, image: e.target.value })}
                required
            />
            <button type="submit">Add Hog</button>
        </form>
    );
};

export default AddHog;