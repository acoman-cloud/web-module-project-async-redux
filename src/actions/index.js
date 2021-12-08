import axios from 'axios';

export const LOAD_START = 'FETCH_START';
export const LOAD_SUCCESS = 'FETCH_SUCCES';
export const LOAD_FAIL = 'FETCH_FAIL';

export const getPokemon= ()=>{
	return(dispatch)=>{
		dispatch({type:LOAD_START});
		const rand = Math.floor(Math.random()*898+1)
		console.log(rand);

		axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`)
			.then(esp=>{
				dispatch({type:LOAD_SUCCESS, payload:esp.data})
			})
			.catch(err=>{
				console.log(err);
				dispatch({type:LOAD_FAIL, payload:err,})
			})
	}
}