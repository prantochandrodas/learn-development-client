import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const Registration = () => {
    const navigate=useNavigate();
    const [error, setError] = useState('');
    const {createUser}=useContext(AuthContext);
    const handleSubmit=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photoURL,email,password);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            navigate('/');
          
        })
        .catch(e => {
            console.error(e);
            setError(e.message);
        });
    }
    return (
        <div className='w-50 mx-auto'>
                <h1>Register</h1>
              <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
           <p> <Link to='/login'>Already have an account go to Login</Link></p>
            <Button variant="primary" type="submit" >
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
        </div>
    );
};

export default Registration;