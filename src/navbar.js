import React from 'react';
import './App.css';
import logo from "./Assets/logo.png";

function Navbar({loc, setIsMap}) {
	return (
		<div>
			<nav class="navbar background">
            <div class="logo">
						<img src={logo}/>
					</div>
				<ul class="nav-list">
					
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#book" onClick={() => loc ? setIsMap(true) : alert('Allow geolocation')}>Book Now</a></li>
				</ul>

				
			</nav>
            </div>
            )
}

export default Navbar
