import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
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


export const CustomerListToolbar = (props) => {
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
    console.log(formValues);
    // TODO: pass to api
    // await axios({
    //   method: 'post',
    //   url: 'http://localhost:8000/nlp_test',
    //   data: {
    //     user_input: `${formValues}`
    //   }
    // })
    // .then((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // });
    const test = await axios.get('http://localhost:8000/nlp_test?user_input=' + `${formValues}`);
    setResult(test.data);
    // console.log(test.data);
  }

  // function ControlSection(result) {
  //   // Object.entries(result).map(([key, value]) => {  
  //   //   console.log(key, value);
  //   // });
  //   const resultArr = _.toArray(result);
  //   resultArr.map((key, value) => console.log(key.Code));
  //   return (
  //     resultArr.map((key) => {
  //           <Typography>
  //             1. 
  //           </Typography>
  //     })
  //   );
  const controlSection = _.toArray(result).map((data, i) => {
    console.log(result)
    return (
      <tr key={i}>
      {/* <td>{i+1}</td> */}
      {
        Object.entries(data).map(val => {
        return <div>
          <td>{val[0]}: {val[1]}</td>
          <br />
        </div>
          })
        }
   </tr>
      // <tr key={index}>
      //   <td>{index+1}</td>
      //   {/* {
      //       Object.keys(data) //Returns array of all keys: Array ["number", "name", "type", "contact"]
      //   } */}
      //   {
      //     Object.values(data).map(val => {
      //        return <td>{val}</td>;
      //      })
      //   }
      //   <td></td>
      // </tr>
    );
  });
    

    // if (typeof Object.keys(result) !== 'undefined' && Object.keys(result).length > 0) {
    //   // You have an array 
      //   return (
      //     <div className='result'>
      //         {
      //             Object.entries(result).map(([key, val]) => 
      //                 <h2 key={key}>{key}: {val}</h2>
      //             )
      //         }
      //     </div>
      // );
    // }
    


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
                    placeholder="what is the region with Code AFG?"
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
              {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                something
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography> */}

              {controlSection}
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
      
      

  );


};








