import React, { Suspense, useRef } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

const App = () => {
  const classes = useStyles();
  const main = useRef(null)
  const Details = React.lazy(() => import('./components/Details/Details'));
  const Main = React.lazy(() => import('./components/Main/Main'));

  return (
    <div>
      <ImageList rowHeight={180} >
        <ImageListItem cols={2} rows={1}>
          <ImageListItemBar
            title={"Expenses"}
            subtitle={"Expense tracker"}
            position="bottom" 
            actionPosition="left" 
          />
        </ImageListItem> 
     </ImageList> 
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid ref={main} item xs={12} sm={4} className={classes.main}>
         <Suspense fallback={<>Loading</>}>
          <Main />
         </Suspense>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Suspense fallback={<>Loading</>}>
            {<Details title="Expense" />}
          </Suspense>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
