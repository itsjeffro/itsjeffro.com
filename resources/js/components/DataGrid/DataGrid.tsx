import * as React from 'react';
import DataRow from './DataRow';
import TheadColumn from "./TheadColumn";

interface DataRowInterface {
  field: string
  headerName: string
}

interface Interface {
  includeCheckbox?: boolean
  columns: DataRowInterface[]
  rows: any[]
  onTheadClick?: Function
  onCheckboxClick?: Function
  checkedRows?: any[]
}

const DataGrid = (props: Interface) => {
  const {
    checkedRows,
    columns,
    includeCheckbox,
    rows,
    onTheadClick,
    onCheckboxClick,
  } = props;
  
  const rowCount = rows.length;

  return (
    <div className="card">
      <div className="card-header">
        { includeCheckbox
          ? <input
              type="checkbox"
              name="checkbox"
              onClick={ (event) => onCheckboxClick(event, 0, rowCount) }
              checked={ checkedRows.length > 0 }
            />
          : '' }
        
        { (checkedRows || []).length > 0
          ? ' Checked rows'
          : '' }
      </div>
      <table className="table">
        <thead>
          <tr>
            { includeCheckbox ? <th>{ '' }</th> : '' }
            
            {columns.map((column: any, index: number) => (
              <TheadColumn
                key={ `c:${ index }`}
                onTheadClick={ onTheadClick }
                column={ column }
              />
            ))}
          </tr>
        </thead>
        <tbody>
          { rows.map((row: any, index: number) => (
            <DataRow
              includeCheckbox={ includeCheckbox }
              onCheckboxClick={ onCheckboxClick }
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
