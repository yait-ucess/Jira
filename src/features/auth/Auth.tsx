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
  const dispatch: AppDispatch = useDispatch();
  const isLoginView = useSelector(selectIsLoginView);
  const [credential, setCredential] = useState({ username: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setCredential({ ...credential, [name]: value });
  };

  const login = async () => {
    if (isLoginView) {
      await dispatch(fetchAsyncLogin(credential));
    } else {
      const result = await dispatch(fetchAsyncRegister(credential));
      if (fetchAsyncRegister.fulfilled.match(result)) {
        await dispatch(fetchAsyncLogin(credential));
        await dispatch(fetchAsyncCreateProf());
      }
    }
  }

  return (
    <div>
      
    </div>
  )
};

export default Auth
