import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MDBBtn} from 'mdb-react-ui-kit';
import TextField from '@mui/material/TextField';



export default function EditGameReview(props) {
  const {selectedValue, selectedName, selectedUrl, selectedRating, open, onClose} = props

    function handleClose() {
      onClose()
  };

  function handleCancel() {
    onClose()
  };

  return (
    <div>  
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      ><form method="POST" action={"http://localhost:81/games/"+selectedValue}>
        <DialogTitle id="alert-dialog-title">
          {"edit new online game review"}
        </DialogTitle>
        <DialogContent>
            <TextField defaultValue={selectedName} name="name" id="name" label="game name" variant="outlined" margin="normal" />
            <br></br>
            <TextField defaultValue={selectedUrl} name="url" id="outlined-basic" label="game url" variant="outlined" margin="normal"/>
            <br></br>
            <TextField  defaultValue={selectedRating} name="rating" id="outlined-basic" label="game rating" variant="outlined" margin="normal"/>
          </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleClose} autoFocus>save</Button>
          <Button onClick={handleCancel}>
            cancel
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
