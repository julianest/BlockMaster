import { collection, getDocs, query, where, limit, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { DB } from "../../firebase/Firebase"
import { typePeliculas } from "../types/types"

export const listFilmsAsync = () => {
	return async (dispath) => {
		const collectionListar = await getDocs(collection(DB, "peliculas"))
		console.log(collectionListar)
		const querySearch = query(collection(DB, "peliculas"), limit(10))
		const queryListar = await getDocs(querySearch)
		console.log(queryListar)
		const films = []
		collectionListar.forEach(lista => {
			films.push({
				...lista.data()
			})
		})
		dispath(listFilmsSync(films))
	}
}
// return async (dispath) => {
//     const collectionListar = await getDocs(collection(DB, "peliculas"))
//     console.log(collectionListar)
//     const films = []
//     collectionListar.forEach(lista => {
//         films.push({
//             ...lista.data()
//         })
//     })
//     dispath(listFilmsSync(films))
// }
export const listFilmsSync = (film) => {
	return {
		type: typePeliculas.list,
		payload: film
	}
}
export const searchFilmsAsync = (nombreBuscar) => {
	return async (dispatch) => {
		const collectionListar = collection(DB, "peliculas")
		const q2 = query(collectionListar, where('title', '>=', nombreBuscar), where('title', '<=', nombreBuscar + '~'))
		const datosQ = await getDocs(q2)
		console.log(datosQ)
		const film = []
		datosQ.forEach((docu => {
			film.push(docu.data())
		}))
		dispatch(searchFilmsSync(film))
	}
}
export const searchFilmsSync = (film) => {
	return {
		type: typePeliculas.search,
		payload: film
	}
}
export const editFilmAsync = (id, peli) => {
	return async (dispatch) => {
		const collectionListar = collection(DB, "peliculas")
		const q = query(collectionListar, where('id', '==', id))
		const datosQ = await getDocs(q)
		let ids
		datosQ.forEach(async (docu) => {
			ids = docu.id
		})
		console.log(ids)
		const docUnico = doc(DB, "peliculas", id)
		await updateDoc(docUnico, peli)
			.then(resp => {
				dispatch(editFilmSync(peli))
				console.log(resp)
			})
			.catch(error => console.warn(error))
		dispatch(listFilmsAsync())
	}
}
export const editFilmSync = (peli) => {
	return {
		type: typePeliculas.edit,
		payload: peli
	}
}
export const deletFilmAsync = (id) => {
	return async (dispatch) => {
		const collectionListar = collection(DB, "peliculas")
		const q = query(collectionListar, where('id', '==', id))
		const datosQ = await getDocs(q)
		console.log(datosQ)
		datosQ.forEach(docu => {
			deleteDoc(doc(DB, 'peliculas', docu.id))
		})
		dispatch(deletFilmSync(id))
	};
};
export const deletFilmSync = (id) => {
	return {
		type: typePeliculas.delete,
		payload: id
	};
};