import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MDBBtn} from 'mdb-react-ui-kit';
import TextField from '@mui/material/TextField';

export default function AddGameReview() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  return (
    <div>  <MDBBtn onClick={handleClickOpen}>Add an Online Game Review</MDBBtn>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      ><form method="POST" action="http://localhost:81/games">
        <DialogTitle id="alert-dialog-title">
          {"add new online game review"}
        </DialogTitle>
        <DialogContent>
          <input id="name" label="name" variant="outlined" margin="normal" />
            <br></br>
            <TextField id="outlined-basic" label="url" variant="outlined" margin="normal"/>
            <br></br>
            <TextField id="outlined-basic" label="rating" variant="outlined" margin="normal"/>
          </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleClose} autoFocus>save</Button>
          <Button onClick={handleClose}>
            cancel
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
