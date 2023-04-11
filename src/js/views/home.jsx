import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters.jsx";
import { Planets } from "../component/planets.jsx";

export const Home = () => {
	return (
	<div className="mt-5">
    <>
		<Characters/>
		<Planets/>
    </>
	</div>
	)
};
		

  