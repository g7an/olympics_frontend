import { Box, Card, CardHeader, Divider, useTheme } from '@mui/material';
import { BasicTable } from './basic-table';

export const MedalsByEvents = (props) => {
  const theme = useTheme();

  return (
    <Card {...props}>
      <CardHeader
        title="Medals by Events"
      />
      <Divider />
        <Box
          sx={{
            height: 500,
            position: 'relative'
          }}
        >
          <BasicTable cellData={props.data} />
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
