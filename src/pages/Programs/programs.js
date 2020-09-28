import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import EmployPic from '../../images/9.jpg';
import Business from '../../images/programs/business2.jpg';
import LesTalk from '../../images/8.jpg';
import Footer from '../../components/footerPage/footer';
import './programs.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
const Programs = () => {
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			style={{ marginTop: '2%' }}
		>
			<Grid item xs={12} md={12} lg={12} sm={12}>
				<ScrollAnimation
					animateIn="fadeInLeft"
					animateOut="fadeOutRight"
					animateOnce={true}
					delay={500}
				>
					<div
						style={{
							textAlign: 'center',
							backgroundColor: '#00042a',
							color: '#fff',
							padding: '5%',
						}}
					>
						<h1
							style={{ fontSize: '2.25em', lineHeight: '1.2em', color: '#fff' }}
						>
							Our Programs
						</h1>
						<p style={{ fontWeight: 'lighter' }}>
							Africa SKills Hub has implemented several training sessions for
							young people across Ghana and these training aimis to equip youth
							with the skills they need to drive the econoomy, compete on the
							global stagem and build their own businesses
						</p>
					</div>
				</ScrollAnimation>
			</Grid>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				style={{ padding: '5%' }}
			>
				<Grid item xs={12} sm={6} md={6} lg={6}>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<div>
							<img src={EmployPic} width="100%" height="auto" alt="trainee " />
						</div>
					</ScrollAnimation>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={6}
					lg={6}
					style={{
						paddingLeft: '5%',

						paddingTop: '5%',
					}}
				>
					<a name="work-readiness">
						<div id="employText" style={{ height: '100%' }}>
							<ScrollAnimation
								animateIn="fadeInLeft"
								animateOut="fadeOutRight"
								animateOnce={true}
								delay={500}
							>
								<h4 style={{ borderBottom: '5px solid #ffc266' }}>
									Work Readiness
								</h4>

								<p>
									Our Work Readiness Program bridges the gap between education
									and the world of work. A structured career BootCamp equips
									entry-level graduates and potential jobseekers with the skills
									and confidence that employers are looking for.
								</p>
								<Button
									variant="contained"
									color="secondary"
									style={{ borderRadius: 30 }}
								>
									Apply
									<ArrowForwardIcon color="#fff" />
								</Button>
							</ScrollAnimation>
						</div>
					</a>
				</Grid>
			</Grid>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				style={{ padding: '5%' }}
			>
				<Grid item xs={12} sm={6} md={6} lg={6}>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<div data-aos="fade-left">
							<img src={Business} width="100%" height="auto" alt="trainee " />
						</div>
					</ScrollAnimation>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} style={{ paddingLeft: '5%' }}>
					<a name="entrepreneurship">
						<ScrollAnimation
							animateIn="fadeInLeft"
							animateOut="fadeOutRight"
							animateOnce={true}
							delay={500}
						>
							<div id="employText">
								<h4 style={{ borderBottom: '5px solid #ffc266' }}>
									Entrepreneurship and Business Incubation Services
								</h4>

								<p>
									Our Entrepreneurship & Business Incubation services primarily
									focus on providing business development services; startup
									incubators and funding for young businesses and SMEs to enable
									them to grow and become successful through incubation. At thee
									incubation phase, we provide shared premises, business
									advisory and support services, acceess to investors, market
									and internation networks, mentoring and a full-time, hands on
									management coaching
								</p>
								<Button
									variant="contained"
									color="secondary"
									style={{ borderRadius: 30 }}
								>
									Apply
									<ArrowForwardIcon color="#fff" />
								</Button>
							</div>
						</ScrollAnimation>
					</a>
				</Grid>
			</Grid>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				style={{ padding: '5%' }}
			>
				<Grid item xs={12} sm={6} md={6} lg={6}>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<div>
							<img src={LesTalk} width="100%" height="auto" alt="trainee " />
						</div>
					</ScrollAnimation>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} style={{ paddingLeft: '5%' }}>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<a name="apprenticeship-services">
							<div id="employText">
								<h4 style={{ borderBottom: '5px solid #ffc266' }}>
									Apprenticeship Services
								</h4>

								<p>
									Our Apprenticeship Services focuses on arranging "Basic
									Training" for apprentices without formal educational
									qualifications as well as organizing on-the-job training by
									combining facilities available at several companies. This
									trainings upgrade the skill and competence level of our youth,
									improve human capital and job creation. As a skills hub, we
									recruit, employ and arrange training for apprentices on behalf
									of employers
								</p>
								<Button
									variant="contained"
									color="secondary"
									style={{ borderRadius: 30 }}
								>
									Apply
									<ArrowForwardIcon color="#fff" />
								</Button>
							</div>
						</a>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid>
				<Footer />
			</Grid>
		</Grid>
	);
};

export default Programs;
