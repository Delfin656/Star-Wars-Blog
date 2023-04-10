import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import StarWars from "../../img/StarWars-logo-transparente.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
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
              className="img-fluid"
            ></img>
          </span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
              <span className="badge bg-danger mx-1">
                {store.favorites.length}
              </span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {store.favorites.map((item, index) => {
                return (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {item}
                      <i
                        className="btn btn-danger btn-sm fas fa-trash ms-2"
                        onClick={() => actions.deleteFavorites(item)} // elimina favoritos
                      ></i>
                    </a>{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
