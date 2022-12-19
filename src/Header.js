import React from 'react';

const Header = (props) => {
  const { name } = props;
  return <h1>{name}</h1>;
};

const Content = (props) => {
  const { parts } = props;
  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

  export { Header, Content };
