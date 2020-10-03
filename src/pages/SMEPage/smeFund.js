import React from 'react';
import Grid from '@material-ui/core/Grid';
import introPic from '../../images/intro.jpeg';
import SimpleTable from '../../components/Table/table';
import Footer from '../../components/footerPage/footer';
import handsPic from '../../images/covid/smefund1.jpeg';
import kayTeaching from '../../images/covid/smefund2.jpeg';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
const FundPage = () => {
	return (
		<Grid container>
			<Grid
				container
				style={{
					backgroundColor: '#00042a',
					color: '#fff',
					marginBottom: '5%',
					paddingBottom: '5%',
					paddingTop: '5%',
				}}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
					}}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<img
							src={introPic}
							width="60%"
							height="auto"
							alt="intro "
							text-align="center"
							style={{ borderRadius: '50%' }}
						/>
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
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<h1
							style={{
								fontWeight: 'bold',
								fontSize: '1.7em',
								lineHeight: '1.2em',
							}}
						>
							Africa Skills Hub SME Support Fund
						</h1>
						<h3 style={{ fontWeight: 'lighter' }}>
							Africa Skills Hub provides investment finance and business support
							to growing usinesses in Ghana through our partner Whitehall
							Advisors Fund,Ghana.
						</h3>
						<h3 style={{ fontWeight: 'lighter' }}>
							Entrepreneurs and business owners looking to start or grow their
							businesses face many challenges, including finding a committed
							partnr who can provide finance structured according to the needs
							of their business as well as value-added business support services
							and networks that improve their chances of sucess
						</h3>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid container style={{ marginLeft: '5%', marginRight: '5%' }}>
				<Grid item xs nd sm lg style={{ color: '#333' }}>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<div
							style={{
								textAlign: 'center',
							}}
						>
							<h1 style={{ fontSize: '1.7em', lineHeight: '1.2em' }}>
								Why Choose Africa Skill Hub SME Support Fund?
							</h1>
						</div>
						<div>
							<h3>
								At Africa SKills Hub, we put your needs first. We roll up our
								sleeves and gain a thorough understanding of your business with
								you. This understanding reflects in repayments that are
								structured according to your cash flows, as also in the duration
								of our loan, which can range from 6 months to a maximum of 2
								years to ensure that we can tailor our offering to the precise
								requirements of your business.
							</h3>
							<h3>
								Our decision to partner with you is based on the viability of
								your business, which we further enhance with our pre-and-post
								finance business support services. Our business support function
								addresses critical management skills in areas such as business
								planning, operations, sales and marketing, HR planning and
								Environmental, Social & Governance(ESG)
							</h3>
						</div>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid container>
				<Grid
					item
					xs={12}
					sm={12}
					md={12}
					lg={12}
					style={{
						paddingBottom: '5%',
						marginBottom: '5%',
						marginLeft: '5%',
						marginRight: '5%',
					}}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<SimpleTable />
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid
				container
				style={{
					backgroundColor: 'whitesmoke',
					paddingBottom: '5%',
					marginBottom: '5%',
					marginLeft: '3%',
					marginRight: '3%',
				}}
			>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<img
							alt="holding hands"
							src={handsPic}
							width="100%"
							height="auto"
							text-align="center"
							alt="people holding hands"
						/>
					</ScrollAnimation>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{ color: '#333', paddingLeft: '3%' }}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<div style={{ borderBottom: '5px solid #ffc266' }}>
							<h1
								style={{
									textAlign: 'center',
									fontSize: '1.7em',
									lineHeight: '1.2em',
								}}
							>
								Who We Finance?
							</h1>
						</div>
						<div>
							<h3>
								We provide Small and Medium Enterprises(SME) finance/ business
								loans in Ghana such as SME lines of credit and early stage
								innovations finance. If you are looking to start or grow
								business, ou need a committed partner who can provide and
								finance business support that is structured according to your
								need then talk to us.
							</h3>
						</div>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<Grid
				container
				style={{ marginRight: '3%', marginLeft: '3%', marginBottom: '5%' }}
				direction="row-reverse"
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{ textAlign: 'center' }}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<img
							src={kayTeaching}
							alt="A staff lecturing"
							height="auto"
							width="100%"
						/>
					</ScrollAnimation>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{ color: '#333', paddingRight: '3%' }}
				>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOut="fadeOutRight"
						animateOnce={true}
						delay={500}
					>
						<div
							style={{ textAlign: 'center', borderBottom: '5px solid #ffc266' }}
						>
							<h1 style={{ fontSize: '1.7em', lineHeight: '1.2em' }}>
								Eligibility Criteria
							</h1>
						</div>
						<div>
							<h3>
								We seek to support more women entrepreneurs in rural areas in
								Ghana. But our key eligibility criteria are the business's
								financial and commercial viability. We will also evaluate the
								borrower's risk profile and ensure this falls within the
								acceptable levels
							</h3>
						</div>
						<div style={{ textAlign: 'center' }}>
							<Link to="/about">
								<Button
									color="secondary"
									variant="contained"
									style={{ borderRadius: 30 }}
								>
									If Interested Apply Here
									<ArrowForwardIcon style={{ color: '#fff' }} />
								</Button>
							</Link>
						</div>
					</ScrollAnimation>
				</Grid>
			</Grid>
			<div>
				<Footer />
			</div>
		</Grid>
	);
};

export default FundPage;
