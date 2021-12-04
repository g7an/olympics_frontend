import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';


export const TrafficByDevice = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [props.data['male_count'], props.data['female_count']],
        backgroundColor: ['#3F51B5', '#e53935'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Male', 'Female']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
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

  const devices = [
    {
      title: 'Male',
      value: props.data['male_ratio'],
      icon: MaleIcon,
      color: '#3F51B5'
    },
    {
      title: 'Female',
      value: props.data['female_ratio'],
      icon: FemaleIcon,
      color: '#E53935'
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Ratio of Male : Female" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
