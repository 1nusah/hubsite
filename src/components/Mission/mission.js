import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MissionPic from '../../images/mission.jpg';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import './mission.css';
const Mission = () => {
	return (
		<Grid
			style={{
				backgroundColor: '#f1f1f1',
				paddingTop: '2%',
			}}
			container
			id="container-grid-style"
		>
			<Grid
				item
				xs={12}
				sm={12}
				md={6}
				lg={6}
				style={{ color: '#333', paddingLeft: '5%', paddingRight: '5%' }}
			>
				<ScrollAnimation
					animateIn="fadeInLeft"
					animateOut="fadeOutRight"
					animateOnce={true}
					delay={500}
				>
					<h1 style={{ fontSize: '1.7em', lineHeight: '1.2em', opacity: 0.4 }}>
						Our Mission
					</h1>
					<h3 style={{ fontSize: '1.3em', lineHeight: '1.2em', opacity: 0.4 }}>
						We are intentional about upskilling African talent and breaking
						traditional barriers to work for millions of African youth.
					</h3>
					<div style={{ textAlign: 'center' }}>
						<Button
							variant="contained"
							color="secondary"
							style={{ borderRadius: 30 }}
						>
							Learn More
							<ArrowForwardIcon style={{ color: '#fff' }} />
						</Button>
					</div>
				</ScrollAnimation>
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={6}
				lg={6}
				style={{ paddingLeft: '5%', paddingRight: '5%' }}
			>
				<ScrollAnimation
					animateIn="fadeInRight"
					animateOut="fadeOutLeft"
					animateOnce={true}
					delay={500}
				>
					<img
						src={MissionPic}
						width="100%"
						alt="mission"
						height="auto"
						text-align="center"
					/>
				</ScrollAnimation>
			</Grid>
		</Grid>
	);
};
export default Mission;
