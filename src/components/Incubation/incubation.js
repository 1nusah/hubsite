import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Flicker from '../../images/flicker_img1.jpg';
import './incubation.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
const Incubation = () => {
	return (
		<Grid
			container
			style={{
				paddingLeft: '5%',
				paddingRight: '5%',
			}}
		>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<ScrollAnimation
					animateIn="bounceInRight"
					animateOut="bounceOutLeft"
					animateOnce={true}
					delay={500}
				>
					<img
						src={Flicker}
						width="100%"
						height="auto"
						alt="flicker "
						style={{ textAlign: 'center' }}
					/>
				</ScrollAnimation>
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={6}
				lg={6}
				style={{ color: '#fff', backgroundColor: '#00042a' }}
			>
				<ScrollAnimation
					animateIn="bounceInLeft"
					animateOut="bounceOutRight"
					animateOnce={true}
					delay={500}
				>
					<h1>Business Incubation</h1>

					<h3 style={{ fontWeight: 'lighter' }}>
						Africa Skills Hub is proud to incubate 30% of graduates with ideas
						to start a business in Ghana
					</h3>
					<h3 style={{ fontWeight: 'lighter' }}>We support Businesses</h3>
					<h3>We encourage young people to start businesses</h3>

					<h3 style={{ fontWeight: 'lighter' }}>
						We provide business support services to small and medium enterprises
						in Ghana in order to enhance their income generation capacities with
						a view to achieving sustainable growth, employment creation and
						poverty alleviation.
					</h3>
					<div style={{ textAlign: 'center', paddingBottom: '5%' }}>
						<Button
							variant="contained"
							color="secondary"
							style={{ borderRadius: 30 }}
						>
							Join Our Community
						</Button>
					</div>
				</ScrollAnimation>
			</Grid>
		</Grid>
	);
};
export default Incubation;
