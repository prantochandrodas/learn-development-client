import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
 
    return (
        <div style={{width:'100%', height:'100%' ,marginTop:'40px'}}>
            <CardGroup>
                <Card className='' style={{margin:'30px 0'}}>
                    <Card.Img variant="top" src={category.course_Img} style={{height:'250px',width:'100%'}} />
                    <Card.Body>
                        <Card.Title>{category.name}</Card.Title>
                    <Link to={`/category/${category.id}`}><Button variant='primary mt-2'>Details</Button></Link>
                    </Card.Body>
                    
                </Card>
              
            </CardGroup>
        </div>
    );
};

export default Category;