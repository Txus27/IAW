'use client';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';

export default function Page({ params }) {
  const [pokemon, setPokemon] = useState(null); // Estado para almacenar los datos del Pokémon
  const [loading, setLoading] = useState(true); // Estado para mostrar mientras se cargan los datos
  const { id } = params; // Obtenemos el ID del Pokémon de los parámetros de la ruta

  // Función para obtener los datos del Pokémon
  const fetchPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon({
        id: data.id,
        number: `#${data.id.toString().padStart(3, '0')}`, // Formato del número
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        type: data.types.map((typeInfo) => typeInfo.type.name).join(', '),
      });
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener los datos del Pokémon:', error);
      setLoading(false);
    }
  };

  // para obtener los datos del Pokémon al cargar el componente
  useEffect(() => {
    fetchPokemon();
  }, [id]);

  return (
    <>
      <Modal show={true} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>
            {loading
              ? 'Cargando...'
              : `${pokemon?.number} - ${pokemon?.name.toUpperCase()}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <p>Cargando datos del Pokémon...</p>
          ) : (
            <>
              <img
                src={pokemon.image}
                alt={`Imagen de ${pokemon.name}`}
                style={{ width: '100%', marginBottom: '15px' }}
              />
              <p>
                <strong>Tipo:</strong> {pokemon.type}
              </p>
              <p>
                <strong>Puntos de salud:</strong> {pokemon.hp}
              </p>
              <p>
                <strong>Ataque:</strong> {pokemon.attack}
              </p>
              <p>
                <strong>Defensa:</strong> {pokemon.defense}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Link href="/pokemon" passHref> {/*Pokemon anterior - Falta poner la ruta, pero no recuerdo como ponerla dinámica*/}
            <button style={styles.button}>Anterior</button>
          </Link>
          <Link href="/pokemon" passHref> {/*Pokemon siguiente - Falta poner la ruta, pero no recuerdo como ponerla dinámica*/}
            <button style={styles.button}>Siguiente</button>
          </Link>
          <Link href="/pokemon" passHref> {/*Ruta que vuelve a la pagina principal cuando pulsas cerrar*/}
            <button style={styles.button}>Cerrar</button>
          </Link>                    
        </Modal.Footer>
      </Modal>
    </>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
