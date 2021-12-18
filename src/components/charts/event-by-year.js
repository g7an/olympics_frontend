import { Box, CardHeader, useTheme, Card, Divider } from '@mui/material';
import { Line } from "react-chartjs-2";
import _ from 'lodash';

export const EventPlot = (props) => {
    const theme = useTheme();
    const dataSummer = _.toArray(props.data).filter(o => o['Season'] === "Summer").map(o => ({ x: o["Year"].toString(), y: o["Number of Events"] }));
    const dataWinter = _.toArray(props.data).filter(o => o['Season'] === "Winter").map(o => ({ x: o['Year'].toString(), y: o['Number of Events'] }));

  const data = {
    datasets: [
      {
        label: "Summer Events",
        data: dataSummer,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Winter Events",
        data: dataWinter,
        fill: false,
        borderColor: "#742774"
      },
    ]
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        type: 'year',
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card {...props}>
      <CardHeader
        title="Event by Year"
      />
      <Divider />
        <Box
          sx={{
            height: 500,
            position: 'relative'
          }}
        >
          <div style={{ height: '100%', width: '100%' }}>
                <Box paddingTop={5}>
                    <Line data={data} />
                </Box>
            </div>
        </Box>
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
};
