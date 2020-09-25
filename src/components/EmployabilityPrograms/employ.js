import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EmployPic from '../../images/9.jpg';
import './employ.css';
const Employ = () => {
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			id="align-text-center"
			style={{ marginBottom: '10%' }}
		>
			<Grid item xs={12} md={6} sm={12} lg={6} stlye={{ textAlign: 'center' }}>
				<ScrollAnimation
					animateIn="fadeInRight"
					animateOut="fadeOutLeft"
					delay={500}
					animateOnce={false}
				>
					<img src={EmployPic} width="100%" height="auto" alt="trainee " />
				</ScrollAnimation>
			</Grid>
			<Grid item xs={12} md={6} sm={12} lg={6} style={{ paddingLeft: '5%' }}>
				<ScrollAnimation
					animateIn="fadeInLeft"
					animateOut="fadeOutRight"
					delay={500}
					animateOnce={false}
				>
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
					<h3
						style={{ opacity: 0.4, fontSize: '1.3em' }}
						id="align-text-center"
					>
						A structured career Bootcamp to equip entry-level graduates and
						potential jobseekers with the skills and confidence that employers
						are looking for.
					</h3>
					<Grid item>
						<Button
							variant="contained"
							color="secondary"
							style={{ borderRadius: 30 }}
						>
							Apply
							<ArrowForwardIcon color="#fff" />
						</Button>
					</Grid>
				</ScrollAnimation>
			</Grid>
		</Grid>
	);
};

export default Employ;
