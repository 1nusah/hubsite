import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../../images/logo2.jpeg';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.css';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" style={{ backgroundColor: '#fff' }}>
				<Toolbar>
					<Typography
						variant="h6"
						className={classes.title}
						style={{ marginRight: 0 }}
					>
						<Link to="/">
							<Button>
								<img
									src={Logo}
									width={150}
									height={50}
									alt="africa skills hub logo"
								/>
							</Button>
						</Link>
					</Typography>
					<div id="hamburger-icon">
						<Button>
							<MenuIcon style={{ fontSize: 40, color: '#3f51b5' }} />
						</Button>
					</div>
					<div id="appbar-items">
						<Link to="/about">
							<Button color="#000">About Us</Button>
						</Link>

						<Button color="#000">
							<a href="https://app.africaskillshub.org/">Courses</a>
						</Button>

						<Link to="/programs">
							<Button color="#000">Program</Button>
						</Link>
						<Link to="/apply">
							<Button color="#000">Apply</Button>
						</Link>

						<Link to="/fund">
							<Button color="#000">SME Fund</Button>
						</Link>

						<Button color="#000">
							<AccountCircleRoundedIcon />
							<a href="https://app.africaskillshub.org/login">Login</a>
						</Button>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
