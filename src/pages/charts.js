import Head from 'next/head';
import { Box, Container, Grid} from '@mui/material';
import { EventPlot } from '../components/charts/event-by-year';
import { DashboardLayout } from '../components/dashboard-layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { ParticipateCities } from '../components/charts/participate-cities';
import { HeldCities } from '../components/charts/held-cities';
import { CompeteInfoField } from 'src/components/charts/compete-info-field';

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
  const [dataYearlyEvent, setDataYearlyEvent] = useState();
  const [dataCities, setDataCities] = useState();
  const [dataRank, setDataRank] = useState();

  useEffect(() => {
    handleData();
  }, []);

  async function handleData() {
    try {      

        const basicInfo = await axios.get('http://localhost:8000/basic_info');
        const ratio = await axios.get('http://localhost:8000/male_female');
        const yearlyEvent = await axios.get('http://localhost:8000/event_year');
        const cities = await axios.get('http://localhost:8000/partici_cities');
        const rank = await axios.get('http://localhost:8000/held_cities');
   
        setDataBasic(basicInfo.data);
        setDataRatio(ratio.data);
        setDataYearlyEvent(yearlyEvent.data);
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
            dataBasic && dataRatio && dataCities && dataRank && dataYearlyEvent ? 
            <Container maxWidth={false}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={6}
                md={9}
                xl={6}
                xs={12}
              >
                <EventPlot data={dataYearlyEvent}/>
              </Grid>
              <Grid
                item
                lg={6}
                md={9}
                xl={6}
                xs={12}
              >
                <CompeteInfoField />
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
