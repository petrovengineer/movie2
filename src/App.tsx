import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux';
import "./css/App.css";
import store from "./store";
import List from "./pages/list";
import Movie from "./pages/movie";
import { Switch, Route, useHistory } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {IRootState} from './types';
import {MovieType} from './types';

function App() {
  const movies = useSelector((state: IRootState) => state.movies)
  const [title, setTitle] = useState('');
  let history = useHistory();
  useEffect(()=>{
    store.dispatch({type:"MOVIES_FETCH_REQUESTED", payload:{s: title, r:'json', }})
  }, [title])

  return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Autocomplete
            id="combo-box"
            disableCloseOnSelect
            options={movies}
            getOptionLabel={(option) => option.Title}
            style={{ width: 300, float: 'right' }}
            renderInput={(params) => <TextField {...params} label="Поиск фильма" variant="outlined" />}
            inputValue={title}
            onInputChange={(event, newTitle) => {
              setTitle(newTitle);
            }}
            onChange={(event, newValue: MovieType | null):void => {
              if(newValue){
                history.push('/movie/' + newValue.imdbID)
              }
            }}
          />              
        <Button variant="contained" color="secondary" onClick={()=>{history.push('/')}}>
          Home
        </Button>
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route exact path="/">
              <List data={movies}/>
            </Route>
            <Route path="/movie/:id">
              <Movie/>
            </Route>
          </Switch>
        </Grid>
      </Grid>
  );
}

export default App;
