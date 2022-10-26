import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import './Home.css';
const Home = () => {
    const categories = useLoaderData();
    return (
        <div className='container'>
            <div className='text-center header-container mt-4'>
                <div>
                    <h3 className=''>Learn</h3>
                    <p style={{ fontSize: "20px" }}>Explore our structured learning paths to discover everything you need to <br /> know about building for the modern web.</p>
                </div>

            </div>
            <div>
                <h2>Courses</h2>
                <div className='categories my-5'>

                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;