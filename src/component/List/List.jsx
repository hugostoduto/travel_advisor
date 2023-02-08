
import React, { useState } from 'react';
import { CircularProgress, grid, InputLabel, MenuItem, FormControl, Select, Typography, Grid } from '@material-ui/core';
import useStyles from './styles.js';
import { PlaceDetails } from '../PlaceDetails/PlaceDetails'





export const List = () => {
  const classes = useStyles()

  const [type, setType] = useState('restaurant')
  const [raitng, setRaitng] = useState('restaurant')


  const places = [
    { name: "cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
  ]
  return (

    <div className={classes.container}>
      <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurantes</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>

        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={raitng} onChange={(e) => setRaitng(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.0</MenuItem>

        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, index) => (
          <Grid item xs={12} key={index} >
            <PlaceDetails place={place.name} />

          </Grid>
        ))}
      </Grid>
    </div>
  )
};


