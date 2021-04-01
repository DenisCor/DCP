import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';

import { sendForm } from 'emailjs-com';

const useStyles = makeStyles({
  textField: {
    width: '100%',
    height: '100%',
    margin: '0.4rem auto ',
    color: 'white',
    '& .MuiOutlinedInput-root': {
      '&:focused': {
        color: 'white',
      },
      '& fieldset': {
        border: '1px solid white',
        color: 'white',
      },
      '&.Mui-focused fieldset': {
        '&:focused': {
          color: 'white',
        },
        border: '1px solid white',
        color: 'white',
      },
    },
    '& .MuiOutlinedInput-root:hover': {
      '& fieldset': {
        border: '1px solid white',
      },
      '&.Mui-focused fieldset': {
        '&:focused': {
          color: 'white',
        },
        border: '1px solid white',
        color: 'white',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
      fontFamily: 'Red Hat Display',
      fontSize: 'small',
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
  },
  errorBorder: {
    width: '100%',
    height: '100%',
    margin: '0.4rem auto ',
    color: 'white',
    '& .MuiOutlinedInput-root': {
      '&:focused': {
        color: 'white',
      },
      '& fieldset': {
        border: '1px solid #e2716f',
        color: 'white',
      },
      '&.Mui-focused fieldset': {
        '&:focused': {
          color: 'white',
        },
        border: '1px solid #e2716f',
        color: 'white',
      },
    },
    '& .MuiOutlinedInput-root:hover': {
      '& fieldset': {
        border: '1px solid #e2716f',
      },
      '&.Mui-focused fieldset': {
        '&:focused': {
          color: 'white',
        },
        border: '1px solid #e2716f',
        color: 'white',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#e2716f',
      fontFamily: 'Red Hat Display',
      fontSize: 'small',
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
  },
  error: {
    color: '#e2716f',
  },
});

const ContactForm = () => {
  const [alert, setAlert] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const handleAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 4000);
  };

  const onSubmit = (data, e) => {
    // console.log(data);
    handleAlert();
    sendForm(
      'service_l29j25r',
      'template_813tlia',
      '#contact-form',
      'user_ediYeNQxP6TQjiwzSf0XU'
    ).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
    e.preventDefault();
    e.target.reset();
  };

  const classes = useStyles();

  return (
    <div className='contact-form'>
      <form
        noValidate
        autoComplete='off'
        id='contact-form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          required
          className={errors.name ? classes.errorBorder : classes.textField}
          label='Enter Name'
          variant='outlined'
          autoComplete='name'
          name='name'
          type='text'
          id='name'
          inputRef={register({
            required: 'Please enter your name',
          })}
        />

        {errors.name && (
          <span className={classes.error}>{errors.name.message}</span>
        )}

        <br />
        <TextField
          required
          label='Enter Email'
          autoComplete='email'
          variant='outlined'
          className={errors.email ? classes.errorBorder : classes.textField}
          name='email'
          id='email'
          type='email'
          inputRef={register({
            required: 'Please enter your email address',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please provide a valid email address',
            },
          })}
        />
        {errors.email && (
          <span className={classes.error}>{errors.email.message}</span>
        )}

        <br />
        <TextField
          required
          label='Enter Subject'
          variant='outlined'
          className={errors.subject ? classes.errorBorder : classes.textField}
          autoComplete='subject'
          name='subject'
          type='text'
          id='subject'
          inputRef={register({
            required: 'Please enter a subject',
          })}
        />
        {errors.subject && (
          <span className={classes.error}>{errors.subject.message}</span>
        )}
        <br />

        <TextField
          required
          label='Type Message'
          variant='outlined'
          multiline
          label='Type Message'
          rows='11'
          margin='normal'
          className={errors.message ? classes.errorBorder : classes.textField}
          autoComplete='message'
          name='message'
          type='text'
          id='message'
          inputRef={register({
            required: 'Please enter your message',
          })}
        />
        {errors.message && (
          <span className={classes.error}>{errors.message.message}</span>
        )}
        <br />
        {alert && (
          <Alert
            variant='filled'
            severity='success'
            style={{
              backgroundColor: '#5b84b1',
              fontFamily: ' Red Hat Display',
            }}
          >
            Message successfully sent!
          </Alert>
        )}

        <Button
          type='submit'
          variant='contained'
          style={{
            marginTop: '2rem',
            width: '10rem',
            fontSize: '800',
            color: '#fff',
            backgroundColor: '#5b84b1',
          }}
          className='btn-on-hover'
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
