import {
  Card,
  CardHeader,
} from '@mui/material';
import { CityBoard } from './city-board';

export const HeldCities = (props) => (
  <Card {...props}>
    <CardHeader
      
      title="Cities with Most Games Held"
    />
    <CityBoard cellData={props.data}  />
  </Card>
);
