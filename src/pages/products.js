import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { CountryCount } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { EventPlot } from '../components/product/event-by-year';
import { EventCount } from '../components/dashboard/tasks-progress';
import { AthletesCount } from '../components/dashboard/total-customers';
import { GameCount } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { resetServerContext } from "react-beautiful-dnd";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { ParticipateCities } from '../components/product/participate-cities';
import { HeldCities } from '../components/product/held-cities';

const useStyles = makeStyles({
  parent: {
    position: "relative",
    width: 200,
    height: 200,
    backgroundColor: "red",
    zIndex: 0,
  },
  backdrop: {
    position: "absolute"
  }
});

const Products = () => {
  const classes = useStyles();

  const [dataBasic, setDataBasic] = useState();
  const [dataRatio, setDataRatio] = useState();
  const [dataEventMedal, setDataEventMedal] = useState();
  const [dataCities, setDataCities] = useState();
  const [dataRank, setDataRank] = useState();

  useEffect(() => {
    handleData();
  }, []);

  async function handleData() {
    try {      

        const basicInfo = await axios.get('http://localhost:8000/basic_info');
        const ratio = await axios.get('http://localhost:8000/male_female');
        const table = await axios.get('http://localhost:8000/event_medal');
        const cities = await axios.get('http://localhost:8000/partici_cities');
        const rank = await axios.get('http://localhost:8000/held_cities');

        setDataBasic(basicInfo.data);
        setDataRatio(ratio.data);
        setDataEventMedal(table.data);
        setDataCities(cities.data);
        setDataRank(rank.data);

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
          {
            dataBasic && dataRatio && dataCities && dataRank ? 
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
                lg={6}
                md={9}
                xl={6}
                xs={12}
              >
                <EventPlot/>
              </Grid>
              <Grid
                item
                lg={6}
                md={9}
                xl={6}
                xs={12}
              >
                <TrafficByDevice data={dataRatio} sx={{ height: '100%' }} />
              </Grid>
              <Grid
                item
                // lg={4}
                // md={6}
                // xl={3}
                // xs={12}
                lg={4}
                md={6}
                xl={4}
                xs={12}
              >
                <HeldCities sx={{ height: '100%' }} data={dataRank} />
              </Grid>
              <Grid
                item
                lg={8}
                md={12}
                xl={8}
                xs={12}
              >
                <ParticipateCities sx={{ height: '100%' }} data={dataCities} />
              </Grid>
            </Grid>
          </Container>: 
        <div>
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
        }
          
        </Box>
        </>
  );
}

  

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Products;
