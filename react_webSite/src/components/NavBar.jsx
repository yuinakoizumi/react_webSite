import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import naviIcon1 from '../assets/img/nav-icon1.svg';
import naviIcon2 from '../assets/img/nav-icon2.svg';
import naviIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
	const {activeLink, setActiveLink} = useState('home');
	const {scrolled, setScrolled} = useState(false);

	useEffect(() =>{
		const onScrolled = () => {
			if(window.scrollY > 50){
				setScrolled(true);
			} else {
				setScrolled(false);
			}

		}
		window.addEventListener("scroll", onScrolled);
	}, [] )

	const anUpdateActiveLiink = (value) => {
		setActiveLink(value);
	}

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
			<img src={logo} alt="logo" />
		</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
			<span className="navi-bar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active active-link' : 'navbar-link'} onClick = {() => anUpdateActiveLiink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active active-link' : 'navbar-link'} onClick = {() => anUpdateActiveLiink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active active-link' : 'navbar-link'} onClick = {() => anUpdateActiveLiink('projects')}>Projects</Nav.Link>
          </Nav>
		  <span className='navi-text'>
			<div className='social-icon'>
				<a href='#'><img src={naviIcon1} alt=''></img></a>
				<a href='#'><img src={naviIcon2} alt=''></img></a>
				<a href='#'><img src={naviIcon3} alt=''></img></a>
			</div>
			<button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
		  </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
