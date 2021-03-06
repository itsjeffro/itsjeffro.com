import * as React from 'react';
import DataRow from './DataRow';
import TheadColumn from "./TheadColumn";
import Options from "./Options";

interface DataRowInterface {
  field: string
  headerName: string
}

interface CheckBoxOptionsInterface {
  onCheckboxClick: Function
  checkedRows: any[]
  actions: any[]
}

interface SortOptionsInterface {
  onTheadClick: Function
}

interface Interface {
  columns: DataRowInterface[]
  rows: any[]
  sortOptions?: SortOptionsInterface
  checkboxOptions?: CheckBoxOptionsInterface
}

const DataGrid = (props: Interface) => {
  const {
    columns,
    rows,
    sortOptions,
    checkboxOptions,
  } = props;
  
  const rowCount = rows.length;

  // Checkbox
  const checkedRows = checkboxOptions ? checkboxOptions.checkedRows : [];
  const checkboxActions = checkboxOptions ? checkboxOptions.actions : [];

  return (
    <div className="card">
      <div className="card-header">
        { typeof checkboxOptions !== "undefined"
          ? <input
              type="checkbox"
              name="checkbox"
              onChange={ (event) => checkboxOptions.onCheckboxClick(event, 0, rowCount) }
              checked={ checkedRows.length > 0 }
            />
          : <></> }
        
        { checkedRows.length > 0
          ? <Options actions={ checkboxActions } />
          : <></> }
      </div>
      <table className="table">
        <thead>
          <tr>
            { typeof checkboxOptions !== "undefined" ? <th>{ '' }</th> : <></> }
            
            {columns.map((column: any, index: number) => (
              <TheadColumn
                key={ `c:${ index }`}
                onTheadClick={ sortOptions.onTheadClick }
                column={ column }
              />
            ))}
          </tr>
        </thead>
        <tbody>
          { rows.map((row: any, index: number) => (
            <DataRow
              checkboxOptions={ checkboxOptions }
              key={ `r:${ index }` }
              rowIndex={ index }
              row={ row }
              columns={ columns }
              isChecked={ checkedRows.includes(index) }
            />
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default DataGrid;
