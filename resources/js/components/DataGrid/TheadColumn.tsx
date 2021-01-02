import React from 'react';

const TheadColumn = (props: any) => {
  const { column, onTheadClick } = props;

  if (typeof onTheadClick === "undefined") {
    return (
      <th>{ column.headerName }</th>
    );
  }

  return (
    <th>
      <a href="#" onClick={ (event) => onTheadClick(event, column.field) }>{ column.headerName }</a>
    </th>
  )
};

export default TheadColumn;
