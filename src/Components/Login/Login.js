import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const Login = () => {
    const [error,setError]=useState('');
    
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate=useNavigate();
    const {signIn,googleSignin,githubSignin}=useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
             
                form.reset();
                setError('');
                navigate(from,{replace:true});
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
           
    }

    const provider=new GoogleAuthProvider();
    const handelGoogleSignIn=()=>{
        googleSignin(provider)
        .then(result=>{
            const user=result.user;
           
            navigate('/');
        })
        .then(e=>setError(e.massage));
    }
    const githubProvider=new GithubAuthProvider();
    const handelGithubSignIn=()=>{
        githubSignin(githubProvider)
        .then(result=>{
            const user=result.user;
          
            navigate('/');
        })
        .then(e=>setError(e.massage));
        
    }
    return (
        <div className='w-lg-25 mx-auto border p-3'>
            <h1 className='mb-2'>Login</h1>
             <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Link to='/register'>Create a new account</Link><br />
            <Button variant="primary" type="submit" className='mt-2'>
                Login
            </Button>
            <br />
            <Button variant='success' onClick={handelGoogleSignIn} className="mt-3" style={{width:'100%'}}><FaGoogle></FaGoogle> Login With Google</Button><br />
            <Button variant='dark' onClick={handelGithubSignIn} className="mt-3" style={{width:'100%'}}><FaGithub></FaGithub> Login With Github</Button>
            <Form.Text className="text-danger mt-3">
                {error}
            </Form.Text>
        </Form>
        </div>
    );
};

export default Login;