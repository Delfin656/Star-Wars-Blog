const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: [],
			planetsList: []
			
		},
		actions: {
			fetchPeople: async () => {
				try {
					const URL ="https://www.swapi.tech/api/people";
					const response = await fetch(URL);
					if (!response.ok) {
						new error("Paso algo malo en el fetchPeople");
					}
					const body = await response.json();
					console.log(">>DATA>>", body);
					setStore({ peopleList: body.results});
					return body;
					
				} catch (error) {
					console.error(error);
				}
			},

			fetchPlanets: async () => {
				try {
					const URL = "https://www.swapi.tech/api/planets/";
					const response = await fetch (URL);
					if (!response.ok){
						new error("Paso algo malo en el fetchPlanets");
					}
					const body = await response.json();
					console.log("Planetas", body);
					setStore({ planetsList: body.results });
					return body;
					
				} catch (error) {
					console.error(error);
				}
			},

			setFavorites: (name) => {
				const store = getStore();
				setStore({favorites: [...store.favorites, name]})

			},
		
			deleteFavorites: (name) => {
				const store = getStore();
				setStore({favorites: [ ...store.favorites.filter( x=> x != name)  ]})
			}
		}
	};
};

export default getState;

