import{ LOAD_START, LOAD_SUCCESS, LOAD_FAIL } from './../actions'
const initialState = {
	pokemon:{
		name:'BULBASAUR',
		id:'001',
		sprites: {
			front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
			back_default: '',
			front_shiny: '',
		},
		stats:[
			{base_stat:45},
			{base_stat:49},
			{base_stat:49},
			{base_stat:65},
			{base_stat:65},
			{base_stat:45},
			{total:0},
		],
		types:[
			{
				type:{name:''}
				},
			{
				type:{name:''}
				},
		],
		abilities: [
			{
				ability:{
					name: ''
				},
				is_hidden:false,
			}
		]
	},
	isLoading: false,
	errors: '',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case(LOAD_START):
			return({
				...state,
				pokemon:{},
				isLoading:true,
				errors:'',
			})
		case(LOAD_SUCCESS):
			return({
				...state,
				pokemon: action.payload,
				isLoading: false,
				errors:'',
			})
		case(LOAD_FAIL):
			return({
				...state,
				pokemon:{},
				isLoading:false,
				errors:action.payload,
			})
		default:
			return state;
	}
}