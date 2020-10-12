import React, { useState } from 'react';
import Car from './Interactive-items/Car';
import PaperPlane from './Interactive-items/PaperPlane';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import PieChart from './charts/PieChart';

export default function Scene() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: 'block' }}>
      <img src="./imgs/scene.png" alt="Scene" style={{ width: '70vw', marginLeft: '-5vw', userSelect: 'none' }} />
      <Car clickAction={handleClickOpen} />
      <PaperPlane clickAction={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <IconButton onClick={handleClose} style={{ marginLeft: '95%' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <PieChart />
          <DialogContentText id="alert-dialog-description" style={{ marginTop: -150, padding: '1rem' }}>
            <p className="modal-title">Juvenile Justice Referral Offense Profile for Girls</p>
            <p style={{ fontWeight: 400 }}>
              Girls account for 27% of referrals to the U.S. juvenile justice system. Just one-third of girls’ referrals
              are for violent (person) offenses, and most violent offense referrals are for simple assault.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
