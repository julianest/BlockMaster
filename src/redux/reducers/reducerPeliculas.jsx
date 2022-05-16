import { typePeliculas } from "../types/types"

const initialState = {
	films: []
}
export const reducerPeliculas = (state = initialState, action) => {
	switch (action.type) {
		case typePeliculas.add:
			return {
				films: [action.payload]
			}
		case typePeliculas.list:
			return {
				films: [...action.payload]
			}
		case typePeliculas.delete:
			return {
				films: state.films.filter(p => p.id !== action.payload)
			}
		case typePeliculas.edit:
			return {
				...state
			}
		case typePeliculas.search:
			return {
				films: action.payload
			}
		default:
			return state
	}
}