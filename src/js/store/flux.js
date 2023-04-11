const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
		},
		
		actions: {
			setFavorites: (favName, favURL, favUID) => {
				const store = getStore()
				setStore({favorites: [...store.favorites, {name: favName, type: favURL, uid: favUID}]})
			},
			setNewFavorites: (newFav) => {
				setStore({favorites: [...newFav]})
			}
		}
	};
};

export default getState;

