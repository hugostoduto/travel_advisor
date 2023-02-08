import P from 'prop-types';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery, Paper, Typography } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from './styles.js';

export const Map = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const coords = { lat: 0, lng: 0 }
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      />
    </div>
  )
};

Map.propTypes = {
  children: P.node.isRequired,
};
