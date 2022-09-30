import React, { useEffect, useState } from 'react';
import useDataApi from '../hooks/useDataApi';

export default function GetPokemonApi() {
	const [pokemonName, setPokemonName] = useState('');
	const [{ data: pokemonData, isLoading, isError }, setUrl] = useDataApi(
		{ pokemon: [] },
		`https://pokeapi.co/api/v2/pokemon/1`
	);

	useEffect(() => {
		console.log(pokemonData);
	});

	return (
		<>
			{isError && <div>에러발생했습니다. 다시 시도해주세요.</div>}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
				}}
			>
				<input
					type="text"
					value={pokemonName}
					onChange={(e) => setPokemonName(e.target.value)}
				/>
				<button type="submit">포켓몬가져오기</button>
			</form>
			{isLoading ? (
				<div>데이터 불러오는 중...</div>
			) : (
				<>
					<h1>포켓몬: {pokemonData.name}</h1>
					<img src={pokemonData.sprites?.back_default} alt="back" />
					<img src={pokemonData.sprites?.front_default} alt="front" />
				</>
			)}
		</>
	);
}
