import React from 'react'
import { Card, Grid, Typography, Button } from '@material-ui/core'
import styles from './styles'
import { withRouter } from 'react-router-dom'

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {

    const classes = styles();
    console.log()
    const handleSeeMovie = () => {
        history.push(`/movies/${imdbID}`)
    }
    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster} />
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color="primary" variant="contained" onClick={handleSeeMovie}>Ver más</Button>
                </Grid>
            </Grid>
        </Card>
    )
}
export default withRouter(MovieResult);