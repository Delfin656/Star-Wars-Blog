import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdditionalInfo } from "../component/additionalinfo.jsx";

export const SingleChar = () => {
    const API_URL = "https://www.swapi.tech/api/"
    const [singleChar, setSingleChar] = useState([])
    const params = useParams()

    const getSingleChar = async (cid) => {
        try {
            const response = await fetch(API_URL + `people/${cid}`)
            if (!response.ok) {
                new Error("Ocurrió un error en la solicitud getSingleChar")
            }
            const body = await response.json();
            console.log("Characters", body);
            setSingleChar(body.result.properties);
            return body;

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getSingleChar(params.cid);
    }, []);

    return (
        <div>
            <div className="d-flex">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.cid}.jpg`} className="img-single-sizing m-3 rounded"
                    alt="..." onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // evita bucles 
                        currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }} />
                <div className="mx-4 justify-content-center bg-dark bg-gradient rounded">
                    <h1 className="text-warning mt-3 ms-3">{singleChar.name}</h1>
                    <h4 className="text-warning fs-5 ms-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda doloribus incidunt molestias minima aliquam dolor in, dolores eaque repellat minus ipsa nihil sunt esse.</h4>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-4 mx-3 py-4 border-top border-2 border-danger">
                <AdditionalInfo name="Name" data={singleChar.name} />
                <AdditionalInfo name="Birth Year" data={singleChar.birth_year} />
                <AdditionalInfo name="Gender" data={singleChar.gender} />
                <AdditionalInfo name="Height" data={singleChar.height} />
                <AdditionalInfo name="Skin Color" data={singleChar.skin_color} />
                <AdditionalInfo name="Eye Color" data={singleChar.eye_color} />
            </div>
        </div>
    )
}
