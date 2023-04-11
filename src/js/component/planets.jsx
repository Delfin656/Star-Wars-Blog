import React, { useContext, useEffect, useState } from "react"
import { Card } from "./card.jsx"
import { Context } from "../store/appContext"


export const Planets = ()=> {
    const { store, actions } = useContext(Context)
    const [planets, setPlanets] = useState([])
    const favorites = store.favorites
    const API_URL_PLANETS= "https://www.swapi.tech/api/planets"

    async function getPlanets () {
		const response = await fetch(API_URL_PLANETS)
		if (!response.ok) {
			new Error("Ocurrió un error en la solicitud")
		}
		const body = await response.json ()
        setPlanets(body.results)
	}

    const PlanetsMapping = planets.map((planet, i) => {
        return (
            <Card key={i} name={planet.name} imgstyles="img-sizing" btnstyles={`${favorites.find(fav => fav.name == planet.name)? "active" : ""}`} imgtype="planets" urltype="planets" uid={planet.uid}/>
        )
    })

    useEffect (()=>{getPlanets()}, [])

    return (
        <div className="mt-4">
            <h1 className="ms-5 text-danger">Planets</h1>
            <div className="d-flex mt-3 pb-3 scroll-lat">
                {PlanetsMapping}
            </div>
        </div>
    )
}