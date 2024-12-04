'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/navigation'; // Para navegación dinámica

// Componente principal
export default function Page() {
  const [pokemon, setPokemon] = useState(null); // Estado para almacenar el Pokémon
  const router = useRouter(); // Para navegar dinámicamente

  // Función para obtener un Pokémon aleatorio
  const fetchRandomPokemon = async () => {
    try {
      const randomId = Math.floor(Math.random() * 1000) + 1; //Elijo un pokemon random hasta el 1000
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await res.json();

      // Guardamos solo los datos necesarios
      setPokemon({
        id: data.id,
        number: `#${data.id.toString().padStart(3, '0')}`, // Formato de número (#001, #002, etc.)
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        type: data.types.map((typeInfo) => typeInfo.type.name).join(', '),
      });
    } catch (error) {
      console.error('Error al obtener el Pokémon:', error);
    }
  };

  // Llamada a fetchRandomPokemon cuando se monta el componente
  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  // Función para manejar el clic en "Saber más"
  const handleSeeMore = () => {
    if (pokemon) {
      router.push(`/pokemon/${pokemon.id}`); // Navegar a la ruta del Pokémon
    }
  };

  return (
    <div style={styles.container}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/pokemon">PokeApi NEXT - JLS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/pokemon">Inicio</Nav.Link>
              <NavDropdown title="Generaciones" id="basic-nav-dropdown">
                <NavDropdown.Item href="/pokemon/gen1">Gen 1</NavDropdown.Item>
                <NavDropdown.Item href="/pokemon/gen2">Gen 2</NavDropdown.Item>
                <NavDropdown.Item href="/pokemon/gen3">Gen 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 style={styles.title}>Pokémon Aleatorio</h1>
      {pokemon ? (
        <div style={styles.card}>
          <img src={pokemon.image} alt={pokemon.name} style={styles.image} />
          <h2>
            {pokemon.number} - {pokemon.name.toUpperCase()}
          </h2>
          <button style={styles.button} onClick={handleSeeMore}>
            ¿Saber más?
          </button>
        </div>
      ) : (
        <p>Cargando Pokémon...</p>
      )}
    </div>
  );
}

// Estilos en línea
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  title: {
    margin: '20px 0',
    fontSize: '2rem',
    color: '#333',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '15px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
