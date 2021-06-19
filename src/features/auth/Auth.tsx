import React, { useState } from 'react';
import Styles from './Auth.module.css';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import {
  toggleMode,
  fetchAsyncLogin,
  fetchAsyncRegister,
  fetchAsyncCreateProf,
  selectIsLoginView,
} from './authSlice';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(3),
  },
}));

const Auth: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      
    </div>
  )
};

export default Auth
