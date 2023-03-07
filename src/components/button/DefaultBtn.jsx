import React from 'react';
import {Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function DefaultBtn(props) {
  return (
    <>
      <Stack spacing={2} direction="row" className='flex flex-row justify-start items-center w-full'>
          <Button className='!w-full !h-full !border-2 border-solid !border-3a5a40 !text-3a5a40 !rounded-none hover:!bg-inherit focus:bg-inherit' variant="outlined" onClick={props.onClick}>
              <Link className='w-full h-full !font-Urbanist !text-2xl !uppercase !text-3a5a40 max-sm:!text-xl' to={props.path}>
                {props.name}
              </Link>
          </Button>
      </Stack>
    </>
  );
}
