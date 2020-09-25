import React from 'react';
import Grid from '@material-ui/core/Grid';
import GetAppIcon from '@material-ui/icons/GetApp';
import LanguageIcon from '@material-ui/icons/Language';
import AssessmentIcon from '@material-ui/icons/Assessment';
const Stats = () => {
	return (
		<Grid
			container
			style={{
				backgroundColor: '#00042a',
				color: '#fff',
				paddingLeft: '2%',
				paddingRight: '2%',
			}}
		>
			<Grid item xs={12} sm={6} md={3} lg={3} style={{ textAlign: 'center' }}>
				<AssessmentIcon style={{ fontSize: 100, color: '#ffc266' }} />
				<h1 style={{ textAlign: 'center' }}>12,500</h1>
				<h3 style={{ textAlign: 'left' }}> People impacted so far</h3>
			</Grid>
			<Grid item xs={12} sm={6} md={3} lg={3} style={{ textAlign: 'center' }}>
				<GetAppIcon
					style={{ fontSize: 100, color: '#ffc266', fontWeight: 'lighter' }}
				/>
				<h1>320</h1>
				<h3 style={{ textAlign: 'left' }}>
					Young Business Startups & MSMEs Trained
				</h3>
			</Grid>
			<Grid item xs={12} sm={6} md={3} lg={3} style={{ textAlign: 'center' }}>
				<AssessmentIcon style={{ fontSize: 100, color: '#ffc266' }} />
				<h1>51 %</h1>
				<h3 style={{ textAlign: 'left' }}>
					of graduates from Africa Skills Hub are females between the ages of
					15-35
				</h3>
			</Grid>
			<Grid item xs={12} sm={6} md={3} lg={3} style={{ textAlign: 'center' }}>
				<LanguageIcon style={{ fontSize: 100, color: '#ffc266' }} />
				<h1 fontWeight="bolder" style={{ fontWeight: 'bold' }}>
					74 %
				</h1>
				<h3 style={{ textAlign: 'left' }}>
					of graduates employed within 90 days of program completion
				</h3>
			</Grid>
		</Grid>
	);
};
export default Stats;
