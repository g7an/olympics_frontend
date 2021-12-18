import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  TextField,
  InputAdornment,
  SvgIcon, Typography, FormControl
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';
import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const NlpField = (props) => {
  const [formValues, setFormValues] = useState("");
  const [result, setResult] = useState({});


  const handleInputChange = (e) => {
    const input = e.target;
    // console.log(input.value);
    setFormValues(input.value);
    // setFormValues({
    //   ...formValues,
    //   [input]: value,
    // });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(formValues);
    const test = await axios.get('http://localhost:8000/nlp?user_input=' + `${formValues}`);
    setResult(test.data);
  }

  const controlSection = _.toArray(result).map((data, i) => {
    if (data === "Wrong input") {
      return (
        <Typography>
          "Sorry, I don't understand your question. Please try again."
        </Typography>
      );
    }
       
    return (
          <Table>
             <TableBody>
                <TableRow key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  {
                    Object.entries(data).map(val => {
                    return <div>
                              <TableCell component="th" scope="row">{val[0]}</TableCell>
                              <TableCell align="right">{val[1]}</TableCell>
                           </div>
                      })
                  }
                </TableRow>
             </TableBody>
          </Table>
      );
  });

  // const controlSection = _.toArray(result).map((data, i) => {
    // if (typeof(result) === "string") {
    //   return (
    //     <Typography>
    //       {result}
    //     </Typography>
    //   );
  // const controlSection = _.toArray(result).map((data, i) => {
  //   console.log(result)
  //   return (
  //     <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
  //        <TableBody>
  //           <TableRow key={i}
  //             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
  //             {
  //               Object.entries(data).map(val => {
  //               return <div>
  //                 <TableCell component="th" scope="row">{val[0]}</TableCell>
  //                 <TableCell align="right">{val[1]}</TableCell>
  //               </div>
  //                 })
  //             }
  //           </TableRow>
  //        </TableBody>
  //     </Table>
  //   );
  // });
    


  return (
        <Box {...props}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            m: -1
          }}
        >
          <Typography
            sx={{ m: 1 }}
            variant="h4"
          >
            Q & A
          </Typography>
          {/* <Box sx={{ m: 1 }}>
            <Button
              startIcon={(<UploadIcon fontSize="small" />)}
              sx={{ mr: 1 }}
            >
              Import
            </Button>
            <Button
              startIcon={(<DownloadIcon fontSize="small" />)}
              sx={{ mr: 1 }}
            >
              Export
            </Button>
            <Button
              color="primary"
              variant="contained"
            >
              Add Customers
            </Button>
          </Box> */}
        </Box>
        <Box sx={{ mt: 3 }}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
              <Box sx={{ maxWidth: 500 }}>
                  <TextField
                    margin="dense"
                    fullWidth
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       {/* <SvgIcon
                    //         color="action"
                    //         fontSize="small"
                    //       >
                    //         <SearchIcon />
                    //       </SvgIcon> */}
                    //     </InputAdornment>
                    //   )
                    // }}
                    placeholder="What is the region that Code is JPN?"
                    variant="outlined"
                    name="input"
                    type="text"
                    // value={formValues}
                    onChange={handleInputChange}
                  />
                </Box>
                <Box> 
                  <Button color="primary" variant="contained" type="submit">
                      Submit
                  </Button>
                </Box>
              </form> 
            </CardContent>
          </Card>
        </Box>
        <Box paddingTop="20px">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>

            <CardMedia
              component="img"
              height="220"
              image="/static/images/olympic.png"
              alt="Olympics"
            />
              {controlSection}
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </Box>
      </Box>
      
      

  );


};








