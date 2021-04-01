import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    borderBottom: 'none',
    backgroundColor: '#212122',
    color: '#fff',
    textAlign: 'center',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: '#ffffff',
    '&:hover': {
      color: '#e2716f',
    },
  },
  myButton: {
    color: '#FFF',
    '&:hover': {
      color: '#e2716f',
    },
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    border: 'none',
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3),

    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant='contained'
        color='default'
        className='btn-on-hover'
        onClick={handleClickOpen}
        size='small'
        style={{ color: '#fff', backgroundColor: '#5b84b1' }}
        onMouseLeave={() => props.changeBorderColor(false)}
        onMouseEnter={() => props.changeBorderColor(true)}
      >
        EXPAND
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        maxWidth='lg'
        style={{ margin: 'auto 0' }}
      >
        <DialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
          style={{ padding: '1.5rem 0' }}
        >
          <span style={{ fontSize: '1.1rem', letterSpacing: '0.7px' }}>
            <Slide left>{props.name}</Slide>
          </span>
        </DialogTitle>

        <DialogContent
          dividers
          style={{
            backgroundColor: '#212122',
            color: 'white',
            textAlign: 'justify',
            padding: '0 2rem',
          }}
        >
          <Fade top>
            <Typography gutterBottom style={{ fontFamily: 'Red Hat Display' }}>
              {props.expandedDescription}
              <span>
                <GitHubIcon
                  onClick={() => window.open(`${props.githubLink}`, '_blank')}
                  style={{
                    cursor: 'pointer',
                    verticalAlign: 'top',
                    margin: '0 0.5rem',
                  }}
                />
              </span>
            </Typography>
          </Fade>
        </DialogContent>
        <DialogActions
          style={{
            backgroundColor: '#212122',
            color: 'white',
            justifyContent: 'center',
            borderTop: 'hidden',
            paddingBottom: '2rem',
          }}
        >
          <Button
            autoFocus
            onClick={handleClose}
            variant='contained'
            color='default'
            style={{
              width: '10rem',
              fontSize: '800',
              color: '#fff',
              backgroundColor: '#5b84b1',
            }}
            className='btn-on-hover'
            target='_blank'
            href={props.url}
          >
            Visit Website
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
