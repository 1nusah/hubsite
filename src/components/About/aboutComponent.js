import React from 'react';
import Grid from '@material-ui/core/Grid';
import IntroImage from '../../images/intro.svg';
import Partners from '../Partners/partners';
import Team from '../Team/team';
import Footer from '../footerPage/footer';
import './aboutComponent.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
const AboutComponent = () => {
	return (
		<Grid>
			<Grid container id="about-component-styles">
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{ color: '#333', paddingRight: '5%' }}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={false}
						delay={500}
					>
						<div
							style={{ borderBottom: '5px solid #ffc266', textAlign: 'center' }}
						>
							<h1>About Africa Skills Hub</h1>
						</div>
						<div>
							<h3>Who we are?</h3>
							<h3>
								Africa Skills Hub(Formerly known as Africa Internship Academy)
								is a youth employment accelerator and business incubator that
								aims at building Africa's next generational change agents
								through pratical and accessible learning and coaching tools,
								delivered online and offline using our Career Pathways Module.
							</h3>
							<h3>
								The Career Pathways Module(CPM) comprises Digital Skills,
								LeaderShip Skills and Entreprenuerial Skills. Our approach-
								which combines both online and face to face with interactive
								sessions. 'Work Integrated Learning' requiures every young
								person to undergo a particular skills training to get an
								<strong>Africa Skills Badge.</strong>
							</h3>
							<h3>
								This initiative sought to create a skills mindset among young
								people across Africa. At the Africa Skills Hub, skills
								acquisition is the centre of our work as SKILLS have become the
								gloabal currency of the 21st century
							</h3>
						</div>
					</ScrollAnimation>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{ justifyContent: 'center' }}
				>
					<img
						src={IntroImage}
						width="100%"
						height="auto"
						alt="plant illustration"
						text-align="center"
					/>
				</Grid>
			</Grid>
			<Grid container>
				<Grid
					item
					xs
					id="second-row-why"
					style={{ paddingRight: '5%', paddingLeft: '5%', color: '#333' }}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={false}
						delay={500}
					>
						<h1 style={{ textAlign: 'center' }}> Why Africa Skills Hub</h1>
						<h3>
							The African Continent is projected to have the largest workforce
							by 2030 yet youth employment presents a huge crisis. Across the
							continent, more than 90% of the 10 million university each year do
							not find jobs, with an average 5-year lag before most find their
							first job. Without work, many are disillusioned and apathetic,
							seeking to leave their countries or embarking on unsafe trips
							through the Sahara and Mediterranean.
						</h3>
						<h3>
							Yet, organizations are struggling to source the management talent
							needed to service this rapid growth, wile youung Africans lack the
							skills needed to secure jobs or start successful businesses. Again
							is the lack of interest by young Africans to acquire hands-on
							skills for better careers in the informal sector which in terms of
							Gross Domestic Product.
						</h3>
					</ScrollAnimation>
				</Grid>
				<Grid container>
					<Grid item xs={12} sm={12} md={12} lg={12} id="approach-style">
						<ScrollAnimation
							animateIn="fadeInLeft"
							animateOut="fadeOutRight"
							animateOnce={false}
							delay={500}
						>
							<a name="approach">
								<h1 style={{ paddingTop: '3%', paddingBottom: '5%' }}>
									OUR APPROACH
								</h1>
								<div id="approach-border">
									<h3 id="approach-style-text">
										Our Career Pathway Module(CPM) is built around the 'Work
										Integrated Learning Style' which is described as more of
										work and team principle. As a youth employment accelerator
										and business incbator, we combine both online and offline
										learning and coaching tools to help build skilled African
										youth as agents of change. We introduce them to both soft
										and hard skills which help them to scale their career. We
										use well-experienced faculty and coaches to assist them as
										they go through 2-week extensive training to get an Africa
										Skills Badge. And that's where the magic happens.
									</h3>
								</div>
							</a>
						</ScrollAnimation>
					</Grid>
				</Grid>
				<Grid container style={{ paddingLeft: '5%', paddingRight: '5%' }}>
					<Team />
				</Grid>
				<Grid container>
					<Grid>
						<Partners />
					</Grid>
					<Grid>
						<Footer />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default AboutComponent;
