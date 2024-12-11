import React from 'react';
import { Card, ListGroup} from "react-bootstrap";

const About = () => {
    return (
        <div className="container mt-4 w-50">
            <Card bg="dark" text="light" border="dark">
                <Card.Header as="h1" className="text-center m-2">About</Card.Header>
                <ListGroup className="text-center m-2">
                    <ListGroup.Item variant="dark" as="h2">SE/ComS3190 Construction of User Interfaces<br />Aldaco (aaldaco@iastate.edu)</ListGroup.Item>
                    <ListGroup.Item variant="dark" as="h2">Fall 2024<br/>December 11, 2024</ListGroup.Item>
                    <ListGroup.Item variant="dark" as="h2">Arslan Khan (arslank@iastate.edu)<br/>
                    Molly Heston (mheston@iastate.edu)</ListGroup.Item>

                </ListGroup>

            </Card>
        </div>
    );
};
export default About;
