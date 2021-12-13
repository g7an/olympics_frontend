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
import { LeaderBoard } from './leader-board';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '@mui/material';
import _ from 'lodash';


export const LatestOrders = (props) => {
    const labels = Object.entries(props.data).map(obj => obj.flat()[1]['Region_name']);
    const dataNum = Object.entries(props.data).map(obj => obj.flat()[1]['Gold Medal Count']);
    const theme = useTheme();
    const data = {
      labels: labels,
      datasets: [{
        axis: 'y',
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
      data,
      options: {
        indexAxis: 'y',
      }
    };

  

  return (
    <Card {...props}>
      <CardHeader title="Gold Medal By Region" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          {/* <LeaderBoard cellData={props.data} /> */}
           <Bar
            data={data}
            options={options}
          />
          {/* <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Order Ref
                </TableCell>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.ref}
                  </TableCell>
                  <TableCell>
                    {order.customer.name}
                  </TableCell>
                  <TableCell>
                    {format(order.createdAt, 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell>
                    <SeverityPill
                      color={(order.status === 'delivered' && 'success')
                      || (order.status === 'refunded' && 'error')
                      || 'warning'}
                    >
                      {order.status}
                    </SeverityPill>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
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


