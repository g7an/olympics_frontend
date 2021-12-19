import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';

export const CountryCount = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Number of Regions (2012)
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.countrycount}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <PublicIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >

      </Box>
    </CardContent>
  </Card>
);
