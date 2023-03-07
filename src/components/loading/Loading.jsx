import React from 'react';
import './Loading.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <div className='loading '>
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    </div>
  );
}
