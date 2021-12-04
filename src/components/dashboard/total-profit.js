import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SportsIcon from '@mui/icons-material/Sports';

export const GameCount = (props) => (
  <Card {...props}>
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
            Number of Games
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.gamecount}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <SportsIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
