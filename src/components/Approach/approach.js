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
				style={{
					// paddingBottom: '10%',
					marginTop: '5%',
					// marginBottom: '10%',
					paddingLeft: '3%',
					paddingRight: '3%',
				}}
			>
				<Grid
					item
					xs={12}
					lg={12}
					sm={12}
					md={12}
					style={{ backgroundColor: '#e5e6ea' }}
				>
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
				<Grid
					item
					xs={12}
					lg={12}
					sm={12}
					md={12}
					style={{ backgroundColor: '#e5e6ea' }}
				>
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
					<div style={{ textAlign: 'center', marginBottom: '5%' }}>
						<Button
							variant="contained"
							color="secondary"
							style={{ borderRadius: 30 }}
						>
							<a href="/about/#approach">Read More</a>
						</Button>
					</div>
				</Grid>
			</Grid>
		</ScrollAnimation>
	);
};
export default Approach;
