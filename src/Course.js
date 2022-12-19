import React from 'react';
import {Header,Content} from './Header';


const Course = (props) => {
  const { course } = props;
  const totalExercises = course.parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <p>Total exercises: {totalExercises}</p>
    </div>
  );
};

export default Course;
