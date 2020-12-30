import * as React from 'react';
import DataRow from './DataRow';

interface DataRowInterface {
  field: string
  headerName: string
}

interface Interface {
  columns: DataRowInterface[]
  rows: any[]
}

const DataGrid = (props: Interface) => {
  const { columns, rows } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column: any, index: number) => (
            <th key={ `c:${ index }`}>{ column.headerName }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: any, index: number) => (
          <DataRow key={ `r:${ index }` } rowIndex={ index } row={ row } columns={ columns } />
        ))}
      </tbody>
    </table>
  );
}

export default DataGrid;
