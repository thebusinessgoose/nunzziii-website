import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import {ReactComponent as MessageIcon} from '../../assets/message.svg';
import {ReactComponent as SendIcon} from '../../assets/paperplane.svg';
import './contact-popup.styles.scss';
import ContactForm from '../contact-form/contact-form.component';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='contact'>
    
      <div className='button-text' onClick={handleClickOpen}>
        <MessageIcon className='message-icon'/>
        Contact
      </div>
      <Dialog className='contact-box' onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle className='dialogue-title' id="customized-dialog-title" onClose={handleClose}>
          <div className='contact-heading'>
          Contact Us
          </div>
          <div className='sub-heading'>
              Please use this contact form to get in touch with Nunzziii if you have any questions.
              Our team will get back to you as soon as possible.
          </div>
        </DialogTitle>
        <DialogContent className='contact-content' dividers>
          <Typography gutterBottom>
            <ContactForm />
          </Typography>
        </DialogContent>
        <DialogActions className='dialogue-actions'>
          <div className='send-button' autoFocus onClick={handleClose} color="primary">
            Send
            <SendIcon className='send-icon'/>
          </div>
        </DialogActions>
      </Dialog>

    </div>
  );
}
