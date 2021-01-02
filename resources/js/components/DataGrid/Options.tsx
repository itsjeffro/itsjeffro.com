import React from 'react';

const Options = (props) => {
  const { actions } = props;
  
  if (typeof actions === "undefined") {
    return;
  }
  
  return (
    <>
      { actions.map((action, index) => {
        return <a
          className="action"
          key={ `a:${ index }` }
          href="#"
          onClick={ (event) => action.onClick(event) }
        >{ action.name }</a>
      }) }
    </>
  );
};

export default Options;
