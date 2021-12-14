import * as React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { propsToClassKey } from '@mui/styles';
import { RowingSharp } from '@material-ui/icons';

const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'gender', headerName: 'Gender', width: 100  },
  { field: 'medalCount', headerName: 'Gold Medals', type: 'number', width: 150 },
];


function createData(id, name, medalCount, gender) {
  return { id, name, medalCount, gender };
}

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer} >
      <GridToolbarExport csvOptions={{ allColumns: true }} />
    </GridToolbarContainer>
  );
}

export const LeaderBoard = (props) => {
  const rows = [];
  Object.entries(props.cellData).map((data, index) => {
    rows.push(createData(index, data[1]['Name'], data[1]['Medal Count'], data[1]['Gender']));
  });

  return (
    <div style={{ height: 550, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // rowsPerPageOptions={[5, 10, 20]}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}