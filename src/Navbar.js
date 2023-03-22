import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();

	const { pathname } = location;
	const splitLocation = pathname.split("/");

	return (
		<nav className="navbar">
			<h1>Z blogs</h1>
			<div className="links"></div>
			<Link
				className={splitLocation[1] === "" ? "active-navbar" : ""}
				to="/"
			>
				Home
			</Link>
			<Link
				to="/create"
				className={splitLocation[1] === "create" ? "active-navbar" : ""}
			>
				New Blog
			</Link>
		</nav>
	);
};

export default Navbar;
