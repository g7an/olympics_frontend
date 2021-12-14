import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CityBoard } from './city-board';

export const HeldCities = (props) => (
  <Card {...props}>
    <CardHeader
      
      title="Athletes With Most Medals"
    />
    {/* <Divider /> */}
    <CityBoard cellData={props.data}  />
  </Card>
);
