import {
  Card,
  CardHeader,
  Divider,
} from '@mui/material';
import { LeaderBoard } from './leader-board';

export const AthleteLeaderBoard = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle=""
      title="Athletes With Most Medals"
    />
    <Divider />
    <LeaderBoard cellData={props.data}  />
  </Card>
);
