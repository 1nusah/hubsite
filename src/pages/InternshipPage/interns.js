/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Grid, Button } from '@material-ui/core';
import Footer from '../../components/footerPage/footer';
export default function Interns() {
	return (
		<Grid container style={{ paddingTop: '5%' }}>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				style={{
					backgroundColor: '#00042a',
					color: '#fff',
					paddingLeft: '10%',
					paddingRight: '10%',
				}}
			>
				<h1
					style={{
						fontSize: '2.25em',
						fontWeight: 'bolder',
						textAlign: 'center',
					}}
				>
					Academic Credit
				</h1>
				<div
					stlye={{
						fontSize: '1.2em',
						fontWeight: 'lighter',
						paddingRight: 'auto',
						paddingLeft: 'auto',
					}}
				>
					<h2
						style={{
							lineHeight: '2em',
							paddingLeft: '10%',
							paddingRight: '10%',
						}}
					>
						Many Universities in Africa require students to complete an
						internship as part of their degree course in order to graduate. We
						are expertly familiar with Work Integrated Learning techniques. We
						assist students who go through our internship program to meet and
						exceed requirements and have additional edge over their peers.
					</h2>
				</div>
			</Grid>
			<Grid item xs={12} md={12} sm={12} lg={12} style={{ padding: '10%' }}>
				<a name="corporate-benefits">
					<h1
						style={{
							textAlign: 'center',
							fontSize: '2.25em',
							fontWeight: 'bolder',
							opacity: 0.7,
						}}
					>
						Corporate Benefits
					</h1>
					<h2 style={{ fontSize: '1.7em', lineHeight: '1.5em', opacity: 0.7 }}>
						Africa Skills Hub provides dynamic, creative interns for hundreds of
						host companies in Ghana and abroad across a wide range of fields.
						Over the years, our host companies have benefitted from our interns'
						global insights and fresh ideas
					</h2>
					<Button
						variant="contained"
						color="secondary"
						style={{ borderRadius: 30 }}
					>
						Apply to host an intern now
					</Button>
				</a>
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				style={{
					color: '#fff',
					backgroundColor: '#00042a',
					paddingRight: '10%',
					paddingLeft: '10%',
				}}
			>
				<a name="university-benefits">
					<h1 style={{ textAlign: 'center' }}>University Benefits</h1>
					<div>
						<h2>The appeal of degrees to prospective students.</h2>
						<h2>
							Increase in employent and inbound mobility to Africa University
							Students.
						</h2>
						<h2>Preparation of students for success in a globalized world.</h2>
						<h2>Connect with university's alumni community abroad. </h2>
						<h2>Soft profiling of the university brand across the world</h2>
					</div>
				</a>
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				style={{ paddingLeft: '10%', opacity: 0.7, paddingRight: '10%' }}
			>
				<a name="students-benefits">
					<h1 style={{ textAlign: 'center' }}>Students Benefits</h1>
					<h2>
						Pratical application of career field and country-specific knowledge
						in the world's most exciting economies.
					</h2>
					<h2>
						Stand out from your peers with a strong resume/CV increase
						employability domestically and internationally.
					</h2>
					<h2>
						Gain first-hand experience in internation professional and cultural
						settings in Ghana, Nigeria, Kenya, Rwanda,Togo or the UK.
					</h2>
					<h2>
						Employability/differentiation in the home country and
						internationally.
					</h2>
					<h2>
						Potential future employment with international companies across the
						world.
					</h2>
				</a>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: '10%' }}>
				<Footer />
			</Grid>
		</Grid>
	);
}
