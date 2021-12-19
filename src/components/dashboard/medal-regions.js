import {
  Box,
  Card,
  CardHeader,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '@mui/material';
import _ from 'lodash';


export const GoldMedalByRegions = (props) => {
    const labels = Object.entries(props.data).map(obj => obj.flat()[1]['Region_name']);
    const dataNum = Object.entries(props.data).map(obj => obj.flat()[1]['Gold Medal Count']);
    const data = {
      labels: labels,
      datasets: [{
        label: 'Gold Medal Count',
        data: dataNum,
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.3)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 205, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(201, 203, 207, 0.3)',
          'rgba(227, 3, 252, 0.3)',
          'rgba(3, 252, 169, 0.3)',

        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(227, 3, 252)',
          'rgb(3, 252, 169)',
        ],
        borderWidth: 1
      }]
    };

    const options = {
      type: 'bar',
      data
    };

  

  return (
    <Card {...props}>
      <CardHeader title="Gold Medals By Region" />
        <Box>
           <Bar
            data={data}
            options={options}
          />
        </Box>
    </Card>
  );
  
}


