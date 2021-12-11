import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { NlpToolbar } from '../components/customer/nlp-toolbar';
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
        <NlpToolbar />
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
