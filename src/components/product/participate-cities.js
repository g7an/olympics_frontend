import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '@mui/material';
import _ from 'lodash';


export const ParticipateCities = (props) => {
    const labels = Object.entries(props.data).map(obj => obj.flat()[1]['Year']);
    const dataSummer = Object.entries(props.data).map(obj => {
        if (obj.flat()[1]['Season'] === "Summer") {
            return obj.flat()[1]['Number of regions'];
        }  
    });
    const dataWinter = Object.entries(props.data).map(obj => {
        if (obj.flat()[1]['Season'] === "Winter") {
            return obj.flat()[1]['Number of regions'];
        }  
    });
    const theme = useTheme();
    const data = {
      labels: labels,
      datasets: [
        {
            axis: 'y',
            label: 'Summer',
            data: dataSummer,
            fill: false,
            backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(255, 159, 64, 0.3)',
            'rgba(255, 205, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            

            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
           
            ],
            borderWidth: 1
        },
        {
            axis: 'y',
            label: 'Winter',
            data: dataWinter,
            fill: false,
            backgroundColor: [
                'rgba(153, 102, 255, 0.3)',
                'rgba(201, 203, 207, 0.3)',
                'rgba(227, 3, 252, 0.3)',
                'rgba(3, 252, 169, 0.3)',
            ],
            borderColor: [
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(227, 3, 252)',
                'rgb(3, 252, 169)',
            ],
            borderWidth: 1
        }
    ]
    };

    const options = {
      type: 'bar',
      data,
      options: {
        indexAxis: 'y',
      }
    };

  

  return (
    <Card {...props}>
      <CardHeader title="Number of Regions Participated in Olympic Games" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800}}>
           <Bar
            data={data}
            options={options}
          />
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
      </Box>
    </Card>
  );
  
}


