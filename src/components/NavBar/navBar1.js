import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { withRouter, Link } from 'react-router-dom';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuItem from '@material-ui/core/MenuItem';
import Logo from '../../images/logo2.jpeg';

import Menu from '@material-ui/core/Menu';

// import './NavBar.css';
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

const Header = (props) => {
	const { history } = props;
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = (pageURL) => {
		history.push(pageURL);
		setAnchorEl(null);
	};

	return (
		<AppBar position="static" style={{ backgroundColor: '#fff' }}>
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					<Button onClick={() => handleMenuClick('/')}>
						<img
							src={Logo}
							width={150}
							height={50}
							alt="africa skills hub logo"
						/>
					</Button>
				</Typography>
				<div>
					{isMobile ? (
						<IconButton>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={handleMenu}
							>
								<MenuIcon style={{ color: '#3f51b5' }} />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={() => setAnchorEl(null)}
							>
								<MenuItem onClick={() => handleMenuClick('/about')}>
									<Button color="#000" style={{ textTransform: 'capitalize' }}>
										About Us
									</Button>
								</MenuItem>
								<MenuItem onClick={() => handleMenuClick('/courses')}>
									<Button color="#000" style={{ textTransform: 'capitalize' }}>
										<a href="https://app.africaskillshub.org/">Courses</a>
									</Button>
								</MenuItem>
								<MenuItem onClick={() => handleMenuClick('/programs')}>
									<Button color="#000" style={{ textTransform: 'capitalize' }}>
										Program
									</Button>
								</MenuItem>
								<MenuItem onClick={() => handleMenuClick('/apply')}>
									<Button color="#000" style={{ textTransform: 'capitalize' }}>
										Apply
									</Button>
								</MenuItem>
								<MenuItem onClick={() => handleMenuClick('/fund')}>
									<Button color="#000" style={{ textTransform: 'capitalize' }}>
										SME Fund
									</Button>
								</MenuItem>
								<MenuItem onClick={() => handleMenuClick}>
									<Button color="#000" style={{ textTransform: 'capitalize' }}>
										<a href="https://app.africaskillshub.org/login">Login</a>
									</Button>
								</MenuItem>
							</Menu>
						</IconButton>
					) : (
						<>
							<Link to="/about">
								<Button color="#000" style={{ textTransform: 'capitalize' }}>
									About Us
								</Button>
							</Link>

							<Button color="#000" style={{ textTransform: 'capitalize' }}>
								<a href="https://app.africaskillshub.org/">Courses</a>
							</Button>
							<Link to="programs">
								<Button color="#000" style={{ textTransform: 'capitalize' }}>
									Program
								</Button>
							</Link>

							<Link to="/apply">
								<Button color="#000" style={{ textTransform: 'capitalize' }}>
									Apply
								</Button>
							</Link>
							<Link to="/fund">
								<Button color="#000" style={{ textTransform: 'capitalize' }}>
									SME Fund
								</Button>
							</Link>

							<Button color="#000" style={{ textTransform: 'capitalize' }}>
								<AccountCircleRoundedIcon />
								<a href="https://app.africaskillshub.org/login">Login</a>
							</Button>
						</>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
};
export default withRouter(Header);
