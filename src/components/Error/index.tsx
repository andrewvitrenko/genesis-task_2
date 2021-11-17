import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Snackbar } from '@mui/material';
import { Store } from '../../interfaces';

export const Error: React.FC = () => {
  const { error } = useSelector((store: Store) => store);
  const [ open, setOpen ] = useState<boolean>(true);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={3000}
      message={error}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
    />
  );
};
