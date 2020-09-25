import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
const Approach = () => {
	return (
		<ScrollAnimation
			animateIn="fadeInRight"
			animateOut="fadeOutLeft"
			delay={500}
		>
			<Grid
				container
				justify="center"
				alignItems="center"
				style={{
					backgroundColor: '#e5e6ea',
					paddingBottom: '10%',
					marginTop: '5%',
					marginBottom: '10%',
					paddingLeft: '5%',
					paddingRight: '5%',
				}}
				id="align-text-center"
			>
				<Grid item xs={12} lg={12} sm={12} md={12}>
					<h1
						style={{
							textAlign: 'center',
							fontSize: '1.7em',
							color: '#6C63FF',
							fontWeight: 'bold',
						}}
					>
						Our Approach
					</h1>
				</Grid>
				<Grid item xs={12} lg={12} sm={12} md={12}>
					<div>
						<p
							style={{
								fontSize: '1.4em',
								opacity: 0.4,
								lineHeight: '1.2em',
							}}
						>
							Our learning model is built around the ‘Work Integrated Learning
							Model’ which is described as more of work and learn principle. As
							a youth employment accelerator and business incubator we combine
							both online and offline learning and coaching tools to...
						</p>
					</div>

					<Button
						variant="contained"
						color="secondary"
						style={{ borderRadius: 30 }}
					>
						<a href="/about/#approach">Read More</a>
					</Button>
				</Grid>
			</Grid>
		</ScrollAnimation>
	);
};
export default Approach;
