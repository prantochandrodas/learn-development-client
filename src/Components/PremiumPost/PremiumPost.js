import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
const PremiumPost = () => {
    const data=useLoaderData();
    return (
        <div className='container my-5 courseDetails'>
           <Card>
            <Card.Img variant="top" src={data.picture}  style={{width:'75%',height:'400px',margin:'10px auto'}}/>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                    {data?.about}
                       <div>
                            <h2>Facilities that you will get in this course :-</h2>
                            <ul>
                                <li>You will get 24 houre facebook group support</li>
                                <li> Three live support session in a day </li>
                                <li> Conceptual session</li>
                                <li>Email support</li>
                                <li>life time our website access</li>
                                <li> Get job opportunity</li>
                                <li>Expert guidline</li>
                            </ul>
                            <p>And many other facilities.</p>
                       </div>

                      
              </Card.Text>
            
            </Card.Body>
          </Card>
        </div>
    );
};

export default PremiumPost;