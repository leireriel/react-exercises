const ENDPOINT = 'https://raw.githubusercontent.com/oneeyedman/pokejson/master/data.json';

const fetchPokemons = () => fetch(ENDPOINT).then(res => res.json())

export {fetchPokemons};