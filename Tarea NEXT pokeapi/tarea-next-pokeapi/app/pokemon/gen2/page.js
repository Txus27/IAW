'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/navigation'; // Para navegación dinámica

// Componente principal
export default function Page() {
  const [pokemons, setPokemons] = useState([]); // Estado para almacenar 10 Pokémon
  const router = useRouter(); // Para navegación dinámica

  // Función para obtener 10 Pokémon únicos aleatorios de la Gen 2
  const fetchUniqueRandomPokemons = async () => {
    try {
      const uniqueIds = new Set();

      while (uniqueIds.size < 10) {
        uniqueIds.add(Math.floor(Math.random() * (251 - 151 + 1)) + 151); // Rango 151 a 251
      }

      const promises = Array.from(uniqueIds).map(async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        return {
          id: data.id,
          number: `#${data.id.toString().padStart(3, '0')}`, // Formato de número
          name: data.name,
          image: data.sprites.other['official-artwork'].front_default,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          type: data.types.map((typeInfo) => typeInfo.type.name).join(', '),
        };
      });

      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error);
    }
  };

  // Llamada a fetchUniqueRandomPokemons cuando se monta el componente
  useEffect(() => {
    fetchUniqueRandomPokemons();
  }, []);

  // Función para manejar el clic en "Saber más"
  const handleSeeMore = (id) => {
    router.push(`/pokemon/${id}`); // Navegar a la ruta del Pokémon
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

      <h1 style={styles.title}>Pokémon Generación 2</h1>
      <div style={styles.grid}>
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <div key={pokemon.id} style={styles.card}>
              <img src={pokemon.image} alt={pokemon.name} style={styles.image} />
              <h2>
                {pokemon.number} - {pokemon.name.toUpperCase()}
              </h2>
              <button style={styles.button} onClick={() => handleSeeMore(pokemon.id)}>
                ¿Saber más?
              </button>
            </div>
          ))
        ) : (
          <p>Cargando Pokémon...</p>
        )}
      </div>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    width: '100%',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
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
