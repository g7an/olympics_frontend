import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
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
        <CustomerListToolbar />
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
