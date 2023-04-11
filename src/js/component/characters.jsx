import React, { useContext, useState, useEffect } from "react"
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext"


export const Characters = ()=> {
    const { store, actions } = useContext(Context)
    const [characters, setCharacters] = useState([])
    const favorites = store.favorites
    const API_URL_PPL= "https://www.swapi.tech/api/people"

    const getCharacters = async () => {
		const response = await fetch(API_URL_PPL)
		if (!response.ok) {
			new Error("Ocurrió un error en la solicitud")
		}
		const body = await response.json ()
        setCharacters(body.results)
	}

    const CharMapping = characters.map((char, i) => {
        return (
            <Card key={i} name={char.name} imgstyles="" btnstyles={`${favorites.find(fav => fav.name == char.name)? "active" : ""}`} imgtype="characters" urltype="people" uid={char.uid}/>
        )
    })

    useEffect(() => {
        getCharacters();
      }, []);

    return (
        <div>
            <h1 className="ms-5 text-danger">Characters</h1>
            <div className="d-flex mt-3 pb-3 scroll-lat">
                {CharMapping}
            </div>
        </div>
    )
}