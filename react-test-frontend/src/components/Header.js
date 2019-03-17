import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../img/logo.png';

class Header extends Component {

	state = {
		nav: []
	}

	componentDidMount = () => {
		fetch('http://reacttestbackend.local/wp-json/wp-menus/v1/menus/header')
			.then(res => res.json())
			.then(nav => {
				nav.forEach(item => {
						item.slug = item.title.replace(' ', '-').toLowerCase();
				})
				this.setState({
					nav,
				})
			}
			)
			.catch(err => console.log(err))
	}

	render() {
		const { nav } = this.state;
		return (
			<header>
				<div className="container">
					<a href="/">
						<img className="logo" src={Logo} alt="logo"/>
					</a>
					<nav className="nav">
						<ul>
							{nav.map(link => (
								<li key={link.ID} >
									<NavLink activeClassName="active" to={`/${link.slug}`}>{link.title}</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>
		)
	}
}

export default Header;