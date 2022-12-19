import React from 'react';
import {Header,Content} from './Header';


const Course = (props) => {
  const { course } = props;
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
