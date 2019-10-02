import React, { Fragment } from 'react';

const Movie = ({ name, price }) => {
  return (
    <Fragment>
      <h3>{name}</h3>
      <p>{price}</p>
    </Fragment>
  );
};

export default Movie;
