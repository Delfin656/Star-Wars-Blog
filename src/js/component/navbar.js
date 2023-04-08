import React from "react";
import { Link } from "react-router-dom";
import StarWars from "../../img/StarWars-logo-transparente.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img 
							src={StarWars}
							alt=""
							width="80"
							height="80"
							className="img-fluid">
						</img>
						</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown">
							<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites <span className="badge bg-danger mx-1">0</span>
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li><a className="dropdown-item" href="#">Acción</a></li>
								<li><a className="dropdown-item" href="#">Otra acción</a></li>
								<li><a className="dropdown-item" href="#">Algo más aqui</a></li>
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};

