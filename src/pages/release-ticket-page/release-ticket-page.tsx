import React, { useCallback, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Button, Stack } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import Box from "@mui/material/Box/Box";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from "@mui/system/styled";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { MiddleDivider } from "../../components/shared-components/dividers/middle-divider";
import { PageContainer } from "../../components/shared-components/page-container/page-container";
import StepComponent from "../../components/steps/steps";

const mockSteps = ['Release type', 'Ticket details', 'Release shedule'];

const Input = styled('input')({
  display: 'none',
});

const getObjectURL = (file: any) => { 
  var url = null; 
  if ((window as any).createObjcectURL!= undefined) { 
    url = (window as any).createOjcectURL(file);
  } else if (window.URL != undefined) {
    url = window.URL.createObjectURL(file);
    
  } else if (window.webkitURL != undefined) { 
    url = window.webkitURL.createObjectURL(file);
  } 
  console.log('url=>')
  console.log(url)
  return url; 
}

export const ReleaseTicketPage = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [detailKeyValues, setDetailKeyValues] = useState([0,1]) //0 is to keep track of how many key-value pairs are there in this page, without 0 it when delete all input key will be null when read detailKeyvalues[len(detailKeyvalues) - 1], casuing bug
  const [uploadImgs, setUploadImgs] = useState<string[]>([])
  const [startTimeValue, setStartTimeValue] = React.useState<Date | null>(new Date());
  const [endTimeValue, setEndTimeValue] = React.useState<Date | null>(new Date());
  const params = useParams()  
  const navigate = useNavigate()
  console.log(params.releaserID) 

  const finishHandler = useCallback(() => {
    console.log('Finish a Release')
    navigate('/')}, [])

  return (
    <PageContainer>
      <Typography variant="h5" sx={{marginBottom: '50px'}}>
        Release Tickets
      </Typography>
      <Box sx={{marginBottom: '35px'}}>
        <StepComponent updateFormActiveStep={(num: number) => setActiveStep(num)} finishHandler={finishHandler} displaySteps={mockSteps} />
      </Box>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        {activeStep === 0?
          
            <Box sx={{border: '1px solid', borderColor: '#eceff1', padding: '20px', width: '800px'}}>
              <Stack direction='column' spacing={2} alignItems='center'>
                <Box>
                  <Typography variant="h6" sx={{marginBottom: '15px'}}>
                    发行方式
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['抽签', '拍卖', '普通购买']}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select a type" />}
                  />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{marginBottom: '15px'}}>
                    发售数量
                  </Typography>
                  <TextField id="filled-basic" label="Please input integer" variant="outlined"  sx={{ width: '300px' }}/>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{marginBottom: '15px'}}>
                    价格
                  </Typography>
                  <TextField id="filled-basic" label="Please input number" variant="outlined"  sx={{ width: '300px' }}/>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{marginBottom: '15px'}}>
                    未来交易手续费
                  </Typography>
                  <TextField id="filled-basic" label="Percentage ( % ) " variant="outlined"  sx={{ width: '300px' }}/>
                </Box>
              </Stack>
            </Box>
          
          :
          (activeStep === 1?
            <Box sx={{border: '1px solid', borderColor: '#eceff1', padding: '20px', width: '800px', display: 'flex', justifyContent: 'center'}}>
              <Stack direction='column' spacing={2}>
                <Box>
                  <Typography variant="h6" sx={{marginBottom: '15px'}}>
                    Overall Description
                  </Typography>
                  <TextField
                    id={`detail_des${detailKeyValues}`}
                    rows={4}
                    label="description text"
                    sx={{ width: '600px' }}
                    multiline
                  />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ marginBottom: '15px' }}>
                    Detail Description
                  </Typography>
                  <Stack direction='column' spacing={2}>
                    {detailKeyValues.map(key => {
                      if (key !== 0){
                        return (
                          <Stack direction='row' spacing={2} key={`keyValue_${key}`}>
                            <TextField
                              id={`detailKey_${key}`}
                              label="details type"
                              placeholder="exp: Modal"
                            />
                            <TextField
                              id={`detailKey_${key}`}
                              label="detail description"
                              placeholder="exp: Modal Number"
                            />
                            {/* TODO fix bug when delete all key-value pairs */}
                            <Button color="error" onClick={() => setDetailKeyValues(detailKeyValues.filter(detailkey => detailkey !== key))}> 
                              <DeleteIcon/>
                            </Button>
                          </Stack>
                        )
                      }
                      return null
                    })}
                  </Stack>
                  <Button variant="outlined" sx={{marginTop: '20px'}} onClick={() => setDetailKeyValues([...detailKeyValues, detailKeyValues[detailKeyValues.length-1] + 1])}>
                    <AddIcon/>
                  </Button>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ marginBottom: '15px' }}>
                    Detail Description
                  </Typography>
                  <Stack direction='column' spacing={2}>
                    <Stack direction='row' spacing={2}>
                      {uploadImgs.map((uploadImg, index) => (
                        <Stack direction='column' spacing={2} id={`uploadImg_releaseTicket_${index}`}>
                          <img src={uploadImg} alt={`uploadImg_${index}`} style={{width: '200px', height: '200px', border: '1px solid', borderColor: '#424242'}}/>
                          <Button color="error" onClick={() => setUploadImgs(uploadImgs.filter(uli => uli !== uploadImg))}> 
                            <DeleteIcon/>
                          </Button>
                        </Stack>
                      ))}
                    </Stack>
                    <label htmlFor="releaseTicket_detail_uploadFile">
                      <Input  id="releaseTicket_detail_uploadFile" multiple type="file" 
                        onChange={(e: any) => {
                          const uploadFile = document.getElementById("releaseTicket_detail_uploadFile") as any;
                          const uploadFileSRC = uploadFile.files[0]
                          setUploadImgs([...uploadImgs, getObjectURL(uploadFileSRC)])}}
                      />
                      <Button variant="contained" component="span">
                        Upload
                      </Button>
                    </label>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            :
            <Box sx={{border: '1px solid', borderColor: '#eceff1', padding: '20px', width: '800px', display: 'flex', justifyContent: 'center'}}>
              <Stack direction='column' spacing={5}>
                <Stack direction='column' spacing={2}>
                  <Typography variant="h6" >
                    Release Start Time
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} sx={{width: '450px'}} />}
                      label="Release Start Time"
                      value={startTimeValue}
                      onChange={(newValue) => {
                        setStartTimeValue(newValue);
                      }}
                    />
                  </LocalizationProvider>
                </Stack>
                <Stack direction='column' spacing={2}>
                  <Typography variant="h6">
                    Release End Time
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} sx={{width: '450px'}} />}
                      label="Release End Time"
                      value={endTimeValue}
                      onChange={(newValue) => {
                        setEndTimeValue(newValue);
                      }}
                    />
                  </LocalizationProvider>
                </Stack>
              </Stack>
            </Box>
          )
        }
      </Box>
    </PageContainer>
  )
}



