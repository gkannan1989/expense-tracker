import React, { useRef } from 'react';
import { Grid } from '@material-ui/core';
import { Details, Main } from './components';
import useStyles from './styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

const App = () => {
  const classes = useStyles();
  const main = useRef(null)

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
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={4} className={classes.main}>
          <Main />
        </Grid>
        {/* <Grid item xs={12} sm={4} className={classes.desktop}> */}
           {/* <Details title="Income" /> */}
        {/* </Grid> */}
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        {/* <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer> */}
      </Grid>
    </div>
  );
};

export default App;
