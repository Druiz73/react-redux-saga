import React, { useState } from 'react';
import { Container, Typography, Grid, Card, TextField, Button } from '@material-ui/core'
import styles from './styles'
import { MovieIcon } from '../../icons/index'

export default ({history}) => {
	
	const [searchText, setSearchText] = useState('')
	const classes = styles();

	const handleSearchText = event => {
		setSearchText(event.target.value)
	}

	const handleCleanClick = event => {
		setSearchText('')
	}

	const handleSearchClick = event => {
		history.push(`/results?movieName=${searchText}`)
	}


	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer} >
					<Grid >
						<Typography className={classes.title}>BIENVENIDO</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon} />
					</Grid>
				</Grid>
				<TextField
					className={classes.textFieldSearch}
					value={searchText}
					placeholder='Buscar...'
					onChange={handleSearchText}
				/>
				<Grid className={classes.buttonsContainer}>
					<Button variant='contained' onClick={handleCleanClick}>Limpiar</Button>
					<Button className={classes.searchButton} variant='contained' onClick={handleSearchClick} color="primary" size="large">Buscar</Button>
				</Grid>
			</Card>
		</Container>
	)
}
