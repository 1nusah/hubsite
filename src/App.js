import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/landingPage';
import About from './components/About/aboutComponent';
import Expert from './pages/ExpertPage/expert';
import ApplyPage from './pages/ApplyPage/apply';
import FundPage from './pages/SMEPage/smeFund';
import NavBar from './components/NavBar/navbar';
import Programs from './pages/Programs/programs';
import Interns from './pages/InternshipPage/interns';
function App() {
	return (
		<div style={{ fontFamily: 'Poppins' }}>
			<Router>
				<nav>
					<NavBar />
				</nav>
				<Route path="/" component={LandingPage} exact />
				<Route path="/about" component={About} exact />
				<Route path="/experts" component={Expert} />
				<Route path="/apply" component={ApplyPage} />
				<Route path="/fund" component={FundPage} />
				<Route path="/programs" component={Programs} />
				<Route path="/internship" component={Interns} />
			</Router>
		</div>
	);
}

export default App;




