import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import "../../styles/index.css";

export const Card = (props) => {
	const { store, actions } = useContext(Context)
	const [active, setActive] = useState(false)
	const favorites = store.favorites
	const setFavorites = actions.setFavorites
	const setNewFavorites = actions.setNewFavorites

	function deleteFav(name) {
		const newList = favorites.filter((item, index) => {
			if (name == item.name) {
				return false
			}
			return true
		})
		setNewFavorites(newList)
	}

	return (
		<div className="rounded bg-white border-0 ms-5 char-card">
			<img src={`https://starwars-visualguide.com/assets/img/${props.imgtype}/${props.uid}.jpg`} className={`rounded-top ${props.imgstyles}`}
				alt="..." onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
				}} />
			<div className="card-body char-card">
				<h5 className="card-title">{props.name}</h5>
				<div className="d-flex justify-content-between mt-3">
					<Link to={`${props.urltype}/${props.uid}`} className="btn btn-outline-info">Learn more!</Link>
					<button className={`btn btn-outline-danger rounded ${props.btnstyles}`}
						onClick={() => {
							if (!favorites.find(fav => fav.name == props.name)) {
								setFavorites(props.name, props.urltype, props.uid)
							} if (favorites.find(fav => fav.name == props.name)) {
								deleteFav(props.name)
							}
						}}>
						<i className="fa-regular fa-heart"><strong className="ms-1">Fav</strong></i>
					</button>
				</div>
			</div>
		</div>
	)
};
Card.propTypes = {
	name: PropTypes.string,
	imgtype: PropTypes.string,
	imgstyles: PropTypes.string,
	urltype: PropTypes.string,
	btnstyles: PropTypes.string,
	uid: PropTypes.string,
}
						


