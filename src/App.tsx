import React from 'react';
import Bugsnag from '@bugsnag/js'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Button } from '@mui/material';
// Services
import { successFetch, unauthorizedFetch, forbiddenFetch, undefinedFetch, timeoutFetch, throwError, throwErrorAPIService, runOutOfMemory } from './services/yahoo-service';


function App() {
  const [statusCode, setStatusCode] = React.useState<number>(0);

  const handleSuccessClick = async () => {
    const response = await successFetch('TSLA');
    setStatusCode(response || 0);
  };
  const habdleUnauithorizedClick = async () => {
    const response = await unauthorizedFetch('TSLA');
    setStatusCode(response || 0);
  }
  const habdleForbiddenClick = async () => {
    const response = await forbiddenFetch('TSLA');
    setStatusCode(response || 0);
  }
  const habdleUndefinedClick = async () => {
    const response = await undefinedFetch('TSLA');
    setStatusCode(response || 0);
  }
  const habdleTimeOutClick = async () => {
    await timeoutFetch('TSLA');
  }
  const handleThrowError = () => {
    throw new Error('Throw Error');
  }
  const handleThrowErrorService = () => {
    throwError('TSLA');
  }
  const handleThrowErrorAPI = () => {
    throwErrorAPIService('TSLA');
  }
  const handleOutMemory = () => {
    runOutOfMemory('TSLA');
  }
  const handleManualBugsnag = () => {
    Bugsnag.notify(new Error('Manual Bugsnag'));
  }
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Result {statusCode}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleSuccessClick}
            >Scucess Fetch</Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              onClick={habdleUnauithorizedClick}
            >Unauthorized Fetch</Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              onClick={habdleForbiddenClick}
            >Forbbiden Fetch</Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              onClick={habdleUndefinedClick}
            >Undefined Fetch</Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              onClick={habdleTimeOutClick}
            >Timeout Fetch</Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleThrowError}
            >Throw Error APP
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleThrowErrorService}
            >Throw Error Service
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleThrowErrorAPI}
            >Throw Error API
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleOutMemory}
            >Run Out Of Memory
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleManualBugsnag}
            >Manual Bugsnag Error
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
