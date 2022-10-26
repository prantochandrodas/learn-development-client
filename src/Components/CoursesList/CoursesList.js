import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesList.css';
const CoursesList = ({course}) => {

    return (
        <div className='courseList'>
            <Link to={`/category/${course.id}`}>{course.name}</Link>
        </div>
    );
};

export default CoursesList;