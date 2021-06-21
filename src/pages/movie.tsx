import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {fetchAPI} from '../utils/fetchAPI'
import Grid from '@material-ui/core/Grid';
import {MovieType, IMovieParams} from '../types'

const Movie = ()=>{
    let { id }  = useParams<IMovieParams>();
    let [movie, setMovie] = useState<MovieType | null>()
    useEffect(()=>{
        fetchAPI({i: id, r:'json'}).then((res)=>{
            setMovie(res.data)
        })
    }, [id])
    return (
        !movie?<h1>LOADING...</h1>:
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <img src={movie.Poster} alt='Poster' style={{float: 'right'}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <h1>{movie.Title}</h1>
                <h4><strong>Genre</strong> {movie.Genre}</h4>
                <h4><strong>Actors</strong> {movie.Actors}</h4>
                <h4><strong>Director</strong> {movie.Director}</h4>
                <h4><strong>Year</strong> {movie.Year}</h4>
            </Grid>
        </Grid>
    )
}

export default Movie;