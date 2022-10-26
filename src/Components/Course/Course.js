import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Course = () => {
    const data = useLoaderData();

    return (
        <div className='container my-5 w-75'>
            <Card >
                <Card.Img variant="top" src={data.picture} />
                <Card.Body>
                    <Card.Title>{data.category_name}</Card.Title>
                    <Card.Text>
                       {data.about}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;