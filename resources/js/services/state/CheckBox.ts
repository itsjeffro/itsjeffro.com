interface CheckBoxStateInterface {
  checkedRows: any[]
}

class CheckBox {
  private state: CheckBoxStateInterface;
  
  constructor(state: CheckBoxStateInterface) {
    this.state = state;
  }

  checkedRows(rowIndexStart, rowIndexEnd) {
    if (rowIndexEnd !== undefined && !this.hasCheckedRows()) {
      let indexes = [];
      
      for (let i = 0; i < rowIndexEnd; i++) {
        indexes.push(i);
      }
      
      return indexes;
    }
  
    if (rowIndexEnd !== undefined && this.hasCheckedRows()) {
      return [];
    }
  
    if (this.getCheckedRows().includes(rowIndexStart)) {
      return this.getCheckedRows()
        .filter((checkedRow) => {
          return checkedRow !== rowIndexStart;
        });
    }
    
    return [
      ...this.getCheckedRows(),
      rowIndexStart,
    ];
  }
  
  private hasCheckedRows() {
    return this.state.checkedRows.length > 0;
  }
  
  private getCheckedRows() {
    return this.state.checkedRows;
  }
}

export default CheckBox;
