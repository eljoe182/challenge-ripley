import React from 'react';

const ContainerComponent = (props) => {
  return (
    <div className="container mx-auto mt-10">
      {props.children}
    </div>
  );
};

export default ContainerComponent;
