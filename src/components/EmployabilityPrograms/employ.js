import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EmployPic from '../../images/9.jpg';
import { Link } from 'react-router-dom';
const Employ = () => {
	return (
		<Grid
			container
			style={{ marginBottom: '10%', paddingLeft: '3%', paddingRight: '3%' }}
		>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<ScrollAnimation
					animateIn="fadeInRight"
					animateOut="fadeOutLeft"
					delay={500}
					animateOnce={true}
				>
					<img src={EmployPic} width="100%" height="auto" alt="trainee " />
				</ScrollAnimation>
			</Grid>
			<Grid item xs={12} sm={12} md={6} lg={6} style={{ paddingLeft: '5%' }}>
				<ScrollAnimation
					animateIn="fadeInLeft"
					animateOut="fadeOutRight"
					delay={500}
					animateOnce={true}
				>
					<div>
						<h3
							style={{
								fontSize: '1.7em',
								color: '#6C63FF',
								borderBottom: '5px solid  #ffc266',
								maxWidth: '100%',
							}}
						>
							Employabillity Programs
						</h3>
						<h3
							style={{
								color: '#6C63FF',
								fontSize: '1.5rem',
								lineHeight: '1.2em',
							}}
							id="align-text-center"
						>
							Youth Employment Accelerator
						</h3>
						<h3 style={{ opacity: 0.4, fontSize: '1.3em' }}>
							A structured career Bootcamp to equip entry-level graduates and
							potential jobseekers with the skills and confidence that employers
							are looking for.
						</h3>
					</div>
					<div style={{ textAlign: 'center' }}>
						<Button
							variant="contained"
							color="secondary"
							style={{ borderRadius: 30 }}
						>
							<Link to="/about">Apply</Link>
							<ArrowForwardIcon color="#fff" />
						</Button>
					</div>
				</ScrollAnimation>
			</Grid>
		</Grid>
	);
};

export default Employ;
