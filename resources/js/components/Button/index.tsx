import * as React from 'react';

const Button = (props) => {
  const {
    variant,
    isFluid,
    onClick,
  } = props;

  return (
    <button
      className={ `btn btn-${ variant } ${ isFluid ? 'btn-block' : '' }` }
      onClick={ onClick }
    >{ props.children }</button>
  )
}

export default Button;
