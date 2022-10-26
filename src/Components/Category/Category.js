import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
 
    return (
        <div style={{height:"100%",  padding:'5px',borderRadius:"5px", boxShadow:'10px 5px 5px gray' }}>
             
            <CardGroup>
                <Card className='border-0' style={{margin:'30px 0'}}>
                    <Card.Img variant="top" src={category.course_Img} style={{width:'100%',height:'250px'}} />
                    <Card.Body className='d-flex justify-content-between mt-3'>
                        <Card.Title>{category.name}</Card.Title>
                        <Link to={`/category/${category.id}`}><Button variant='primary'>Details</Button></Link>
                    </Card.Body>
                    
                </Card>
              
            </CardGroup>
        </div>
    );
};

export default Category;