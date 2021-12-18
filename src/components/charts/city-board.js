import * as React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from '@mui/x-data-grid';

const columns = [
  { field: 'cityName', headerName: 'City', width: 200 },
  { field: 'count', headerName: 'Count', width: 100  },
];


function createData(id, cityName, count) {
  return { id, cityName, count };
}

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer} >
      <GridToolbarExport csvOptions={{ allColumns: true }} />
    </GridToolbarContainer>
  );
}

export const CityBoard = (props) => {
  const rows = [];
  Object.entries(props.cellData).map((data, index) => {
    rows.push(createData(index, data[1]['City_name'], data[1]['Count']));
  });

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}