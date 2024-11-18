import React from "react";
import { Card, Button } from "semantic-ui-react";

const HogTile =({ hog, onClick, onHide}) =>(
    <Card onClick={() => onClick(hog)} style={{ cursor: "pointer" }}>
        <Card.Content>
            <Card.Header>{hog.name}</Card.Header>
            <Card.Description>
                <img src={hog.image} alt={hog.name} style={{ width: "80%", height: "auto" }} />
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button onClick={(e) => { e.stopPropagation(); onHide(hog); }}>Hide</Button>
        </Card.Content>
    </Card>
);

export default HogTile;