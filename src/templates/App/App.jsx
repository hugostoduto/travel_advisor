import { CssBaseline, Grid } from '@material-ui/core';
import Header from "../../component/Header/Header"
import { Map } from '../../component/Map/Map';
/* import { PlaceDetails } from '../../component/PlaceDetails/PlaceDetails'; */
import { List } from '../../component/List/List';

export const App = () => {
  return (
    <>
      <CssBaseline />

      <Header/>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          {/* <Map /> */}
        </Grid>
      </Grid>
    </>
  );
};
