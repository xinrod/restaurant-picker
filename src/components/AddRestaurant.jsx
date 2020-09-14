import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Container } from './Container';

const AddRestaurant = () => {
  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
  };
  return (
    <div className="AddRestaurant">
      <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
  );
};

export default AddRestaurant;
