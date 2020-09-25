import React from 'react';
import Grid from '@material-ui/core/Grid';

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
							<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
								<a href="/internship/#corporate">Contact</a>
							</p>
							<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
								<a href="/internshi/#university">FAQ</a>
							</p>
							<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
								<a href="/internship/#student">Privacy Policy</a>
							</p>
							<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
								<a href="/how-to-partner">How to Partner</a>
							</p>
							<p style={{ lineHeight: '1.2em', textAlign: 'left' }}>
								<a href="internabroad.php">Intern Abroad</a>
							</p>
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
