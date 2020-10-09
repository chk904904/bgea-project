import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InteractiveItem from './InteractiveItem';

export default function Story() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        height: '90vh',
        width: '60vw',
        marginLeft: '17vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem',
        backgroundColor: '#efeeee',
      }}
    >
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        interactive item
      </Button>
      <InteractiveItem clickAction={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">In Allegheny county, black girls are:</DialogTitle>
        <DialogContent>
          <div>
            <h1 style={{ color: '#4f0dd2' }}>13x</h1>
          </div>
          <DialogContentText id="alert-dialog-description">
            more likely than white girls to be arrested by the Pittsburgh Police.
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
