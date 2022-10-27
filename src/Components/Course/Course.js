import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css'
const Course = () => {
    const data = useLoaderData();

    return (
        <div className='container my-5 courseDetails'>
           <Card>
            <Card.Img variant="top" src={data.picture}  style={{width:'75%',height:'400px',margin:'10px auto'}}/>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                    {data?.about?.length>250 ?
                       <>{data.about.slice(0,250)+'...'}<Link to={`/post/${data.id}`}>ReadMore</Link></> :
                        data.about}

                      <h4 className='my-3'>Get the premium access for all the  facility</h4>
              </Card.Text>
              <Link to={`/post/${data.id}`}> <Button variant='success' className='w-100' style={{fontSize:'20px',padding:'10px 0'}}> Premium Access</Button></Link>
            </Card.Body>
          </Card>
        </div>
    );
};

export default Course;