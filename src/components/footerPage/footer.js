import React from 'react';
import Grid from '@material-ui/core/Grid';
import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import susPic from '../../images/sdg.png';
import './footer.css';
const Footer = () => {
	return (
		<Grid container style={{ backgroundColor: '#00042a' }}>
			<Grid
				container
				style={{
					color: '#aaa',
				}}
				id="footer-container-style"
			>
				<Grid item xs={12} sm={12} md={3} lg={3}>
					<h5
						style={{ borderBottom: '5px solid #ffc266', textAlign: 'center' }}
					>
						Africa Skills Hub
					</h5>
					<div style={{ paddingLeft: '2%', paddingRight: '2%' }}>
						<p>
							Africa Skills Hub is a youth employment accelerator and business
							incubator that aims at building Africa’s next generational change
							agents through practical and accessible learning and coaching
							tools, delivered online and offline using our Career Pathways
							Mode. The Career Pathways Mode (CPM) comprises Digital Skills,
							Leadership Skills and Entrepreneurial Skills.
						</p>
					</div>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={3}
					lg={3}
					style={{ paddingLeft: '2%', paddingRight: '2%' }}
				>
					<h5
						style={{ borderBottom: '5px solid #ffc266', textAlign: 'center' }}
					>
						Our Approach
					</h5>
					<div style={{ paddingLeft: '2%', paddingRight: '2%' }}>
						<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
							<a href="/programs/#work-readiness">Work Readiness Program</a>
						</p>
						<p style={{ lineHeight: '1.2em', textAlign: 'left' }} href="fund">
							<a href="/programs/#entrepreneurship">
								Entrepreneurship and Business Incubation Services
							</a>
						</p>
						<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
							<a href="/programs/#apprenticeship-services">
								Apprenticeship Services
							</a>
						</p>
						<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
							<a href="/programs">Online Courses</a>
						</p>
					</div>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={3}
					lg={3}
					style={{ paddingLeft: '2%', paddingRight: '2%' }}
				>
					<h5
						style={{ borderBottom: '5px solid #ffc266', textAlign: 'center' }}
					>
						Internships
					</h5>
					<div
						style={{
							paddingLeft: '2%',
							paddingRight: '2%',
							display: 'flex',
							flexDirection: 'column-reverse',
						}}
					>
						<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
							<a href="/internship/#corporate-benefits">Corporate Benefits</a>
						</p>
						<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
							<a href="/internship/#university-benefits">University Benefits</a>
						</p>
						<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
							<a href="/internship/#students-benefits">Students Benefits</a>
						</p>
						<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
							<a href="/internship/#how-to-partner">How to Partner</a>
						</p>
						<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
							<a
								href="/internship/#intern-abroad
							"
							>
								Intern Abroad
							</a>
						</p>
					</div>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={3}
					lg={3}
					style={{ paddingLeft: '2%', paddingRight: '2%' }}
				>
					<div>
						<h5
							style={{ borderBottom: '5px solid #ffc266', textAlign: 'center' }}
						>
							Office
						</h5>

						<div style={{ textAlign: 'center' }}>
							<div>
								<LanguageIcon style={{ color: '#fff', textAlign: 'center' }} />
								<p>B378/14, New Abossey Okai St.</p>
							</div>
							<div>
								<MailOutlineIcon style={{ color: '#fff' }} />
								<p style={{ lineHeight: '1.2em', textAlign: 'center' }}>
									<a href="mailto:info@africaskillshub.org">
										info@africaskillshub.org
									</a>
								</p>
							</div>
							<div>
								<a href="https://www.facebook.com/AfricaSkillsHub/">
									<FacebookIcon style={{ color: '#fff', paddingRight: 10 }} />
								</a>
								<a href="https://twitter.com/africaskillshub">
									<TwitterIcon style={{ color: '#fff', paddingRight: 10 }} />
								</a>
								<a href="https://www.linkedin.com/company/africaskillshub/">
									<LinkedInIcon style={{ color: '#fff', paddingRight: 10 }} />
								</a>
								<a href="https://www.instagram.com/africaskillshub/">
									<InstagramIcon style={{ color: '#fff', paddingRight: 10 }} />
								</a>
							</div>
							<div style={{ paddingTop: '3%' }}>
								<img
									src={susPic}
									alt="sustainable goals logo"
									width="100px"
									height="auto"
								/>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				style={{ alignItems: 'center', textAlign: 'center' }}
			>
				<p style={{ color: '#aaa', textAlign: 'center' }}>
					&copy;2020 Copyright People Initiative Foundation
				</p>
			</Grid>
		</Grid>
	);
};
export default Footer;
