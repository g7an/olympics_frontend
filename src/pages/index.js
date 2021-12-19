import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { CountryCount } from '../components/dashboard/country-count';
import { GoldMedalByRegions } from '../components/dashboard/medal-regions';
import { AthleteLeaderBoard } from '../components/dashboard/athlete-board';
import { MedalsByEvents } from '../components/dashboard/medal-events';
import { EventCount } from '../components/dashboard/event-count';
import { AthletesCount } from '../components/dashboard/athlete-count';
import { GameCount } from '../components/dashboard/game-count';
import { GenderPercentage } from '../components/dashboard/gender-percentage';
import { DashboardLayout } from '../components/dashboard-layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

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

const Dashboard = () => {
  const classes = useStyles();

  const [dataBasic, setDataBasic] = useState();
  const [dataRatio, setDataRatio] = useState();
  const [dataEventMedal, setDataEventMedal] = useState();
  const [dataGoldMedals, setDataGoldMedals] = useState();
  const [dataRank, setDataRank] = useState();

  useEffect(() => {
    handleData();
  }, []);

  async function handleData() {
    try {      
        const basicInfo = await axios.get('http://localhost:8000/basic_info');
        const ratio = await axios.get('http://localhost:8000/male_female');
        const table = await axios.get('http://localhost:8000/event_medal');
        const goldMedals = await axios.get('http://localhost:8000/gold_country');
        const rank = await axios.get('http://localhost:8000/medal_top');

        setDataBasic(basicInfo.data);
        setDataRatio(ratio.data);
        setDataEventMedal(table.data);
        setDataGoldMedals(goldMedals.data);
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
            dataBasic && dataRatio && dataEventMedal && dataGoldMedals && dataRank ? <Container maxWidth={false}>
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
                <CountryCount countrycount={dataBasic['country_count']} sx={{ height: '100%' }}/>
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
              >
                <AthletesCount athletecount={dataBasic['athlete_count']} sx={{ height: '100%' }}/>
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
              >
                <EventCount eventcount={dataBasic['event_count']} sx={{ height: '100%' }}/>
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
                <MedalsByEvents data={dataEventMedal}/>
              </Grid>
              <Grid
                item
                lg={6}
                md={9}
                xl={6}
                xs={12}
              >
                <GenderPercentage data={dataRatio} sx={{ height: '100%' }} />
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xl={4}
                xs={12}
              >
                <AthleteLeaderBoard sx={{ height: '100%' }} data={dataRank} />
              </Grid>
              <Grid
                item
                lg={8}
                md={12}
                xl={8}
                xs={12}
              >
                <GoldMedalByRegions data={dataGoldMedals} />
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

  

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
