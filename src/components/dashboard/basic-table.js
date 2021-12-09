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
  { field: 'Event_name', headerName: 'Event Name', width: 200 },
  { field: 'Region_name', headerName: 'Region Name', width: 200 },
  {
    field: 'medal_count',
    headerName: 'Medal Count',
    type: 'number',
    width: 200,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
];

const rows = [
  { id: 1, Event_name: "Team", Region_name: "United States", medal_count: 9810 }
];


function createData(id, Event_name, Region_name, medal_count) {
  return { id, Event_name, Region_name, medal_count };
}

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer} >
      <GridToolbarExport csvOptions={{ allColumns: true }} />
    </GridToolbarContainer>
  );
}

export const BasicTable = (props) => {
  const rows = [];
  Object.entries(props.cellData).map((data, index) => {
    rows.push(createData(index, data[1]['Event_name'], data[1]['Region_name'], data[1]['medal_count']));
  });

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={10}
        rowsPerPageOptions={[5, 10, 100]}
        // checkboxSelection
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}