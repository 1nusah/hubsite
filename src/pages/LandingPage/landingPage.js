import React from 'react';
import Spinner from '../../components/Spinner/spinner';
import Employ from '../../components/EmployabilityPrograms/employ';
import Approach from '../../components/Approach/approach';
import Incubation from '../../components/Incubation/incubation.js';
import Mission from '../../components/Mission/mission.js';
import Partners from '../../components/Partners/partners.js';
import Stats from '../../components/Stats/stats';
import Footer from '../../components/footerPage/footer.js';
import Grid from '@material-ui/core/Grid';
import './landingPage.css';
const LandingPage = () => {
	return (
		<Grid container>
			<main
				id="mainStyle"
				style={{
					paddingTop: '5%',
				}}
			>
				<Spinner />

				<Employ />
				<Approach />

				<Incubation />

				<Mission />

				<Partners />

				<Stats />
			</main>
			<footer style={{ paddingTop: '10%' }}>
				<Footer />
			</footer>
		</Grid>
	);
};
export default LandingPage;
