import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import LoginModal from './LoginModal';
import './navbar.css';
import Logo from '../../static/images/logo.png';
import AuthService from '../../services/auth-service';
import { useSelector, useDispatch } from 'react-redux';
import { loginCheck, setUser } from '../../reduxcomps/actions';

export default function NavigationBar() {
	const history = useHistory();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.logged);
	// const [user2, setUser2] = useState(AuthService.getCurrentUser().accessToken);
	const [user2, setUser2] = useState('');
	// console.log(currUserInfo)

	const currUserFun = () => {
		if (user) {
			const currUser = JSON.parse(window.localStorage.getItem('USER_STATE'));
			const currUserInfo = JSON.parse(currUser.logged.user);
			return currUserInfo;
		}
	};

	const doLogoutUser = () => {
		AuthService.logout();
	};
	const [logoutUser, setLogoutUser] = useState(doLogoutUser);

	return (
		<Navbar expand="lg" variant="light" className="navbar">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{/* Logo Section */}
					<Nav className="me-auto">
						<Navbar.Brand href="/">
							<img
								src={Logo}
								width="30"
								height="30"
								className="d-inline-block align-top"
								alt="OmniConnx Logo"
							/>
						</Navbar.Brand>
					</Nav>

					{/* Links Section */}
					<Nav>
						<Nav.Link className="nav-item" href="/posts">
							Posts
						</Nav.Link>
						{/* Conditional rendering of logged-in features */}
						{user && (
							<Nav.Link className="nav-item" href="/prof">
								Profile
							</Nav.Link>
						)}
						{user && (
                            <Nav.Link className="nav-item" href="/skill">
                                Skills
                            </Nav.Link>
                        )}
						{!user && (
							<Nav.Link className="nav-item" href="/register">
								Register
							</Nav.Link>
						)}
						{!user && (
							<Nav.Link className="nav-item" href="/login">
								Login page
							</Nav.Link>
						)}
						{/* {user && (
							<Nav.Link
								className="nav-item"
								onClick={() => {
									dispatch(setUser(null));
									history.push('/');
									return logoutUser;
								}}
							>
								Logout
							</Nav.Link>
						)} */}

						{user && (
							<Nav.Link
								className="nav-item"
								onClick={() => {
									window.alert(`Signed out`);
									dispatch(setUser(null));
									history.push('/');
									return logoutUser;
								}}
							>
								Logout
							</Nav.Link>
						)}

						{user && <header>Welcome Back {currUserFun().username}</header>}
						{!user && <LoginModal />}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

// ------

// export default class NavigationBar extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.user = AuthService.getCurrentUser();
// 		this.logoutUser = this.logoutUser.bind(this);
// 		this.state = {
// 			redirect: false,
// 			logged: this.user,
// 		};
// 	}

// 	logoutUser() {
// 		AuthService.logout();
// 		// this.setState({ redirect: true });
// 		// const dispatch = useDispatch();
// 	}

// 	//function NavigationBar() {
// 	render() {
// 		if (this.state.redirect) {
// 			return <Redirect to="/" />;
// 		}
// 		return (
// 			<Navbar expand="lg" variant="light" className="navbar">
// 				<Container>
// 					<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 					<Navbar.Collapse id="basic-navbar-nav">
// 						{/* Logo Section */}
// 						<Nav className="me-auto">
// 							<Navbar.Brand href="/">
// 								<img
// 									src={Logo}
// 									width="30"
// 									height="30"
// 									className="d-inline-block align-top"
// 									alt="OmniConnx Logo"
// 								/>
// 							</Navbar.Brand>
// 						</Nav>

// 						{/* Links Section */}
// 						<Nav>
// 							<Nav.Link className="nav-item" href="/posts">
// 								Posts
// 							</Nav.Link>
// 							{/* Conditional rendering of logged-in features */}
// 							{this.user && (
// 								<Nav.Link className="nav-item" href="/prof">
// 									Profile
// 								</Nav.Link>
// 							)}
// 							{!this.user && (
// 								<Nav.Link className="nav-item" href="/register">
// 									Register
// 								</Nav.Link>
// 							)}
// 							{!this.user && (
// 								<Nav.Link className="nav-item" href="/login">
// 									Login page
// 								</Nav.Link>
// 							)}
// 							{this.user && (
// 								<Nav.Link className="nav-item" onClick={this.logoutUser}>
// 									Logout
// 								</Nav.Link>
// 							)}

// 							{!this.user && <LoginModal />}
// 						</Nav>
// 					</Navbar.Collapse>
// 				</Container>
// 			</Navbar>
// 		);
// 	}
// 	//}
// }
