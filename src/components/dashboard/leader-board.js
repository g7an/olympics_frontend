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
  { field: 'regionName', headerName: 'Region Name', width: 200 },
  { field: 'goldMedals', headerName: 'Gold Medals', type: 'number', width: 200 },
];


function createData(id, goldMedals, regionName) {
  return { id, goldMedals, regionName };
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
    rows.push(createData(index, data[1]['Gold Medal Count'], data[1]['Region_name']));
  });

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}