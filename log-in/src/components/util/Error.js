import React from 'react';

function Error(props) {
    return (
      <h1 className='font-bold text-red-500 text-center'>{props.errorMessage}</h1>
    );
}

export default Error;