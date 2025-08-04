const fetch = require('node-fetch'); 
const prompt = require('prompt-sync')(); 

async function buscarPokemon() {
    const nombre = prompt('Escribí el nombre del Pokémon: ').toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        console.log('No se encontró el Pokémon. Ingresa nuevamente el nombre.');
        return;
      }
  
      const datos = await respuesta.json();

      console.log('Resultado:');
      console.log('Nombre:', datos.name);
      console.log('Altura:', datos.height);
      console.log('Tipo(s):', datos.types.map(t => t.type.name).join(', '));
    } try { 
    }catch (error) {
      console.log('Ocurrió un error al buscar el Pokémon.');
    }

  buscarPokemon();  