import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { CountryCount } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { EventCount } from '../components/dashboard/tasks-progress';
import { AthletesCount } from '../components/dashboard/total-customers';
import { GameCount } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { resetServerContext } from "react-beautiful-dnd"

const Dashboard = () => {
  resetServerContext()

  const [dataBasic, setDataBasic] = useState({});
  const [dataRatio, setDataRatio] = useState({});

  useEffect(() => {
    handleData();
  }, []);

  async function handleData() {
    try {      
        const basicInfo = await axios.get('http://localhost:8000/basic_info');
        const ratio = await axios.get('http://localhost:8000/male_female');
        setDataBasic(basicInfo.data);
        setDataRatio(ratio.data);
        
      } catch (error) {
        console.error(error);
      }
  }


  return (
    <>
      <Head>
        <title>
          Dashboard | Olympics
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <CountryCount countrycount={dataBasic['country_count']} />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <AthletesCount athletecount={dataBasic['athlete_count']} />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <EventCount eventcount={dataBasic['event_count']}/>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <GameCount gamecount={dataBasic['game_count']} sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <Sales />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <TrafficByDevice data={dataRatio} sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <LatestProducts sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

  

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
