import { useEffect, useState } from 'react';
import PokeCard from '../../components/PokeCard';
import styles from './styles.module.scss';
import axios from 'axios';

interface Pokemon {
  name: String,
  id: String,
  image: String
}

interface PokemonResponse {
  name: String,
  url: String
}

export default function MainPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemons = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=500');
    const data = res.data.results as Array<PokemonResponse>;

    const pokes = await Promise.all(
      data.map(async (pokemon: PokemonResponse) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const img = res.data.sprites.other.home.front_default;
        const id = res.data.id;

        const poke: Pokemon = {
          name: pokemon.name,
          id: id,
          image: img
        }

        return poke;
      })
    )

    setPokemons(pokes);
  }

  const renderPokemons = () => {
    if (pokemons.length < 1)
      return <div className={styles.load}></div>
    
    return pokemons.map(pokemon => {
      return (
        <PokeCard 
          name={pokemon.name}
          id={pokemon.id}
          image={pokemon.image}
        />
      )
    })
  }

  useEffect(() => {
    getPokemons();
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {renderPokemons()}
      </div>
    </section>
  )
}