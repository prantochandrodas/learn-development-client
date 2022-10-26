import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const Category = ({ category }) => {
    console.log(category);
    return (
        <div style={{width:'100%', height:'300px' ,margin:'20PX 0'}}>
            <CardGroup>
                <Card className='' style={{margin:'30px 0'}}>
                    <Card.Img variant="top" src={category.course_Img} style={{height:'250px',width:'100%'}} />
                    <Card.Body>
                        <Card.Title>{category.name}</Card.Title>
                    <Button variant='primary mt-2'>Details</Button>
                    </Card.Body>
                    
                </Card>
              
            </CardGroup>
        </div>
    );
};

export default Category;