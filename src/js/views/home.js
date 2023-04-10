import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchPeople();
    actions.fetchPlanets();
  }, []);

  return (
    <div className="ms-5 my-5">
      <div className="ms-5">
        <h1 className="text-danger">Characters</h1>

        {/* Cards characters */}
        {store.peopleList.map((item, index) => {
          return (
            <>
              <div className="d-flex mt-3 pb-3 scroll-lat">
                <div key={index} className="card" style={{ width: "18rem" }}>
                  <img
                    src={`https://starwars-visualguide.com/assets/img/${props.imgtype}/${props.uid}.jpg`}
                    className={`rounded-top ${props.imgstyles}`}
                    alt="..."
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src =
                        "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.uid}</p>
                    <div className="d-flex justify-content-between">
                      <Link to={"/characters"}>
                      <button type="button" className="btn btn-outline-primary">
                        Learn More
                      </button>{" "}
                      
                      </Link>
                      {store.favorites.includes(item.name) ? null : (
                        <button
                          type="button"
                          className="btn btn-outline-warning"
                          onClick={() => {
                            actions.setFavorites(item.name);
                          }}
                        >
                          ✰
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        <h1 className="text-danger">Planets</h1>
        
        {/* Cards planets */}
        {store.planetsList.map((item, index) => {
          return (
            <>
              <div className="d-flex mt-3 pb-3 scroll-lat">
                <div key={index} className="card" style={{ width: "18rem" }}>
                  <img
                    src={`https://starwars-visualguide.com/assets/img/${props.imgtype}/${props.uid}.jpg`}
                    className={`rounded-top ${props.imgstyles}`}
                    alt="..."
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src =
                        "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.uid}</p>
                    <div className="d-flex justify-content-between">
                    <Link to={"/planets"}>
                      <button type="button" className="btn btn-outline-primary">
                        Learn More
                      </button>{" "}


                    </Link>
                      {store.favorites.includes(item.name) ? null : (
                        <button
                          type="button"
                          className="btn btn-outline-warning"
                          onClick={() => {
                            actions.setFavorites(item.name);
                          }}
                        >
                          ✰
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

Home.propTypes = {
  imgtype: PropTypes.string,
  imgstyles: PropTypes.string,
  uid: PropTypes.string,
};
