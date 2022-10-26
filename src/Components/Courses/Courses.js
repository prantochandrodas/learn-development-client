import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CoursesCart from '../../CoursesCart/CoursesCart';
import CoursesList from '../CoursesList/CoursesList';
import CoursesLis from '../CoursesList/CoursesList';
import './Courses.css';
const Courses = () => {
    const courses=useLoaderData();
    return (
        <div className='course-container'>
            <div className='courses-list'>
                    {
                        courses.map(course=><CoursesList
                        key={course.id}
                        course={course}
                        ></CoursesList>)
                    }
            </div>
            <div className='courses-cart container'>
                    {
                        courses.map(course=><CoursesCart
                        key={course.id}
                        course={course}
                        ></CoursesCart>)
                    }
            </div>
        </div>
    );
};

export default Courses;