import React from 'react';
import './team.css';
import Grid from '@material-ui/core/Grid';
import DanPic from '../../images/team/danielamoako.jpg';
import lesPic from '../../images/team/leslie.jpg';
import anaPic from '../../images/team/anatu.jpg';
import NatPic from '../../images/team/nat.jpeg';
import BlessPic from '../../images/team/bless.jpg';
import gloriaPic from '../../images/team/gloria.jpeg';
import ntosoPic from '../../images/team/ntoso.jpeg';
import perfectPic from '../../images/team/perfect.jpeg';
import isaacPic from '../../images/team/isaac.jpg';
import RamPic from '../../images/team/ramatu.jpg';
import Zoo from '../../images/team/zotoo.JPG';
import Okpo from '../../images/team/philip.jpg';

const Team = () => {
	return (
		<Grid container>
			<Grid
				item
				xs={12}
				md={12}
				lg={12}
				sm={12}
				style={{ textAlign: 'center' }}
			>
				<div style={{ paddingBottom: '5%', opacity: 0.7 }}>
					<h1 style={{ letterSpacing: '5px' }}>
						Meet our
						<span style={{ color: '#3498db', paddingLeft: '5px' }}>Team</span>
					</h1>
				</div>
			</Grid>
			<Grid container>
				<Grid item xs={12} sm={6} md={3} lg={3} style={{ textAlign: 'center' }}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={DanPic}
							width="240px"
							height="240px"
							alt="daniel"
							text-align="center"
						/>
						<h3>DANIEL AMOAKO ANTWI</h3>
						<p>Co-Founder, Executive Director</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={lesPic}
							width="240px"
							height="240px"
							alt="leslie"
						/>
						<h3>EMMANUEL LESLIE ADDAE</h3>
						<p>Co-Founder, Head of Programs & Strategy</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={anaPic}
							width="240px"
							height="240px"
							alt="anatu"
						/>
						<h3>ANATU BEN-LAWAL</h3>
						<p>
							Head of Entrepreneurship, Innovation, and Economic Empowerment
						</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={NatPic}
							height="240px"
							width="240px"
							alt="nat"
						/>
						<h3>NATHANIEL ASARE</h3>
						<p>Head of Faculty & Fund Manager</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={BlessPic}
							alt=""
							width="240px"
							height="240px"
						/>
						<h3>BLESS KWASI AMENYO</h3>
						<p>Hub Manager</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={perfectPic}
							alt=""
							width="240px"
							height="240px"
						/>
						<h3>PERFECT DADUGBLOR</h3>
						<p>Digital Media Specialist</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={ntosoPic}
							alt=""
							width="240px"
							height="240px"
						/>
						<h3>DANIEL KWAKU NTOSO</h3>
						<p>Creative Associate</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={gloriaPic}
							alt=""
							width="240px"
							height="240px"
						/>
						<h3>NORA GLORIA BAMFOWAA</h3>
						<p>Programs Officer (M & E)</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={Zoo}
							alt="zoo"
							height="240px"
							width="240px"
						/>
						<h3>JOSEPH ZOTOO</h3>
						<p>Internship Coordinator</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={Okpo}
							alt="okpo"
							height="240px"
							width="240px"
						/>
						<h3>PHILIP MENSAH OKPOTI</h3>
						<p>Programs Officer</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={isaacPic}
							height="240px"
							width="240px"
							alt="isaac"
							style={{ borderRadius: '50%' }}
						/>
						<h3>ISAAC FORSON</h3>
						<p>Full Stack Developer</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<div className="image-innerContainer">
						<img
							style={{ borderRadius: '50%' }}
							src={RamPic}
							height="240px"
							width="240px"
							alt="ram"
						/>
						<h3>RAMATU ABUBAKAR</h3>
						<p>Office & Accounts Manager</p>
					</div>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default Team;
