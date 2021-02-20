import * as React from 'react';

const DataRow = (props: any) => {
  const {
    rowIndex,
    row,
    columns,
    checkboxOptions,
    isChecked,
  } = props;

  return (
    <tr>
      { checkboxOptions
        ? <td>
            <input
              type="checkbox"
              name="checkbox"
              onChange={ (event) => checkboxOptions
                ? checkboxOptions.onCheckboxClick(event, rowIndex)
                : null }
              checked={ isChecked }
            />
          </td>
        : <></> }
      
      {columns.map((column: any, index: number) => (
        <td 
          key={ `r:${ rowIndex }-c:${ index }` }
          className={ `text-${ column.align || 'left' }` }
        >
          { row[column.field] || '' }
        </td>
      ))}
    </tr>
  )
}

export default DataRow;
