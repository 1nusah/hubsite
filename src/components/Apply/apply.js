import React from 'react';
import Grid from '@material-ui/core/Grid';
import CPMpic from '../../images/programs/CareerPathwaysModule.png';
import handsPic from '../../images/programs/training2.png';
import Button from '@material-ui/core/Button';
import excelPic from '../../images/programs/excel.png';
import retainPic from '../../images/programs/google.png';
import trainingPic from '../../images/programs/Training.png';
import Footer from '../../components/footerPage/footer';
import './apply.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
const Apply = () => {
	return (
		<Grid container style={{ paddingTop: '5%' }} id="apply-container">
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				style={{
					textAlign: 'center',
					backgroundColor: '#00042a',
					color: '#fff',
					height: '40vh',
					justifyContert: 'center',
					alignItems: 'center',
					marginBottom: '5%',
				}}
			>
				<ScrollAnimation
					animateIn="fadeInLeft"
					animateOut="fadeOutRight"
					animateOnce={true}
					delay={500}
				>
					<h1
						style={{
							fontSize: '2.65em',
							lineHeight: ' 1.2em',
							fontWeight: 'bolder',
						}}
					>
						Apply
					</h1>
					<h4 style={{ fontSize: '1.9em', lineHeight: '1.7em' }}>
						Sign up for any of the running programs below:
					</h4>
				</ScrollAnimation>
			</Grid>
			<Grid
				container
				style={{ paddingRight: '5%', paddingLeft: '5%', paddingBottom: '5%' }}
			>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<img
							src={CPMpic}
							width="100%"
							height="auto"
							text-align="center"
							alt="career pathway module"
						/>
					</ScrollAnimation>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{
						paddingLeft: '3%',
						backgroundColor: '#00042a',
						color: '#fff',
					}}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<div style={{ borderBottom: '5px solid #ffc266' }}>
							<h1>Employability Programs</h1>
						</div>
						<div>
							<h4>
								Are you a young person between the ages of 18-35 years? Do you
								want to kickstart or grow your career and you reside in Accra?
							</h4>
							<h4>
								Then apply to our Employability Program designed to build young
								people's career using our three pathway modules: Digital Skills,
								Leadership Skills and Entrepreneurship SKills.
							</h4>
						</div>
						<div>
							<Button
								style={{ borderRadius: 30 }}
								color="secondary"
								variant="contained"
							>
								Click Here To Apply
							</Button>
						</div>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid
				container
				id="apply-container"
				style={{ paddingRight: '5%', paddingLeft: '5%', paddingBottom: '5%' }}
			>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<img
						src={handsPic}
						alt="hands-on-training"
						width="100%"
						height="auto"
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{
						paddingLeft: '3%',
						backgroundColor: '#00042a',
						color: '#fff',
					}}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<div style={{ borderBottom: '5px solid #ffc266' }}>
							<h1>Hands-on Skills Training</h1>
						</div>
						<div>
							<h4>
								We run hands-on training skills acquisition both online &
								pratical online sessions.
							</h4>
							<h4>
								Module include: Production of household cleaning products,
								natural cosmetic production, fashion designing & entrepreneurial
								development
							</h4>
						</div>
						<Button
							style={{ borderRadius: 30 }}
							color="secondary"
							variant="contained"
						>
							Click Here To Apply
						</Button>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid
				container
				id="apply-container"
				style={{ paddingRight: '5%', paddingLeft: '5%', paddingBottom: '5%' }}
			>
				<Grid item xs={12} md={6} sm={12} lg={6}>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<img
							src={excelPic}
							width="100%"
							height="auto"
							text-align="center"
							alt="excel"
						/>
					</ScrollAnimation>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sm={12}
					lg={6}
					id="apply-container"
					style={{
						paddingLeft: '3%',
						backgroundColor: '#00042a',
						color: '#fff',
					}}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<div style={{ borderBottom: '5px solid #ffc266' }}>
							<h1>Advanced Excel Modelling for Accounting Professionals</h1>
						</div>
						<div>
							<h4>
								Do you want to learn how to use Excel? We have compiled the most
								important and advanced Excel formulas that every world-class
								financial analyst must know. Anyone interested must have acceses
								to a laptop and also willing to devote 4 Saturdays in a month
								for the training.
							</h4>
						</div>
						<Button
							style={{ borderRadius: 30 }}
							variant="contained"
							color="secondary"
						>
							Click Here to Apply
						</Button>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid
				container
				style={{ paddingRight: '5%', paddingLeft: '5%', paddingBottom: '5%' }}
				id="apply-container"
			>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<img
							src={retainPic}
							alt="retain worker"
							width="100%"
							height="auto"
							text-align="center"
						/>
					</ScrollAnimation>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{
						paddingLeft: '3%',
						backgroundColor: '#00042a',
						color: '#fff',
					}}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<div style={{ borderBottom: '5px solid #ffc266' }}>
							<h1>How to Use Google Tools Effectively at Work Place</h1>
						</div>
						<div>
							<h4>
								Are you an Office manager or Sales or Marketing or Programs
								officer or Manager? Do you eant to be very productive at work?
								THen join our evening sessions on how to use online productivity
								tools to make you efficient at the workplace. Anyone interested
								must have access to a laptop
							</h4>
						</div>
						<Button
							style={{ borderRadius: 30 }}
							variant="contained"
							color="secondary"
						>
							Click Here To Apply
						</Button>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid
				container
				id="apply-container"
				style={{ paddingRight: '5%', paddingLeft: '5%', paddingBottom: '5%' }}
			>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<img src={trainingPic} alt="training " width="100%" height="auto" />
					</ScrollAnimation>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{
						paddingLeft: '3%',
						backgroundColor: '#00042a',
						color: '#fff',
					}}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<div style={{ borderBottom: '5px solid #ffc266' }}>
							<h1>Search For Trainers</h1>
						</div>
						<div>
							<h4>
								Do you have any skills you can teach? Sign up to be an Africa
								Skills Hub Trainer now! Entrepreneurship, Digital Marketing,
								Artificial Intelligence, Machine Learning, Data Science, Graphic
								Design, Soap Making, Coding, Advanced Excel Applications, Wood
								Making & Make Up
							</h4>
						</div>
						<Button
							style={{ borderRadius: 30 }}
							variant="contained"
							color="secondary"
						>
							Click Here To Apply
						</Button>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<div>
				<Footer />
			</div>
		</Grid>
	);
};
export default Apply;
