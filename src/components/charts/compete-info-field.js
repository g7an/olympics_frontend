import {
  Card,
  CardHeader,
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select
} from '@mui/material';
import { useEffect, useState } from 'react';
import { CompeteInfoTable } from './compete-info-table';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

export const CompeteInfoField = (props) => {


  const [region, setRegion] = useState('United States');
  const [dataRegion, setDataRegion] = useState();
  const [dataCompeteInfo, setDataCompeteInfo] = useState();
  

  useEffect(() => {
    handleData();
  }, []);

  useEffect(() => {
    handleNewData();
  }, [region]);

  async function handleData() {
    const regionInfo = await axios('http://localhost:8000/region');
    const regionName = Object.entries(regionInfo.data).map(item => item[1].Region_name);
    const competeInfo = await axios.get('http://localhost:8000/compete_info?region=' + region);

    setDataRegion(regionName);
    setDataCompeteInfo(competeInfo.data);
  
  }

  async function handleNewData() {
    const newData = await axios(`http://localhost:8000/compete_info?region=${region}`);
    setDataCompeteInfo(newData.data);
  }



  const handleChange = (event) => {
    setRegion(event.target.value);
    handleNewData();
  };


  return (
    <Card {...props} 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
      <CardHeader  
        title="Winning Rate"
        action={
          <FormControl fullWidth>
            <InputLabel id="simple-select-label">Country/Region</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={region}
              label="Region"
              onChange={handleChange}
            >
              {dataRegion && dataRegion.map(item => {
                return <MenuItem value={item}>{item}</MenuItem>
              })}
            </Select>
          </FormControl>
      
        }
      />
      {/* <Divider /> */}
      {dataCompeteInfo ?  <CompeteInfoTable cellData={dataCompeteInfo}  /> : <CircularProgress />}
    </Card>
  );
  


} 