import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from './../actions'

const Pokemon = (props) =>{
	const { pokemon, isLoading, error } = props;
	const typing = [];
	const ability = [];

useEffect(()=>{
	props.getPokemon();
}, []);

  if (error) {
    return <h2>We got ourselves an error: {error}</h2>;
  }
  if (isLoading) {
    return <h2>Fetching pokemon for ya!</h2>;
  }
	const handleClick = ()=>{
		props.getPokemon();
	}

	const hp = pokemon.stats[0].base_stat;
	const atk = pokemon.stats[1].base_stat;
	const def = pokemon.stats[2].base_stat;
	const spatk = pokemon.stats[3].base_stat;
	const spdef = pokemon.stats[4].base_stat;
	const spd = pokemon.stats[5].base_stat;

	for(let i=0;i<pokemon.types.length;i++){
		typing.push(pokemon.types[i].type.name);
	}
	for(let i=0;i<pokemon.abilities.length;i++){
		if(!pokemon.abilities[i].is_hidden){ability.push(pokemon.abilities[i].ability.name)};
	}

	return(
		<>
      <div>
        <h2>{pokemon.name.toUpperCase()}<br /> National Dex № {pokemon.id}</h2>
				<div>
        	<img src={pokemon.sprites.front_default} />
					<img src={pokemon.sprites.back_default} />
					<img src={pokemon.sprites.front_shiny} />
				</div>
				<div className='info'>
					<div>
						<p>HP: {hp}</p>
						<p>ATTACK: {atk}</p>
						<p>DEFENSE: {def}</p>
						<p>SPECIAL ATTACK: {spatk}</p>
						<p>SPECIAL DEFENSE: {spdef}</p>
						<p>SPEED: {spd}</p>
						<p>Total stats: {hp+atk+def+spatk+spdef+spd}</p>
					</div>
					<div>
						{
							typing.map(typ=>{
								return <p>TYPE: {typ}</p>
							})
						}
						{
							ability.map(abi=>{
								return<p>ABILITY: {abi}</p>
							})
						}
						<p>Base Exp: {pokemon.base_experience}</p>
						<p>Height: {pokemon.height}</p>
					</div>
				</div>
      </div>
      <button onClick={handleClick} >Random Pokemon!</button>
    </>
	);
}
const mapStateToProps = state => {
  return {
    pokemon: state.pokemon,
    isLoading: state.isLoading,
    error: state.error,
  };
};
const mapActionsToProps={
	getPokemon: getPokemon,
}
export default connect(mapStateToProps, mapActionsToProps)(Pokemon);