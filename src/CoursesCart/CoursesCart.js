import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CoursesCart = ({course}) => {
    return (
        <div>
        <CardGroup>
            <Card className='' style={{margin:'30px 0'}}>
                <Card.Img variant="top" src={course.course_Img} style={{height:'250px',width:'100%'}} />
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                <Link to={`/category/${course.id}`}><Button variant='primary mt-2'>Details</Button></Link>
                </Card.Body>
                
            </Card>
          
        </CardGroup>
    </div>
    );
};

export default CoursesCart;