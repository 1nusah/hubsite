import React from 'react';
import Part1 from '../../images/patners/AGI.png';
import Part2 from '../../images/patners/british-counsil.png';
import Part3 from '../../images/patners/Cotvet logo.png';
import Part4 from '../../images/patners/gesci-logo.png';
import Part5 from '../../images/patners/MDF.png';
import Part6 from '../../images/patners/ministry-of-business-development.png';
import Part7 from '../../images/patners/NABCO.jpg';
import Part8 from '../../images/patners/NBSSI.png';
import Part9 from '../../images/patners/neip.jpg';
import Part10 from '../../images/patners/Pyxera Global.png';
import Part11 from '../../images/patners/sdfff.jpg';
import Part12 from '../../images/patners/YEA.png';
import Grid from '@material-ui/core/Grid';
const Partners = () => {
	return (
		<Grid container style={{ paddingBottom: 20 }}>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				style={{ alignItems: 'center', textAlign: 'center', opacity: 0.4 }}
			>
				<h1>Meet Our Clients and Partners</h1>
			</Grid>
			<Grid container style={{ textAlign: 'center' }}>
				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part1}
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part2}
					/>
				</Grid>

				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part3}
					/>
				</Grid>

				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part4}
					/>
				</Grid>

				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part5}
					/>
				</Grid>

				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part6}
					/>
				</Grid>

				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part7}
					/>
				</Grid>

				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part8}
					/>
				</Grid>

				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part9}
					/>
				</Grid>

				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part10}
					/>
				</Grid>

				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part11}
					/>
				</Grid>

				<Grid item xs={12} sm={4} md={3} lg={3}>
					<img
						width="200px"
						alt="partners"
						style={{ padding: '10px' }}
						src={Part12}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default Partners;
