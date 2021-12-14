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
import { Line } from "react-chartjs-2";
import { Box } from '@mui/material';

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 650],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };


function createData(id, Event_name, Region_name, medal_count) {
  return { id, Event_name, Region_name, medal_count };
}

export const EventLinePlot = (props) => {

  return (
    <div style={{ height: '100%', width: '100%' }}>
        <Box paddingTop={5}>
            <Line data={data} />
        </Box>
    </div>
  );
}