import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Button,
	Toolbar,
	Typography,
	Card,
	CardContent,
} from '@material-ui/core';

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
	const [showMenuBool, setshowMenuBool] = useState(false);
	const showMenu = () => {
		setshowMenuBool(!showMenuBool);
		console.log(showMenuBool);
	};
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
					{showMenuBool && (
						<Card>
							<CardContent>
								<h1>hi there fuckers</h1>
							</CardContent>
						</Card>
					)}

					<div id="hamburger-icon">
						<Button>
							<MenuIcon
								style={{ fontSize: 40, color: '#3f51b5' }}
								onClick={() => showMenu()}
							/>
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
