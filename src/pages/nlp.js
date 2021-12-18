import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { NlpField } from '../components/nlp/nlp-field';
import { DashboardLayout } from '../components/dashboard-layout';

const Nlp = () => (
  <>
    <Head>
      <title>
        Q & A
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
        <NlpField />
        {/* <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box> */}
      </Container>
    </Box>
  </>
);
Nlp.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Nlp;
