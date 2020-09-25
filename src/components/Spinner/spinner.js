import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Map from '../../images/illustrations/undraw_Around_the_world_re_n353.svg';


import './spinner.css';
const Spinner = () => {
	return (
		<Grid
			container
			direction="row"
			style={{ display: 'flex', flexDirection: 'row', paddingBottom: '5%' }}
		>
			<Grid item xs style={{ alignItems: 'center', textAlign: 'center' }}>
				<h4
					style={{
						fontSize: '2em',
						color: '#6C63FF',
						textAlign: 'center',
						lineHeight: 1.2,
					}}
				>
					Welcome to Africa
					<br /> Skills Hub
				</h4>
				<h6 style={{ opacity: 0.4, fontSize: '1.9em', textAlign: 'center' }}>
					Formerly Africa Internship Academy
				</h6>

				<Link to="/about">
					<Button
						variant="contained"
						color="primary"
						style={{ borderRadius: 30 }}
						id="stubborn-image-style"
					>
						Read More
					</Button>
				</Link>
			</Grid>
			<Grid
				item
				xs
				style={{ marginLeft: '10%', paddingTop: '0', marginTop: 0 }}
				id="stubborn-image-style"
			>
				<img src={Map} width="100%" auto="auto" alt="map illustration" />
			</Grid>
		</Grid>
	);
};
export default Spinner;
