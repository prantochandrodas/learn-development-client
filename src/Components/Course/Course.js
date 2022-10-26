import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Course = () => {
    const data = useLoaderData();

    return (
        <div className='container my-5 w-50'>
           <Card>
            <Card.Img variant="top" src={data.picture} style={{height:"300px",width:'600px' ,margin:"20px auto"}} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                    {data?.about.length>250 ?
                       <>{data.about.slice(0,250)+'...'}<Link to={`/category/${data.id}`}>ReadMore</Link></> :
                        data.about}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    );
};

export default Course;